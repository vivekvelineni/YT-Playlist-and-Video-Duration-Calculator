function Find() {
    var v = 0
    var Rawinput = document.forms["form"]["input_link"].value;
    var input = Rawinput.trim();
      if (/\s/.test(input) != true) {
  
        if ((input.length == 11) && (/[/=&?.:%]+/.exec(input) == null)){
          //console.log('it is a video id');
          return VideoAPI(input)
        } else {
              v = v + 1
          }
  
        if ((input.includes('youtu') == true) && (input.includes('list') != true) && (input.length >= 20)){
          //console.log('it is a video link');
          return VideoAPI(input)
        } else {
              v = v + 1
          }
  
        if (((input.length == 34) || (input.length == 13)) && (/[/=&?.:%]+/.exec(input) == null)){
          //console.log('it is a playlist id');
          return PlaylistAPI(input)
        } else {
              v = v + 1
          }
  
        if ((input.includes('list') == true) && (input.includes('youtu') == true)){
          //console.log('it is a playlist link');
          return PlaylistAPI(input)
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
        
        function NoneOP() {
          document.getElementById("gif").setAttribute("style", "display : none;");
          document.getElementById("errorid").setAttribute("style", "display : none;");
        }
        
        function VideoOP(duration,Vdetails) { 
          document.getElementById("op").setAttribute("style", "display : none;");
          document.getElementById("vop").setAttribute("style", "display : block;");
          document.getElementById("lop").setAttribute("style", "display : none;");
          document.getElementById("Vtitle").innerHTML = 'Title: ' + Vdetails[0].substr(0, 70) + '...'
          document.getElementById("Vchan").innerHTML = 'Channel: ' + Vdetails[1]
          document.getElementById("Vtdur").innerHTML = 'Total Duration: ' + duration[0][0] + duration[0][1] + duration[0][2]+ duration[0][3]
          document.getElementById("Vdur0.5").innerHTML = 'Duration at 0.5x: ' + duration[1][0] + duration[1][1] + duration[1][2] + duration[1][3]
          document.getElementById("Vdur0.75").innerHTML = 'Duration at 0.75x: ' + duration[2][0] + duration[2][1] + duration[2][2]+ duration[2][3]
          document.getElementById("Vdur1.25").innerHTML = 'Duration at 1.25x: ' + duration[3][0] + duration[3][1] + duration[3][2]+ duration[3][3]
          document.getElementById("Vdur1.5").innerHTML = 'Duration at 1.5x: ' + duration[4][0] + duration[4][1] + duration[4][2]+ duration[4][3]
          document.getElementById("Vdur1.75").innerHTML = 'Duration at 1.75x: ' + duration[5][0] + duration[5][1] + duration[5][2]+ duration[5][3]
          document.getElementById("Vdur2").innerHTML = 'Duration at 2x: ' + duration[6][0] + duration[6][1] + duration[6][2]+ duration[6][3]
        }
  
        function LiveVideoOP(){
          document.getElementById("vop").setAttribute("style", "display : none;");
          document.getElementById("op").setAttribute("style", "display : none;");
          document.getElementById("lop").setAttribute("style", "display : block;");
        }
        
        function PlaylistOP(Pduration, Pdetails) {
          document.getElementById("vop").setAttribute("style", "display : none;");
          document.getElementById("op").setAttribute("style", "display : block;");
          document.getElementById("lop").setAttribute("style", "display : none;");
          document.getElementById("Ptitle").innerHTML = 'Title: ' + Pdetails[0].substr(0, 70) + '...'
          document.getElementById("Pchan").innerHTML = 'Channel: ' + Pdetails[1]
          document.getElementById("Ptdur").innerHTML = 'Total Duration: ' + Pduration[0][0] + Pduration[0][1] + Pduration[0][2]+ Pduration[0][3]
          document.getElementById("Padur").innerHTML = 'Average Duration: ' + Pduration[7][0] + Pduration[7][1] + Pduration[7][2]+ Pduration[7][3]
          document.getElementById("Ptvid").innerHTML = 'Total number of videos: ' + Pdetails[2]
          document.getElementById("Pdur0.5").innerHTML = 'Duration at 0.5x: ' + Pduration[1][0] + Pduration[1][1] + Pduration[1][2] + Pduration[1][3]
          document.getElementById("Pdur0.75").innerHTML = 'Duration at 0.75x: ' + Pduration[2][0] + Pduration[2][1] + Pduration[2][2] + Pduration[2][3]
          document.getElementById("Pdur1.25").innerHTML = 'Duration at 1.25x: ' + Pduration[3][0] + Pduration[3][1] + Pduration[3][2] + Pduration[3][3]
          document.getElementById("Pdur1.5").innerHTML = 'Duration at 1.5x: ' + Pduration[4][0] + Pduration[4][1] + Pduration[4][2] + Pduration[4][3]
          document.getElementById("Pdur1.75").innerHTML = 'Duration at 1.75x: ' + Pduration[5][0] + Pduration[5][1] + Pduration[5][2] + Pduration[5][3]
          document.getElementById("Pdur2").innerHTML = 'Duration at 2x: ' + Pduration[6][0] + Pduration[6][1] + Pduration[6][2]+ Pduration[6][3]
        }
        
        function DOP(Vdetails){
          var total_seconds = Vdetails[2]*86400 + Vdetails[3]*3600 + Vdetails[4]*60 + Vdetails[5]
  
          var Dsec = 86400; var Hsec = 3600; var Msec = 60
  
          var duration = []; var comp = [1, 0.5, 0.75, 1.25, 1.5, 1.75, 2]
   
          var ditem = ['Day', 'Hour', 'Minute', 'Second']
  
          for (i = 0; i < comp.length; i++) {
            var dur = total_seconds/comp[i]
            var D = parseInt(dur/Dsec)
            dur = dur - (D*Dsec)
            var H = parseInt(dur/Hsec)
            dur = dur - (H*Hsec)
            var M = parseInt(dur/Msec)
            dur = dur - (M*Msec)
            var S = parseInt(dur)
            var rawdur = []; var time = [];
            rawdur.push(D,H,M,S)
            for (j = 0; j < rawdur.length; j++) {
              if (rawdur[j] == 0){ // No Value
                var item = ''
              } else if (rawdur[j] == 1) { // 1 Value
                  var item = '1 ' + ditem[j] + ' '
              } else if (rawdur[j] > 1){ // more than 1 Value
                  var item = rawdur[j] + ' ' + ditem[j] + 's '
              } 
            time.push(item)
            }
          duration.push(time)
          }
          return NoneOP(), VideoOP(duration,Vdetails)
        }
  
        function POP(Pdetdurs,Pdetails){
          var total_seconds = Pdetdurs[0]*86400 + Pdetdurs[1]*3600 + Pdetdurs[2]*60 + Pdetdurs[3]
  
          var Dsec = 86400; var Hsec = 3600; var Msec = 60
  
          var Pduration = []; var comp = [1, 0.5, 0.75, 1.25, 1.5, 1.75, 2, Pdetails[2]]
   
          var ditem = ['Day', 'Hour', 'Minute', 'Second']
  
          for (i = 0; i < comp.length; i++) {
            var dur = total_seconds/comp[i]
            var D = parseInt(dur/Dsec)
            dur = dur - (D*Dsec)
            var H = parseInt(dur/Hsec)
            dur = dur - (H*Hsec)
            var M = parseInt(dur/Msec)
            dur = dur - (M*Msec)
            var S = parseInt(dur)
            var rawdur = []; var time = [];
            rawdur.push(D,H,M,S)
            for (j = 0; j < rawdur.length; j++) {
              if (rawdur[j] == 0){ // No Value
                var item = ''
              } else if (rawdur[j] == 1) { // 1 Value
                  var item = '1 ' + ditem[j] + ' '
              } else if (rawdur[j] > 1){ // more than 1 Value
                  var item = rawdur[j] + ' ' + ditem[j] + 's '
              } 
            time.push(item)
            }
          Pduration.push(time)
          }
          return NoneOP(), PlaylistOP(Pduration, Pdetails)
        }
  
        function VideoID() {
          if ((input.includes('youtu') == true) && (input.includes('list') != true) && (input.length >= 20)) {
              var Sol = input.replace(/3D/,'');
              var Aol = Sol.replace(/http|https/,'');
              var Bol = Aol.replace(/com/,'');
              var Col = Bol.replace(/watch/,'');
              var Dol = Col.replace(/www/,'');
              var Eol = Dol.replace(/youtube|youtu.be/,'');
              var Val = Eol.split(/[/=#&?.:%]+/);
              var Output = []
              for (i = 0;i < Val.length;i++){
                  if (Val[i].length == 11){
                      Output.push(Val[i])
                  }
              }
              if (Output.length != 0) {
                  if (Output[Output.length-1].length == 11) {
                      return Output[Output.length-1] //Send this VideoID to API Function
                  }
                  else if (Output[Output.length-1].length != 11) {
                    return Error()
                  }
              } 
              else if (Output.length == 0) {
                return Error()
              }
          } else {
              return Error()
          }
        }
  
        function VideoAPI(input) {
          if (input.length == 11){
            return VideoRequest(input)
          } 
          else {
            var Vid = VideoID(input)
            if (Vid != Error()) {
            return VideoRequest(Vid)
            } 
            else if (Vid == Error()){
              return Error()
            }
          }
        }
  
      function VideoRequest(Vid) {
        try {  
          var key = 'AIzaSyAKK4JLBElsC6bN1w7-TtPnlGbHZyshv5c'
          var url = 'https://www.googleapis.com/youtube/v3/videos?id=' + Vid + '&part=snippet,contentDetails&fields=items(snippet(title,channelTitle),contentDetails(duration))&key=' + key
          let xmlHttpReq = new XMLHttpRequest();
          xmlHttpReq.open("GET", url, false);
          xmlHttpReq.send(null);
          const jon = xmlHttpReq.responseText
          var json = JSON.parse(jon)
          var Vtitle = json['items'][0]['snippet']['title']
          var Vchan = json['items'][0]['snippet']['channelTitle']
          var Vrawdur = json['items'][0]['contentDetails']['duration']
          if (Vrawdur == 'P0D') {
            return NoneOP(), LiveVideoOP()
          }
          var Day = ['0']; var Hour = ['0']; var Min = ['0']; var Sec = ['0']
          
          if (Vrawdur.includes('D')){
            Day = Vrawdur.match(/(?<=P)(.*)(?=[D])/)
          }
          
          if (Vrawdur.includes('H')){
            if (Vrawdur.includes('D')){
              Hour = Vrawdur.match(/(?<=T)(.*)(?=[H])/)
            } else {
              Hour = Vrawdur.match(/(?<=T)(.*)(?=[H])/)
            }
          }
          
          if (Vrawdur.includes('M')){
            if (Vrawdur.includes('H')){
              Min = Vrawdur.match(/(?<=H)(.*)(?=[M])/)
            } else {
              Min = Vrawdur.match(/(?<=T)(.*)(?=[M])/)
            }
          }
          
          if (Vrawdur.includes('S')) {
            if (Vrawdur.includes('M')){
              Sec = Vrawdur.match(/(?<=M)(.*)(?=[S])/)
            } else if (Vrawdur.includes('H')){
              Sec = Vrawdur.match(/(?<=H)(.*)(?=[S])/)
            } else {
              Sec = Vrawdur.match(/(?<=T)(.*)(?=[S])/)
            }
          }
          var Vdetails = []
          Vdetails.push(Vtitle, Vchan, Number(Day[0]), Number(Hour[0]), Number(Min[0]), Number(Sec[0]))
          return DOP(Vdetails)
          } catch (error) {
            console.log(error)
            return Error()
          }
      }
  
        function PlaylistAPI(){
          if (input.length == 13 || input.length == 34){
            return PlaylistRequest(input)
          } 
          else {
            var Pid = PlaylistID(input)
            if (Pid != Error()) {
              return PlaylistRequest(Pid)
            } 
            else if (Pid == Error()){
              return Error()
            }
          }
        }
  
        function PlaylistID(input) {
          var andmatch = input.match(/(?<=list=)(.*)(?=[&])/)
          if (andmatch != null) {
              return andmatch[0]
          } else if (andmatch == null) {
              var slashmatch = input.match(/(?<=list=)(.*)(?=[/])/)
              if (slashmatch != null) {
                  return slashmatch[0]
              } else if (slashmatch == null) {
                  var nomatch = input.match(/(?<=list=).*/)
                  if (nomatch != null) {
                      return nomatch[0]
                  } else if (nomatch == null) {  
                    return Error()
                  }
              }
          }
        }
  
        function PlaylistRequest(Pid){
          try {
            var key = 'AIzaSyAKK4JLBElsC6bN1w7-TtPnlGbHZyshv5c'
            var Pdetails = []
            //Playlist title, channel, total videos
            var turl = 'https://www.googleapis.com/youtube/v3/playlists?id=' + Pid + '&part=snippet,contentDetails&fields=items(snippet(title,channelTitle),contentDetails(itemCount))&key=' + key
            let txmlHttpReq = new XMLHttpRequest();
            txmlHttpReq.open("GET", turl, false);
            txmlHttpReq.send(null);
            const tjon = txmlHttpReq.responseText
            var tjson = JSON.parse(tjon)
            var Ptitle = tjson['items'][0]['snippet']['title']
            var Pchan = tjson['items'][0]['snippet']['channelTitle']
            var Ptvid = tjson['items'][0]['contentDetails']['itemCount']
            Pdetails.push(Ptitle,Pchan,Ptvid)
            //Playlist videoids
            var purl = 'https://youtube.googleapis.com/youtube/v3/playlistItems?playlistId=' + Pid + '&part=contentDetails&fields=nextPageToken,items(contentDetails(videoId))&maxResults=50&key=' + key
            let pxmlHttpReq = new XMLHttpRequest();
            pxmlHttpReq.open("GET", purl, false);
            pxmlHttpReq.send(null);
            const pjon = pxmlHttpReq.responseText
            var pjson = JSON.parse(pjon)
            var nptoken = pjson['nextPageToken']
            var Itvid = pjson['items'].length
            var pvid = []
            document.getElementById("lop").setAttribute("style", "display : block;");
            for (i = 0; i < Itvid; i++){
                pvid.push(pjson['items'][i]['contentDetails']['videoId'])
            }
            if (nptoken != undefined){
                NP(nptoken,Pid)
                function NP(nptoken,Pid){
                    pagetoken = '&pageToken=' + nptoken
                    var npurl = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&fields=nextPageToken,items(contentDetails(videoId))&maxResults=50' + pagetoken + '&playlistId=' + Pid + '&key=' + key
                    let npxmlHttpReq = new XMLHttpRequest();
                    npxmlHttpReq.open("GET", npurl, false);
                    npxmlHttpReq.send(null);
                    const npjon = npxmlHttpReq.responseText
                    var npjson = JSON.parse(npjon)
                    var Itvid = npjson['items'].length
                    for (i = 0; i < Itvid; i++){
                        pvid.push(npjson['items'][i]['contentDetails']['videoId'])
                    }
                    var nptoken = npjson['nextPageToken']
                    if (nptoken != undefined){
                        NP(nptoken,Pid)
                    }
                    else {
                        return PVideoId(Pdetails, pvid)
                    }
                }
            } else {
                return PVideoId(Pdetails,pvid)
            }
          } catch(error){
            console.log(error)
            return Error()
          } 
  
        }
  
        function PVideoId(Pdetails,pvid) {
          try {
            var Pvdurs = [0,0,0,0]
            var key = 'AIzaSyAKK4JLBElsC6bN1w7-TtPnlGbHZyshv5c'
            for (var f = 0; f < pvid.length; f++) {  
            var url = 'https://www.googleapis.com/youtube/v3/videos?id=' + pvid[f] + '&part=snippet,contentDetails&fields=items(snippet(title,channelTitle),contentDetails(duration))&key=' + key
            let xmlHttpReq = new XMLHttpRequest();
            xmlHttpReq.open("GET", url, false);
            xmlHttpReq.send(null);
            const jon = xmlHttpReq.responseText
            var json = JSON.parse(jon)
            try {
            var Prawdur = json['items'][0]['contentDetails']['duration']
            } catch (error){
              continue;
            }
            var Day = ['0']; var Hour = ['0']; var Min = ['0']; var Sec = ['0']
  
            if (Prawdur.includes('D')){
              Day = Prawdur.match(/(?<=P)(.*)(?=[D])/)
            }
            
            if (Prawdur.includes('H')){
              if (Prawdur.includes('D')){
                Hour = Prawdur.match(/(?<=T)(.*)(?=[H])/)
              } else {
                Hour = Prawdur.match(/(?<=T)(.*)(?=[H])/)
              }
            }
            
            if (Prawdur.includes('M')){
              if (Prawdur.includes('H')){
                Min = Prawdur.match(/(?<=H)(.*)(?=[M])/)
              } else {
                Min = Prawdur.match(/(?<=T)(.*)(?=[M])/)
              }
            }
            
            if (Prawdur.includes('S')) {
              if (Prawdur.includes('M')){
                Sec = Prawdur.match(/(?<=M)(.*)(?=[S])/)
              } else if (Prawdur.includes('H')){
                Sec = Prawdur.match(/(?<=H)(.*)(?=[S])/)
              } else {
                Sec = Prawdur.match(/(?<=T)(.*)(?=[S])/)
              }
            }
  
            Pvdurs[0] = Pvdurs[0] + Number(Day[0])
            Pvdurs[1] = Pvdurs[1] + Number(Hour[0])
            Pvdurs[2] = Pvdurs[2] + Number(Min[0])
            Pvdurs[3] = Pvdurs[3] + Number(Sec[0])
          } 
            var Pdetdurs = []
            Pdetdurs.push(Pvdurs[0], Pvdurs[1], Pvdurs[2], Pvdurs[3])
            return POP(Pdetdurs,Pdetails)
        } catch(error) {
          console.log(error)
          return Error()
        }
      }
}
