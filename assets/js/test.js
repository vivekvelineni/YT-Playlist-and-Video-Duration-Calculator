function Find() {
    var v = 0
    var Rawinput = document.forms["form"]["input_link"].value;
    var input = Rawinput.trim();
      if (/\s/.test(input) != true) {
  
        if ((input.length == 11) && (/[/=&?.:%]+/.exec(input) == null)){
          //console.log('it is a video id');
          return VideoOP()
        } else {
              v = v + 1
          }
  
        if ((input.includes('youtu') == true) && (input.includes('list') != true) && (input.length >= 20)){
          //console.log('it is a video link');
          return VideoOP()
        } else {
              v = v + 1
          }
  
        if (((input.length == 34) || (input.length == 13)) && (/[/=&?.:%]+/.exec(input) == null)){
          //console.log('it is a playlist id');
          return VideoOP()
        } else {
              v = v + 1
          }
  
        if ((input.includes('list') == true) && (input.includes('youtu') == true)){
          //console.log('it is a playlist link');
          return VideoOP()
        } else {
              v = v + 1
          }
  
      } else { 
          return Error()
        }
  
        if (v == 4) {
          return Error()
        }
  
        function Error() {
          document.getElementById("gif").setAttribute("style", "display : none;");
          document.getElementById("errorid").setAttribute("style", "display : block;");
          document.getElementById("op").setAttribute("style", "display : none;");
          document.getElementById("vop").setAttribute("style", "display : none;");
          document.getElementById("lop").setAttribute("style", "display : none;");
        }
        
    function VideoOP() { 
          document.getElementById("op").setAttribute("style", "display : none;");
          document.getElementById("vop").setAttribute("style", "display : block;");
          document.getElementById("lop").setAttribute("style", "display : none;");
    }
}
