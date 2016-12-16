// data.ts - Default data to populate database with
// Copyright (C) 2016 Frank Hale <frankhale@gmail.com>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { IVideoGroup, IVideoEntry } from "./infrastructure";

export default class DefaultData {  
  static getData() : IVideoGroup[] {
    return [
      {
        group: "Trance",
        entries: [
          { title: "Somna & Jennifer Rene - Awakening (Assaf Remix)", ytid: "G9FRT9hQkaU" },
          { title: "Patrick Cassidy feat. Sibéal - Mise Éire (Bryan Kearney's UpRising Remix)", ytid: "WhpBGfutDiM" },
          { title: "Omar Sherif feat. Crystal Blakk - Hear You Calling (Extended Mix)", ytid: "ehxlW4lTios" },
          { title: "John O'Callaghan feat. Sarah Howells - Find Yourself (Standerwick Remix)", ytid: "KlWTGeTf5c8" },
          { title: "Somna & Jennifer Rene - Awakening (Original Mix)", ytid: "ldgV7H50ED8" },
          { title: "AMR feat Ai Takekawa - Beyond The Moon (Original Mix)", ytid: "VXPor8AsY48" },
          { title: "Afrojack - Ten Feet Tall (Lyric Video) ft Wrabel", ytid: "bltr_Dsk5EY" },
          { title: "Arcane Science feat Melissa Loretta - Still Feel (You Here) (Intro Mix)", ytid: "v9zmvPSHj9I" },
          { title: "Armin van Buuren feat Fiora - Waiting For The Night (Official International Music Video)", ytid: "dU26cGlmkRg" },
          { title: "Armin van Buuren feat Trevor Guthrie - This Is What It Feels Like (Official Music Video)", ytid: "BR_DFMUzX4E" },
          { title: "Armin van Buuren feat. Angel Taylor - Make It Right (Ilan Bluestone & Maor Levi Remix)", ytid: "x9559XApakc" },
          { title: "Armin van Buuren presents Gaia - J'ai Envie De Toi (Official Music Video)", ytid: "0FgKQdc96k4" },
          { title: "Armin van Buuren vs Sophie Ellis-Bextor - Not Giving Up On Love (Dash Berlin 4AM Mix) Official Video", ytid: "MQKt1RoUB9c" },
          { title: "BT feat Jes - Every other way (armin mix)", ytid: "cTXdgzb4wkU" },
          { title: "Beat Service & Ana Criado - So Much Of Me Is You (Original Mix)", ytid: "an_FDsq1Pkk" },
          { title: "Cosmic Gate & Emma Hewitt - Be Your Sound (Official Music Video)", ytid: "FxMtO7HvXzA" },
          { title: "Craig Connelly & Christina Novelli - Black Hole [Official Music Video]", ytid: "WPVv-Jjb0wQ" },
          { title: "Dash Berlin & Disfunktion feat Chris Arnott - People Of The Night", ytid: "b4ZuXTiWX44" },
          { title: "Dash Berlin - Never Cry Again (Jorn van Deynhoven Radio Mix) (Official Music Video) [High Quality]", ytid: "5gLIVqA9dFg" },
          { title: "Dash Berlin - Underneath The Sky (Sunsound Chillout Remix)", ytid: "UEqMD-5urik" },
          { title: "Dash Berlin feat Jonathan Mendelsohn - Better Half Of Me (Acoustic)", ytid: "De3Cjo23dOs" },
          { title: "Dash Berlin feat Jonathan Mendelsohn - Better Half Of Me (Acoustic) [Official Music Video]", ytid: "De3Cjo23dOs" },
          { title: "Dash Berlin feat. Christon - Underneath The Sky (Official Music Video)", ytid: "9oj1FTuscnY" },
          { title: "Dash Berlin ft Kate Walsh - When You Were Around (Official Music Video)", ytid: "LlGtQyOv2WA" },
          { title: "Dash Berlin ft Sarah Howells - Go It Alone (Official Music Video)", ytid: "IMepLfEJu6w" },
          { title: "Dreamy - Fusion (New World Remix) [Diverted Music Promo]", ytid: "D_8y-XX9wM8" },
          { title: "Estiva & Cardinal feat Arielle Maren - Wait Forever (Daniel Kandi's Bangin Remix)", ytid: "P0fp7fDxcVA" },
          { title: "Gareth Emery & Alastor feat. London Thor - Hands (Chris Metcalfe Remix)", ytid: "CAlPf4IcH3A" },
          { title: "Gareth Emery - Long Way Home [Official Video]", ytid: "0bj4i-sW44s" },
          { title: "Gareth Emery feat Bo Bruce - U (Official Video)", ytid: "jF7qGaKKD4M" },
          { title: "Gareth Emery feat Christina Novelli - Concrete Angel [Official Music Video]", ytid: "0dFz10R529g" },
          { title: "Gareth Emery feat Christina Novelli - Dynamite", ytid: "N2rj3os3IYg" },
          { title: "Gareth Emery feat Roxanne Emery - Soldier", ytid: "7b1WeyQ5cHw" },
          { title: "Gareth Emery feat Roxanne Emery - Too Dark Tonight", ytid: "WZFgVGU7pFk" },
          { title: "Gareth Emery feat. Wayward Daughter - Reckless", ytid: "tc7U9q1C4iA" },	
          { title: "Giuseppe Ottaviani feat Amba Shepherd - Lost For Words (Official Music Video)", ytid: "94CwUWWEgxw" },
          { title: "Ikerya Project feat Muhib Khan - It's Over Now (Original Mix) [As Played on Uplifting Only 115]", ytid: "flXZE9izGP0" },
          { title: "Ikerya Project feat. Muhib Khan - Its Over Now (Original Mix) [Digital Euphoria Recordings]", ytid: "QIklXSXdwP0" },
          { title: "Jasper Forks - River Flows In You (Out of Blackout Vocal Edit) [HD]", ytid: "5UwnhliP5N8" },
          { title: "Just Because", ytid: "9tox6_Lmd3k" },
          { title: "Knife Party - Fire Hive (Krewella Remix) [Dubstep]", ytid: "iuTOmyGXW6o" },
          { title: "Kyau & Albert - Another Time [Official Video] + Lyrics", ytid: "zlBo93AqZmg" },
          { title: "Lost Frequencies - Are You With Me (Dash Berlin Remix) (Lyrics Music Video)", ytid: "KYkRKvHYTls" },
          { title: "Luke Bond feat Roxanne Emery - On Fire [Official Music Video]", ytid: "pNM7bjb9JYw" },
          { title: "Mike Saint-Jules & Amy Kirkpatrick - Galaxy (A.R.D.I. Remix)", ytid: "ctrZdbExVrk" },
          { title: "Moonbeam feat Matvey Emerson - Wanderer (Original Mix)", ytid: "hT8KPRbzP8g" },
          { title: "Morgan Page Sultan + Ned Shepard & BT - In the Air feat Angela McCluskey", ytid: "WyK_82zrfTY" },
          { title: "Myon & Shane54 feat Aruna - Helpless", ytid: "mgmPydUzhgg" },
          { title: "New World - Ushio (Emotional Intro Mix) [As Played on Uplifting Only 090]", ytid: "gfAzQDCrUnQ" },
          { title: "Paul van Dyk feat Adam Young - Eternity (Official Music Video)", ytid: "FzT9YppKeeQ" },
          { title: "Phoebe Ryan - Mine (Illenium Remix)", ytid: "OHid2FWShAw" },
          { title: "R3hab & NERVO & Ummet Ozcan - Revolution (Vocal Mix)", ytid: "92P57Uk1VbM" },
          { title: "Rigby - Earth Meets Water (Official Video)", ytid: "8d3fWzPzP4A" },
          { title: "Rigby - Earth Meets Water (Wildstylez Remix)", ytid: "TyKvwXUy1aU" },
          { title: "Rigby - Lighter (Official Video)", ytid: "dxa47ePobPs" },
          { title: "Roman Messer feat Christina Novelli - Frozen (Official Music Video)", ytid: "LNJZSyl7RtE" },
          { title: "Skrux ft Delacey - My Love Is A Weapon", ytid: "oqbmz9ZncEs" },
          { title: "Somna & Jennifer Rene - Because You're Here (Sunset Remixi)", ytid: "8hERMvja-fA" },
          { title: "SoundGate - The Last Time (Original Mix) Reburn Records [Promo Video]", ytid: "TRO6xjybbnM" },
          { title: "Sub Focus - Tidal Wave ft Alpines", ytid: "B8vlk1UR99k" },
          { title: "Sunbrothers - Everything (Original Mix)", ytid: "wrMBe5cyNKA" },
          { title: "Syntouch - Into The Sky (Extended Orchestral Mix) [As Played on Uplifting Only 109]", ytid: "OuAkh9FqXs0" },
          { title: "Temple One & Sarah Lynn - Show Me The Stars (Original Mix)", ytid: "dTE9zXCmF7M" },
          { title: "Tom Swoon Lush & Simon - Ahead Of Us (Lyric Video)", ytid: "Btz1lteUtuM" },
          { title: "Yellow Claw - Love & War (feat. Yade Lauren)", ytid: "IqA3bKlP7kI" },
          { title: "Yuri Kane - Right back", ytid: "G9AG0wkLIp0" },
          { title: "illitheas - Epica (Intro Mix) [Abora Skies] Promo [Uplifting Only #119] Video Edit", ytid: "GxfwZMdSt4w" },
          { title: "Somna - Eon [A State Of Trance 761]", ytid: "zglu7nahIYk" },
          { title: "Sunlight Project feat Danny Claire - Stay (tranzLift Remix) Promo", ytid: "yWQvWTM7Hqg" },
          { title: "Syntouch - Lost Coast (Original Mix) *Promo* [Trancer Recordings]", ytid: "jj8EkplRBqk" }
        ]
      },
      {
        group: "Trance Sets",
        entries: [
          { title: "Arctic Moon Megamix - best tracks & remixes", ytid: "aX00On-X7K8" },
          { title: "BEST OF VOCAL TRANCE | MIX#4", ytid: "VZT9HGsv01A" },
          { title: "Best of Progressive & Melodic Trance 2013 Yearmix [5 Hour Set] [HD] - Shane Collins - APJ #32", ytid: "seBS2MEtALE" },
          { title: "Dash Berlin - Live @ Ultra Music Festival Miami Mainstage 2015 (Full Set)", ytid: "tS1NCigEB_I" },
          { title: "Dash Berlin - The Official Video Hit Mix", ytid: "U6l9NdAJwRk" },
          { title: "Goodbye 2013 Mix (Progressive Trance House Trouse Uplifting Melodic Vocal)", ytid: "RLVs7Csdmf8" },
          { title: "Incredible Emotional Vocal Trance Mix l April 2015 (Vol 26)", ytid: "3l2FHxVd71o" },
          { title: "Seven Lions Mix (Hour Long Melodic Dubstep / Trancestep Mix)", ytid: "7KfKft2lcog" },
          { title: "The Best Of Paul Van Dyk (Essential Mix)", ytid: "wg4TI4nA5IM" },
          { title: "This Was The Summer Of Hardstyle 2013", ytid: "kQko_qnKoW4" },
          { title: "Trance mix 2014 - Armin Van BuurenW&WPaul Oakenfold", ytid: "p68MTskBUnM" }
        ]
      },
      {
        group: "Christian",
        entries: [
          { title: "Among The Thirsty - Completely", ytid: "sFC-d9PTusw" },
          { title: "7eventh Time Down 'Just Say Jesus'", ytid: "T8CLgiYZyZE" },
          { title: "Audrey Assad - Breaking You (Live)", ytid: "RYuGuxr7MB0" },
          { title: "Audrey Assad - Death Be Not Proud", ytid: "sikF_phQHZw" },
          { title: "Audrey Assad - I Shall Not Want", ytid: "e5xEYgGr6ms" },
          { title: "Big Daddy Weave - Redeemed (Official Music Video)", ytid: "VzGAYNKDyIU" },
          { title: "Chris Tomlin - Awake My Soul (with Lecrae) [Lyrics]", ytid: "fWpvknKuYrg" },
          { title: "Chris Tomlin - Good Good Father (Live at the Grand Ole Opry)", ytid: "eaqaER7dasY" },
          { title: "Chris Tomlin - Good Good Father ft. Pat Barrett", ytid: "qlsQrycKKsY" },
          { title: "Chris Tomlin - How Great Is Our God (Lyrics And Chords)", ytid: "KBD18rsVJHk" },
          { title: "Chris Tomlin - How Great is Our God", ytid: "-20GqU9Q4UE" },
          { title: "Chris Tomlin - I Lift My Hands", ytid: "c24En0r-lXg" },
          { title: "Chris Tomlin - I Will Rise (Live)", ytid: "CKRF8UihM5s" },
          { title: "Chris Tomlin - Jesus Messiah (Lyrics And Chords)", ytid: "tdxSC1tHJn0" },
          { title: "Chris Tomlin - Whom Shall I Fear [God of Angel Armies] [Lyrics]", ytid: "qOkImV2cJDg" },
          { title: "Crowder - Come As You Are (Music Video)", ytid: "r2zhf2mqEMI" },
          { title: "Crowder - Come As You Are | Live at the Grand Ole Opry", ytid: "OuX9oTGBCw8" },
          { title: "Crowder - I Am (Lyric Video)", ytid: "cH_LLGiE0f0" },
          { title: "Danny Gokey - Hope In Front of Me", ytid: "O5GFiDdGGGM" },
          { title: "Tell Your Heart To Beat Again (Lyrics) By: Danny Gokey", ytid: "F77v41jbOYs" },
          { title: "Dave Barnes - God Gave Me You", ytid: "-zkrQMjlD3A" },
          { title: "Francesca Battistelli - He Knows My Name (Official Audio)", ytid: "1NHQJWdXfFE" },
          { title: "Francesca Battistelli - He Knows My Name (Official Video)", ytid: "jYpBgJHmGmw" },
          { title: "Francesca Battistelli - Write Your Story (Official Audio)", ytid: "ecV1NHmELuA" },
          { title: "Kari Jobe - I Am Not Alone (Lyric Video/Live)", ytid: "I2oel0_Xa54" },
          { title: "Lauren Daigle - How Can It Be (Lyric Video)", ytid: "6UXn_OuJkvE" },
          { title: "Love & The Outcome   The God I Know (Official Audio)", ytid: "gFeZB7Uz8yg" },
          { title: "Love & The Outcome - The God I Know (Official Music Video)", ytid: "Px_aCjR5ZFA" },
          { title: "Luminate - Banner of Love (Lyric Video)", ytid: "z4xk0dcc6gY" },
          { title: "Matt Redman - You Never Let Go (Passion '06)", ytid: "76ifTTuL4XI" },
          { title: "NEEDTOBREATHE - 'Multiplied' (Live Acoustic Video)", ytid: "vWT4gxAFQBs" },
          { title: "NEEDTOBREATHE - 'Multiplied' (Official Video)", ytid: "fGF-MGGLpB0" },
          { title: "Sanctus Real - Lay It Down (Lyric Video)", ytid: "q3f9GrbOXSA" },
          { title: "Stars Go Dim - You Are Loved [Official Music Video]", ytid: "thSOeSduSDQ" },
          { title: "Switchfoot -- Love Alone Is Worth The Fight [Official Video]", ytid: "rk9Pj3ID0UE" },
          { title: "Third Day - Cry Out To Jesus", ytid: "JmVxRl5bc4Y" },
          { title: "TobyMac - Speak Life", ytid: "ZeBv9r92VQ0" },
          { title: "Zach Williams - Chain Breaker (Official Lyric Video)", ytid: "JGYjKR69M6U" }
        ]
      },
      {
        group: "misc",
        entries: [
          { title: "30 Seconds To Mars - Alibi", ytid: "CUn4j0g1XtU" },
          { title: "30 Seconds To Mars - Closer To The Edge", ytid: "mLqHDhF-O28" },
          { title: "AMR feat Ai Takekawa - Beyond The Moon (Orbion Uplifting Remix)", ytid: "liF-EZ4CFOw" },
          { title: "Aaron Lewis - What Hurts The Most HD Live in Lake Tahoe 8/06/2011", ytid: "Yk9ByJZ0vrQ" },
          { title: "Ace of Base - The Sign (Official)", ytid: "iqu132vTl5Y" },
          { title: "Aeden - Tempest Sonata (Six Senses Remix) [TFB Records] [EXCLUSIVE PREMIERE]", ytid: "Y4pg6v74C5s" },
          { title: "Afternova - Empathy (Original Mix) [As Played on Uplifting Only 103]", ytid: "eAT9RPQeU6A" },
          { title: "Ai Takekawa & Adam Sobiech - Break The Light (Ryo Nakamura Remix)", ytid: "N7u4wRwRQFM" },
          { title: "Alex H feat Mona Moua - There's No Turning Back (Original Mix)", ytid: "9vYULN-72Oo" },
          { title: "Amir Hussain - Time Lapse (Extended Mix)", ytid: "A7kDgupVz6g" },
          { title: "Andy Blueman - Reflections (Original 2004 Mix)", ytid: "fB8u-vUNZhQ" },
          { title: "Annie Lennox - Why (Official Music Video)", ytid: "HG7I4oniOyA" },
          { title: "Armin van Buuren - Who's Afraid Of 138?! (Photographer Remix)", ytid: "2XlTEocKIWs" },
          { title: "Arnej feat Sally Saifi - Free Of You (8 Wonders Mix)", ytid: "yr-kJ5PgAN4" },
          { title: "Audioleap - Spark [A State Of Trance 761]", ytid: "gjpEJVK0lsc" },
          { title: "Aurosonic & Frainbreeze with Sarah Russell - Tell Me Anything (Original)", ytid: "vox8sNkFdAQ" },
          { title: "Aurosonic & Neev Kennedy - Now I See (Chill Out Mix)", ytid: "uBwIvFQwHr4" },
          { title: "Betsie Larkin & Solarstone - Breathe You In (Solarstone Pure Mix)", ytid: "7-LpBG809Po" },
          { title: "BoB - Paper Route [Official Video]", ytid: "t99LQ3zo8DU" },
          { title: "Bob Cartel feat Ai Takekawa - Lie To Me (Akku Remix) [Just Music Records] Promo", ytid: "ZmPlAHxalfw" },
          { title: "Boyce Avenue - On My Way", ytid: "Ie9VxRF7ucM" },
          { title: "Boyce Avenue - Speed Limit (Acoustic)", ytid: "i9PxU3ZftmI" },
          { title: "Break Every Chain by Jesus Culture Lyrics", ytid: "EtyVdC7E6Wo" },
          { title: "Chopin - The 21 Nocturnes (reference recording Claudio Arrau)", ytid: "uUdoxvigIl8" },
          { title: "Chris Schweizer - Scorpion", ytid: "wZlDOf63l2g" },
          { title: "Cinderella - Long Cold Winter - 1988 (FULL ALBUM)", ytid: "BldJ5ejRKqw" },
          { title: "Colleen D'Agostino ft deadmau5 - Stay (Drop The Poptart Edit)", ytid: "YPkwDy9okws" },
          { title: "Come Alive (Dry Bones) featuring Lauren Daigle - Live from the Centric Worship Retreat", ytid: "7XAeyFagceQ" },
          { title: "DEF LEPPARD - Long Long Way To Go (Official Music Video)", ytid: "E2KTcr1Mir0" },
          { title: "Danger Danger - I Still Think About You", ytid: "id1Po8ryJrU" },
          { title: "Dark Fusion ft Amy Kirkpatrick - I Just Close My Eyes (Sunset Remix) [TranceFamily] Promo Video", ytid: "avuoLKAi718" },
          { title: "Dark Matters feat Jess Morgan - The Perfect Lie (Beat Service Remix)", ytid: "dGd-QFuEUTA" },
          { title: "Dash Berlin & Syzz feat. Adam Jensen - Leave It All Behind", ytid: "OKgmwQNSW1g" },
          { title: "Dash Berlin - #MusicIsLife - Album", ytid: "DSOEUj8FAQ4" },
          { title: "Dash Berlin ft Sarah Howells - Go It Alone (Andrew Rayel Remix)(Official Music Video)", ytid: "eWaANlb3q68" },
          { title: "Def Leppard - Adrenalize - 1992 (FULL ALBUM)", ytid: "BTs98_pjwL4" },
          { title: "Denis Kenzo & Jilliana Danise-Will Be Forever (Original) [Lyric video]", ytid: "4mwbBTy607U" },
          { title: "Denis Kenzo & Sveta B - Let Me Go (Original Mix)", ytid: "ZBBjH9-FqOA" },
          { title: "Denis Kenzo & Sveta B. - Sunshine Blue", ytid: "YfWbSSoEZmg" },
          { title: "Denis Sender - Liquid Dreams (Ellez Ria Remix)", ytid: "2Vjjx72CVSY" },
          { title: "Dennis Sheperd & Sarah Lynn - Dive (Official Music Video) A Tribute To Life/RNM", ytid: "phmNqAiv7zQ" },
          { title: "Dennis Sheperd & Sarah Lynn - Dive (Original Mix)", ytid: "1CaNyznSA_c" },
          { title: "Dreamy - Fusion (New World Remix) [Diverted Music]", ytid: "7MWYPUWUWjQ" },
          { title: "Eric Stanley ft Kyle Landry - Inception 'Time' (Hans Zimmer Cover)", ytid: "NUtvWyJ0F_o" },
          { title: "Eric Zimmer - Sanctuary (TrancEye Remix) [D.MAX Recordings]", ytid: "rJjLz-3xeu0" },
          { title: "Farhad Mahdavi - Yearning [As Played on Uplifting Only 126]", ytid: "GqTM7eKZITg" },
          { title: "Ferry Corsten feat Betsie Larkin - Not Coming Down (Dash Berlin 4AM Remix)", ytid: "A-gljGbLt-A" },
          { title: "Ferry Corsten presents Gouryella - Anahera [Official Music Video]", ytid: "7ZMZHbAKvGA" },
          { title: "Fun - Carry On [OFFICIAL VIDEO]", ytid: "q7yCLn-O-Y0" },
          { title: "Fun Some Nights [OFFICIAL VIDEO]", ytid: "qQkBeOisNM0" },
          { title: "Fun We Are Young ft Janelle Monae [OFFICIAL VIDEO]", ytid: "Sv6dMFF_yts" },
          { title: "Gareth Emery & Alastor feat. London Thor - Hands (Chris Metcalfe Remix) [A State Of Trance 742]", ytid: "kz7LEuBG2v4" },
          { title: "Gareth Emery Feat. Lydia McAllister - Reckless (Standerwick Remix)", ytid: "_R9JpmSL6To" },
          { title: "Gareth Emery Feat. Wayward Daughter - Reckless (Standerwick Remix)", ytid: "P58FOqUMSH4" },
          { title: "Gareth Emery feat. Gavrielle - Far From Home (Craig Connelly Extended Remix)", ytid: "637k35PSAzk" },
          { title: "Gareth Emery feat. Gavrielle - Far From Home (Craig Connelly Remix) [A State Of Trance 761]", ytid: "FCRY7VHukjE" },
          { title: "Gareth Emery feat. Wayward Daughter - Reckless", ytid: "J78Zp5i5Loo" },
          { title: "Gareth Emery feat. Wayward Daughter - Reckless (Standerwick Remix) STANDERWICK Live ASOT 750 Toronto", ytid: "Y7CGTzM5nsQ" },
          { title: "Gareth Emery feat. Wayward Daughter - Reckless (Standerwick Remix) [A State Of Trance 753]", ytid: "-mOCl2XP4kE" },
          { title: "Hazem Beltagui & Allan V. - We Are (Original Mix)", ytid: "XArJECXJ4Lw" },
          { title: "Howard Jones - No One Is To Blame", ytid: "ENB2eX-U3a8" },
          { title: "Hozier - Take Me To Church", ytid: "PVjiKRfKpPI" },
          { title: "Inception - Time - Piano Solo HD", ytid: "JOtDS0vRwxg" },
          { title: "Jak Aggas & Victoria Shersick - Fly Away (Allen Watts Remix) [Amsterdam Trance] Video Edit", ytid: "NUcJfPTMXkk" },
          { title: "Kelly Clarkson Performs - Piece by Piece", ytid: "9FHYBQxURQo" },
          { title: "Lqd Hrmny - La Distance", ytid: "DhqYIyvnAvA" },
          { title: "Ludovico Einaudi - Nuvole Bianche [HD]", ytid: "kcihcYEOeic" },
          { title: "Maratone & Dreamy feat. Emma Chatt - Out From Under (Original Mix) [REDUX] -Promo- Video Edit", ytid: "FnERt5fGoOg" },
          { title: "Mark Eteson feat Audrey Gallagher - Breathe On My Own [Official Music Video]", ytid: "jwO51I9zlaE" },
          { title: "Matt Maher - Lord I Need You (feat Audrey Assad) - Acoustic", ytid: "iaVPupbNFAo" },
          { title: "Metallica - Enter Sandman Live Moscow 1991 HD", ytid: "_W7wqQwa-TU" },
          { title: "Metallica Fade to Black in real HD !!!! awesome !!!!", ytid: "0FMfsT11pdA" },
          { title: "Oceanlab - Secret (Andrew Bayer Remix)", ytid: "K3crNooxyAM" },
          { title: "One Republic - Apologize", ytid: "fm0T7_SGee4" },
          { title: "Ong Namo by Snatam Kaur", ytid: "c1XCS0g6J4A" },
          { title: "PJ Simas - Show Goes On Remix", ytid: "vAhjWd4_LZ0" },
          { title: "Rachel Platten - Fight Song (Official Video)", ytid: "xo1VInw-SKc" },
          { title: "Robyn - Call Your Girlfriend - cover by Kait Weston Ft Sean Scanlon", ytid: "VAlgkvKTOZ0" },
          { title: "Simon O'Shine & Sergey Nevone - Last Goodbye (Original Mix)", ytid: "QLqbwLPE-LY" },
          { title: "Solis & Sean Truby feat. Anthya - Timeless (Ultimate Remix) [Infrasonic Recordings]", ytid: "2v0zijZjC0U" },
          { title: "Taylor Swift - Style", ytid: "-CmadmM5cOk" },
          { title: "Tenishia - Where Do We Begin (Andrew Rayel Remix)", ytid: "CgU8VIna5aM" },
          { title: "The Chainsmokers - Let You Go ft Great Good Fine Ok", ytid: "iiNXf0n_hrA" },
          { title: "The Fighter Remix - Kait Weston (feat Saint Maurice and Eppic)", ytid: "ijRVrGSaTms" },
          { title: "The Weeknd - Earned It (Fifty Shades Of Grey) (Lyric Video)", ytid: "xe_iCkFsQKE" },
          { title: "Thirty Seconds To Mars - Kings and Queens", ytid: "onMdBNeGiK4" },
          { title: "Thirty Seconds To Mars - This Is War", ytid: "Zcps2fJKuAI" },
          { title: "Tom Swoon, Lush & Simon - Ahead of Us", ytid: "dH8hqgoRVFY" },
          { title: "UDM - New Sunrise (Radio Edit) [As Played on Uplifting Only 124]", ytid: "kC44uGao2es" },
          { title: "Usher - Yeah! ft Lil Jon Ludacris", ytid: "GxBSyx85Kp8" },
          { title: "Varun Rajput - State of Grace (Liquid Tension Experiment Cover)", ytid: "2bVNP9vd4FU" },
          { title: "Velvetine - The Great Divide (Seven Lions Remix)", ytid: "LoKJd2nTpjs" },
          { title: "Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack", ytid: "RgKAFK5djSk" },
          { title: "Yiruma - River Flows in You", ytid: "7maJOI3QMu0" },
          { title: "You Raise Me Up Violin Cover - Josh Groban - Daniel Jang", ytid: "Z-zvV5Bsshc" },
          { title: "illitheas & Johannes Fischer - Tears of Hope (Chillout Mix) [As Played on Uplifting Only 154]", ytid: "PPXT3eMkk3w" },
          { title: "illitheas & Johannes Fischer - Tears of Hope (Original Mix) [As Played on Uplifting Only 153]", ytid: "aN1oTHHNafc" },
          { title: "illitheas - Endless (Final Version) [As Played on Uplifting Only 113]", ytid: "kqnOnilA6ac" },
          { title: "illitheas - Halion (Original Mix) [Digital Euphoria] Promo/Uplifting Only #168 ASOT 761", ytid: "i8EUsjx-Yao" }
        ]
      }
    ];
  }
}
