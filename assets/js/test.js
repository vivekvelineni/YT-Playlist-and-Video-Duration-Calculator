<!DOCTYPE html>
<html lang = 'en'>

<head>
    <title>YouTube Playlist & Video Duration Finder</title>
    <meta charset="UTF-8" />
    <script type="module" src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <link rel = "shortcut icon" href = "assets/images/playlisticon.ico">
    <link rel = "stylesheet"  type = "text/css" href = "assets/css/index.css"/>
    <link rel="stylesheet" type="text/css" media="only screen and (max-device-width: 600px)" href="assets/css/mobile.css" />
    <script src = "assets/js/apirequest.js"></script>
</head>

<body>
        
    <noscript> <META HTTP-EQUIV="Refresh" CONTENT="0; URL = JSError.html"> </noscript>


    <div class = 'padleft'>
        <a onClick="window.location.reload()">
            <img class = 'logoimg' src = 'assets/images/playlistlogo.svg'>
        </a>
    </div>

    <div class = 'padright'>
        <a href = 'https://github.com/vivekvelineni' target = '_blank' title = "Vivek Velineni's github">
            <img class = 'gitimg' src = 'assets/images/githubicon.svg'>
        </a>
    </div>

    <h1 class = 'navbar'><FONT COLOR = 'black'>YouTube</FONT> Playlist & Video Duration 
        <a onClick="window.location.reload()" class = 'nodec'><FONT COLOR = 'blue'><u>Finder</u></FONT>🔎</a></h1>
    
        <hr class = 'horizontal' noshade>
    

    <h3 name = 'input_name' class = 'maintext'>Paste your YouTube
        Playlist or Video URL/ID below and click 'Find'</h3>
    
    <form name = 'form' method = 'post'>
        <input class = 'font lh' type = 'text' name = 'input_link' 
            size = '110' placeholder = 'Paste your YouTube Playlist URL here' required/>   
    </form>

    <br height="40%">
        <input type = 'submit' id = 'button' class = 'font lhb' value = 'Find🔎' onclick = "Find()">
    <br>

    <div class = 'scroll'>Scroll down the box to check for more info.</div>

    <br>
    
    <div class = 'divgif gif' id = 'gif'>

        <img src = "assets\images\winnie-the-pooh.gif"
        class = 'gif gifpad' style = 'display : block;'>

    </div> 

    <div class = 'op font' id = 'op' style = 'display : none;'>
        <b>
        <p id = 'Ptitle' class = 'rightpad color titlepad'></p>
        <p id = 'Pchan' class = 'rightpad color'></p>
        <p id = 'Ptdur' class = 'rightpad color'></p>
        <p id = 'Padur' class = 'rightpad color'></p>
        <p id = 'Ptvid' class = 'rightpad color'></p>
        <p id = 'Pdur0.5' class = 'rightpad color'></p>
        <p id = 'Pdur0.75' class = 'rightpad color'></p>
        <p id = 'Pdur1.25' class = 'rightpad color'></p>
        <p id = 'Pdur1.5' class = 'rightpad color'></p>
        <p id = 'Pdur1.75' class = 'rightpad color'></p>
        <p id = 'Pdur2' class = 'rightpad color'></p>
        </b>
    </div>

    <div id = 'vop' style = 'display : none;'>
        <div class = 'vop font' >
        <b>
            <p id = 'Vtitle' class = 'rightpad titlepad color'></p>
            <p id = 'Vchan' class = 'rightpad color'></p>
            <p id = 'Vtdur' class = 'rightpad color'></p>
            <p id = 'Vdur0.5' class = 'rightpad color'></p>
            <p id = 'Vdur0.75' class = 'rightpad color'></p>
            <p id = 'Vdur1.25' class = 'rightpad color'></p>
            <p id = 'Vdur1.5' class = 'rightpad color'></p>
            <p id = 'Vdur1.75' class = 'rightpad color'></p>
            <p id = 'Vdur2' class = 'rightpad color'></p>
        </b>
        </div>
        <br>
    </div>

    <div id = 'errorid' class = "error" style = 'display : none;'>
    
        <p class = 'rightpad titlepad'>Well 👉👈, unfortunately there seems to be some <FONT COLOR = 'red'>problem</FONT> 
            with the link that you have provided or <FONT COLOR = 'red'> <br>You might not have provided any link at all.</FONT></p>
        <p class = 'rightpad'>Some <FONT COLOR = 'red'>errors</FONT> with the link might be:</p>
        <p class = 'rightpad'>1. Your link might be <FONT COLOR = 'red'>expired/invalid/incomplete</FONT>.</p>
        <p class = 'rightpad'>2. You might have pasted a <FONT COLOR = 'red'>shortened URL.</FONT> Please paste original URL.</p>
        <p class = 'rightpad'>3. Correct Video link looks like this: <FONT COLOR = 'red'>www.youtube.com/watch?v=YQHsXMglC9A</FONT></p>
        <p class = 'rightpad'>4. Correct Playlist link: <FONT COLOR = 'red'>https://youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo</FONT></p>
        <p class = 'rightpad'style = 'text-align : center;'><FONT COLOR = 'red'>Please check your input link with correct link and try again.</FONT></p>
    
    </div>

    <div id = 'lop' class = "lop" style = 'display : none;'>
        <br>
        <p class = 'rightpad'style = 'text-align : center;'><FONT COLOR = 'red'>It's a Live Video.</FONT></p>
    
    </div>

</body>

<footer class = 'footer font'>
    <p>For huge playlists, usual loading time is 5 Sec or more. Please wait patiently.</p>
    <p>Made with 💖 by
        <a class = 'nodec footrcolour' href = 'https://github.com/vivekvelineni' 
        target = '_blank' title = "Vivek Velineni's github"> Vivek Velineni</a></p>
</footer>

</html>
