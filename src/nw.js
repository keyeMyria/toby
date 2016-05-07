(function() {
  const spawn = require("child_process").spawn,
        split = require("split"),
        _ = require("lodash"),
        win = nw.Window.get(),
        socket = require("socket.io")(62375),
        request = require("request"),
        node = spawn("node.exe", ["./build/server.js"], { cwd: process.cwd() }),
        $content = $("#content"),
        $webview = $("#webview"),
        webview = $webview[0];

  var resizeContent = function() {
    $content.css("width", window.innerWidth - 20);
    $content.css("height", window.innerHeight - 20);
  };

  window.addEventListener("resize", function(e) {
    resizeContent();
  });

  resizeContent();

  key("f1", function() {
    if($content.css("visibility") === "hidden") {
      $content.css("visibility", "visible");
      $webview.css("visibility", "hidden");
    } else {
      $content.css("visibility", "hidden");
      $webview.css("visibility", "visible");
    }
  });

  key("f11", function() {
    if(win.isFullscreen) {
      win.leaveFullscreen();
    } else {
      win.enterFullscreen();
    }
  });

  socket.on("connection", function(s) {
    $content.append("Socket.IO connection established...<br/>");

    s.on("title", function(t) {
      if(t.title !== undefined && t.title !== "") {
        $content.append(`setting title to: ${t.title}<br/>`);
        document.title = t.title;
      }
    });
  });

  win.on("loaded", function() {
    win.showDevTools();
    win.show();
  });

  win.on("restore", function() {
    webview.executeScript(
      {
        code:
        `var actualCode = '(' + function() {
          snapToPlayer();
        } + ')();';
        var script = document.createElement('script');
        script.textContent = actualCode;
        (document.head||document.documentElement).appendChild(script);
        script.parentNode.removeChild(script);`
      }
    );
  });

  webview.addEventListener('permissionrequest', function(e) {
    if (e.permission === 'fullscreen') {
      e.request.allow();
    }
  });

  webview.addEventListener('newwindow', function(e) {
    // Looks like we can differentiate between clicking the YouTube icon
    // in the player where we want it to open an external browser and clicking
    // a suggested video link after a video is played.
    //
    // When clicking the YouTube link "time_continue" is present in the url.
    // {url: "https://www.youtube.com/watch?time_continue=1&v=ctrZdbExVrk"}
    //
    // When clicking on a suggested video the link is just an ordinary YouTube
    // video link with video ID.
    // {url: "https://www.youtube.com/watch?v=4nYMdMtGsPo"}

    e.preventDefault();

    const url = e.targetUrl;

    //if(url.includes("time_continue")) {
    //  nw.Shell.openExternal(url);
    //} else
    if(url.includes("?v=")) {
      // the id extraction is almost verbatim from:
      // http://stackoverflow.com/a/3452617/170217
      let video_id = url.split('v=')[1];
      let ampersandPosition = video_id.indexOf('&');
      if(ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
      }
      //------------------------------------------

      $content.append(`emitting: play-video for ${video_id}<br/>`);

      socket.emit("play-video", {
        url: url,
        ytid: video_id
      });
    } else {
      nw.Shell.openExternal(url);
    }
  });

  win.on('new-win-policy', function(frame, url, policy){
    policy.ignore();
  });

  win.on('close', function() {
    win.hide();

    $webview.remove();

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/api/app/close",
      async:false
    });

    win.close(true);
  });

  function strip(s) {
    // regex from: http://stackoverflow.com/a/29497680/170217
    return s.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
  }

  function redirectOutput(x) {
    let lineBuffer = "";

    x.on('data', function (data) {
      lineBuffer += data.toString();
      var lines = lineBuffer.split("\n");

      _.forEach(lines, function(l) {
        if(l !== "") {
          //console.log(strip(l));
          $content.append(strip(l) + "<br/>");
        }
      });

      lineBuffer = lines[lines.length - 1];
    });
  }

  redirectOutput(node.stdout);
  redirectOutput(node.stderr);

  function checkServerRunning() {
    request('http://localhost:3000', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        $webview.attr("src", "http://localhost:3000");
        $("#loading").css("display", "none");
        $webview.css("display", "block");
      } else {
        setTimeout(checkServerRunning, 1000);
      }
    });
  }

  checkServerRunning();
})();