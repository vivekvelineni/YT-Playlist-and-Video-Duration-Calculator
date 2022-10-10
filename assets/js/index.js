function Find () {
  let v = 0
  const Rawinput = document.forms.form.input_link.value
  const input = Rawinput.trim()
  if (/\s/.test(input) !== true) {
    if ((input.length === 11) && (/[/=&?.:%]+/.exec(input) === null)) {
      // console.log('it is a video id');
      return VideoAPI(input)
    } else {
      v = v + 1
    }

    if ((input.includes('youtu') === true) && (input.includes('list') !== true) && (input.length >= 20)) {
      // console.log('it is a video link');
      return VideoAPI(input)
    } else {
      v = v + 1
    }

    if (((input.length === 34) || (input.length === 13)) && (/[/=&?.:%]+/.exec(input) === null)) {
      // console.log('it is a playlist id');
      return PlaylistAPI(input)
    } else {
      v = v + 1
    }

    if ((input.includes('list') === true) && (input.includes('youtu') === true)) {
      // console.log('it is a playlist link');
      return PlaylistAPI(input)
    } else {
      v = v + 1
    }
  } else {
    return Error()
  }

  if (v === 4) {
    return Error()
  }

  function Error () {
    document.getElementById('gif').setAttribute('style', 'display : none;')
    document.getElementById('errorid').setAttribute('style', 'display : block;')
    document.getElementById('op').setAttribute('style', 'display : none;')
    document.getElementById('vop').setAttribute('style', 'display : none;')
    document.getElementById('lop').setAttribute('style', 'display : none;')
  }

  function NoneOP () {
    document.getElementById('gif').setAttribute('style', 'display : none;')
    document.getElementById('errorid').setAttribute('style', 'display : none;')
  }

  function VideoOP (duration, Vdetails) {
    document.getElementById('op').setAttribute('style', 'display : none;')
    document.getElementById('vop').setAttribute('style', 'display : block;')
    document.getElementById('lop').setAttribute('style', 'display : none;')
    document.getElementById('Vtitle').innerHTML = 'Title: ' + Vdetails[0].substr(0, 70) + '...'
    document.getElementById('Vchan').innerHTML = 'Channel: ' + Vdetails[1]
    document.getElementById('Vtdur').innerHTML = 'Total Duration: ' + duration[0][0] + duration[0][1] + duration[0][2] + duration[0][3]
    document.getElementById('Vdur0.5').innerHTML = 'Duration at 0.5x: ' + duration[1][0] + duration[1][1] + duration[1][2] + duration[1][3]
    document.getElementById('Vdur0.75').innerHTML = 'Duration at 0.75x: ' + duration[2][0] + duration[2][1] + duration[2][2] + duration[2][3]
    document.getElementById('Vdur1.25').innerHTML = 'Duration at 1.25x: ' + duration[3][0] + duration[3][1] + duration[3][2] + duration[3][3]
    document.getElementById('Vdur1.5').innerHTML = 'Duration at 1.5x: ' + duration[4][0] + duration[4][1] + duration[4][2] + duration[4][3]
    document.getElementById('Vdur1.75').innerHTML = 'Duration at 1.75x: ' + duration[5][0] + duration[5][1] + duration[5][2] + duration[5][3]
    document.getElementById('Vdur2').innerHTML = 'Duration at 2x: ' + duration[6][0] + duration[6][1] + duration[6][2] + duration[6][3]
  }

  function LiveVideoOP () {
    document.getElementById('vop').setAttribute('style', 'display : none;')
    document.getElementById('op').setAttribute('style', 'display : none;')
    document.getElementById('lop').setAttribute('style', 'display : block;')
  }

  function PlaylistOP (Pduration, Pdetails) {
    document.getElementById('vop').setAttribute('style', 'display : none;')
    document.getElementById('op').setAttribute('style', 'display : block;')
    document.getElementById('lop').setAttribute('style', 'display : none;')
    document.getElementById('Ptitle').innerHTML = 'Title: ' + Pdetails[0].substr(0, 70) + '...'
    document.getElementById('Pchan').innerHTML = 'Channel: ' + Pdetails[1]
    document.getElementById('Ptdur').innerHTML = 'Total Duration: ' + Pduration[0][0] + Pduration[0][1] + Pduration[0][2] + Pduration[0][3]
    document.getElementById('Padur').innerHTML = 'Average Duration: ' + Pduration[7][0] + Pduration[7][1] + Pduration[7][2] + Pduration[7][3]
    document.getElementById('Ptvid').innerHTML = 'Total number of videos: ' + Pdetails[2]
    document.getElementById('Pdur0.5').innerHTML = 'Duration at 0.5x: ' + Pduration[1][0] + Pduration[1][1] + Pduration[1][2] + Pduration[1][3]
    document.getElementById('Pdur0.75').innerHTML = 'Duration at 0.75x: ' + Pduration[2][0] + Pduration[2][1] + Pduration[2][2] + Pduration[2][3]
    document.getElementById('Pdur1.25').innerHTML = 'Duration at 1.25x: ' + Pduration[3][0] + Pduration[3][1] + Pduration[3][2] + Pduration[3][3]
    document.getElementById('Pdur1.5').innerHTML = 'Duration at 1.5x: ' + Pduration[4][0] + Pduration[4][1] + Pduration[4][2] + Pduration[4][3]
    document.getElementById('Pdur1.75').innerHTML = 'Duration at 1.75x: ' + Pduration[5][0] + Pduration[5][1] + Pduration[5][2] + Pduration[5][3]
    document.getElementById('Pdur2').innerHTML = 'Duration at 2x: ' + Pduration[6][0] + Pduration[6][1] + Pduration[6][2] + Pduration[6][3]
  }

  function DOP (Vdetails) {
    const totalSeconds = Vdetails[2] * 86400 + Vdetails[3] * 3600 + Vdetails[4] * 60 + Vdetails[5]

    const Dsec = 86400; const Hsec = 3600; const Msec = 60

    const duration = []; const comp = [1, 0.5, 0.75, 1.25, 1.5, 1.75, 2]

    const ditem = ['Day', 'Hour', 'Minute', 'Second']

    for (let i = 0; i < comp.length; i++) {
      let dur = totalSeconds / comp[i]
      const D = parseInt(dur / Dsec)
      dur = dur - (D * Dsec)
      const H = parseInt(dur / Hsec)
      dur = dur - (H * Hsec)
      const M = parseInt(dur / Msec)
      dur = dur - (M * Msec)
      const S = parseInt(dur)
      const rawdur = []; const time = []
      rawdur.push(D, H, M, S)
      for (let j = 0; j < rawdur.length; j++) {
        if (rawdur[j] === 0) { // No Value
          var item = ''
        } else if (rawdur[j] === 1) { // 1 Value
          var item = '1 ' + ditem[j] + ' '
        } else if (rawdur[j] > 1) { // more than 1 Value
          var item = rawdur[j] + ' ' + ditem[j] + 's '
        }
        time.push(item)
      }
      duration.push(time)
    }
    return NoneOP(), VideoOP(duration, Vdetails)
  }

  function POP (Pdetdurs, Pdetails) {
    const totalSeconds = Pdetdurs[0] * 86400 + Pdetdurs[1] * 3600 + Pdetdurs[2] * 60 + Pdetdurs[3]

    const Dsec = 86400; const Hsec = 3600; const Msec = 60

    const Pduration = []; const comp = [1, 0.5, 0.75, 1.25, 1.5, 1.75, 2, Pdetails[2]]

    const ditem = ['Day', 'Hour', 'Minute', 'Second']

    for (let i = 0; i < comp.length; i++) {
      let dur = totalSeconds / comp[i]
      const D = parseInt(dur / Dsec)
      dur = dur - (D * Dsec)
      const H = parseInt(dur / Hsec)
      dur = dur - (H * Hsec)
      const M = parseInt(dur / Msec)
      dur = dur - (M * Msec)
      const S = parseInt(dur)
      const rawdur = []; const time = []
      rawdur.push(D, H, M, S)
      for (let j = 0; j < rawdur.length; j++) {
        if (rawdur[j] === 0) { // No Value
          var item = ''
        } else if (rawdur[j] === 1) { // 1 Value
          var item = '1 ' + ditem[j] + ' '
        } else if (rawdur[j] > 1) { // more than 1 Value
          var item = rawdur[j] + ' ' + ditem[j] + 's '
        }
        time.push(item)
      }
      Pduration.push(time)
    }
    return NoneOP(), PlaylistOP(Pduration, Pdetails)
  }

  function VideoID () {
    if ((input.includes('youtu') === true) && (input.includes('list') !== true) && (input.length >= 20)) {
      const Sol = input.replace(/3D/, '')
      const Aol = Sol.replace(/http|https/, '')
      const Bol = Aol.replace(/com/, '')
      const Col = Bol.replace(/watch/, '')
      const Dol = Col.replace(/www/, '')
      const Eol = Dol.replace(/youtube|youtu.be/, '')
      const Val = Eol.split(/[/=#&?.:%]+/)
      const Output = []
      for (let i = 0; i < Val.length; i++) {
        if (Val[i].length === 11) {
          Output.push(Val[i])
        }
      }
      if (Output.length !== 0) {
        if (Output[Output.length - 1].length === 11) {
          return Output[Output.length - 1] // Send this VideoID to API Function
        } else if (Output[Output.length - 1].length !== 11) {
          return Error()
        }
      } else if (Output.length === 0) {
        return Error()
      }
    } else {
      return Error()
    }
  }

  function VideoAPI (input) {
    if (input.length === 11) {
      return VideoRequest(input)
    } else {
      const Vid = VideoID(input)
      if (Vid !== Error()) {
        return VideoRequest(Vid)
      } else if (Vid === Error()) {
        return Error()
      }
    }
  }

  function VideoRequest (Vid) {
    try {
      const key = 'AIzaSyAKK4JLBElsC6bN1w7-TtPnlGbHZyshv5c'
      const url = 'https://www.googleapis.com/youtube/v3/videos?id=' + Vid + '&part=snippet,contentDetails&fields=items(snippet(title,channelTitle),contentDetails(duration))&key=' + key
      const xmlHttpReq = new XMLHttpRequest()
      xmlHttpReq.open('GET', url, false)
      xmlHttpReq.send(null)
      const jon = xmlHttpReq.responseText
      const json = JSON.parse(jon)
      const Vtitle = json.items[0].snippet.title
      const Vchan = json.items[0].snippet.channelTitle
      const Vrawdur = json.items[0].contentDetails.duration
      if (Vrawdur === 'P0D') {
        return NoneOP(), LiveVideoOP()
      }
      let Day = ['0']; let Hour = ['0']; let Min = ['0']; let Sec = ['0']

      if (Vrawdur.includes('D')) {
        Day = Vrawdur.match(/(?<=P)(.*)(?=[D])/)
      }

      if (Vrawdur.includes('H')) {
        if (Vrawdur.includes('D')) {
          Hour = Vrawdur.match(/(?<=T)(.*)(?=[H])/)
        } else {
          Hour = Vrawdur.match(/(?<=T)(.*)(?=[H])/)
        }
      }

      if (Vrawdur.includes('M')) {
        if (Vrawdur.includes('H')) {
          Min = Vrawdur.match(/(?<=H)(.*)(?=[M])/)
        } else {
          Min = Vrawdur.match(/(?<=T)(.*)(?=[M])/)
        }
      }

      if (Vrawdur.includes('S')) {
        if (Vrawdur.includes('M')) {
          Sec = Vrawdur.match(/(?<=M)(.*)(?=[S])/)
        } else if (Vrawdur.includes('H')) {
          Sec = Vrawdur.match(/(?<=H)(.*)(?=[S])/)
        } else {
          Sec = Vrawdur.match(/(?<=T)(.*)(?=[S])/)
        }
      }
      const Vdetails = []
      Vdetails.push(Vtitle, Vchan, Number(Day[0]), Number(Hour[0]), Number(Min[0]), Number(Sec[0]))
      return DOP(Vdetails)
    } catch (error) {
      console.log(error)
      return Error()
    }
  }

  function PlaylistAPI () {
    if (input.length === 13 || input.length === 34) {
      return PlaylistRequest(input)
    } else {
      const Pid = PlaylistID(input)
      if (Pid !== Error()) {
        return PlaylistRequest(Pid)
      } else if (Pid === Error()) {
        return Error()
      }
    }
  }

  function PlaylistID (input) {
    const andmatch = input.match(/(?<=list=)(.*)(?=[&])/)
    if (andmatch !== null) {
      return andmatch[0]
    } else if (andmatch === null) {
      const slashmatch = input.match(/(?<=list=)(.*)(?=[/])/)
      if (slashmatch !== null) {
        return slashmatch[0]
      } else if (slashmatch === null) {
        const nomatch = input.match(/(?<=list=).*/)
        if (nomatch !== null) {
          return nomatch[0]
        } else if (nomatch === null) {
          return Error()
        }
      }
    }
  }

  function PlaylistRequest (Pid) {
    try {
      const key = 'AIzaSyAKK4JLBElsC6bN1w7-TtPnlGbHZyshv5c'
      const Pdetails = []
      // Playlist title, channel, total videos
      const turl = 'https://www.googleapis.com/youtube/v3/playlists?id=' + Pid + '&part=snippet,contentDetails&fields=items(snippet(title,channelTitle),contentDetails(itemCount))&key=' + key
      const txmlHttpReq = new XMLHttpRequest()
      txmlHttpReq.open('GET', turl, false)
      txmlHttpReq.send(null)
      const tjon = txmlHttpReq.responseText
      const tjson = JSON.parse(tjon)
      const Ptitle = tjson.items[0].snippet.title
      const Pchan = tjson.items[0].snippet.channelTitle
      const Ptvid = tjson.items[0].contentDetails.itemCount
      Pdetails.push(Ptitle, Pchan, Ptvid)
      // Playlist videoids
      const purl = 'https://youtube.googleapis.com/youtube/v3/playlistItems?playlistId=' + Pid + '&part=contentDetails&fields=nextPageToken,items(contentDetails(videoId))&maxResults=50&key=' + key
      const pxmlHttpReq = new XMLHttpRequest()
      pxmlHttpReq.open('GET', purl, false)
      pxmlHttpReq.send(null)
      const pjon = pxmlHttpReq.responseText
      const pjson = JSON.parse(pjon)
      const nptoken = pjson.nextPageToken
      const Itvid = pjson.items.length
      const pvid = []
      document.getElementById('lop').setAttribute('style', 'display : block;')
      for (let i = 0; i < Itvid; i++) {
        pvid.push(pjson.items[i].contentDetails.videoId)
      }
      if (nptoken !== undefined) {
        NP(nptoken, Pid)
        function NP (nptoken, Pid) {
          const pagetoken = '&pageToken=' + nptoken
          const npurl = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&fields=nextPageToken,items(contentDetails(videoId))&maxResults=50' + pagetoken + '&playlistId=' + Pid + '&key=' + key
          const npxmlHttpReq = new XMLHttpRequest()
          npxmlHttpReq.open('GET', npurl, false)
          npxmlHttpReq.send(null)
          const npjon = npxmlHttpReq.responseText
          const npjson = JSON.parse(npjon)
          const Itvid = npjson.items.length
          for (let i = 0; i < Itvid; i++) {
            pvid.push(npjson.items[i].contentDetails.videoId)
          }
          nptoken = npjson.nextPageToken
          if (nptoken !== undefined) {
            NP(nptoken, Pid)
          } else {
            return PVideoId(Pdetails, pvid)
          }
        }
      } else {
        return PVideoId(Pdetails, pvid)
      }
    } catch (error) {
      console.log(error)
      return Error()
    }
  }

  function PVideoId (Pdetails, pvid) {
    try {
      const Pvdurs = [0, 0, 0, 0]
      const key = 'AIzaSyAKK4JLBElsC6bN1w7-TtPnlGbHZyshv5c'
      for (let f = 0; f < pvid.length; f++) {
        const url = 'https://www.googleapis.com/youtube/v3/videos?id=' + pvid[f] + '&part=snippet,contentDetails&fields=items(snippet(title,channelTitle),contentDetails(duration))&key=' + key
        const xmlHttpReq = new XMLHttpRequest()
        xmlHttpReq.open('GET', url, false)
        xmlHttpReq.send(null)
        const jon = xmlHttpReq.responseText
        const json = JSON.parse(jon)
        try {
          var Prawdur = json.items[0].contentDetails.duration
        } catch (error) {
          continue
        }
        let Day = ['0']; let Hour = ['0']; let Min = ['0']; let Sec = ['0']

        if (Prawdur.includes('D')) {
          Day = Prawdur.match(/(?<=P)(.*)(?=[D])/)
        }

        if (Prawdur.includes('H')) {
          if (Prawdur.includes('D')) {
            Hour = Prawdur.match(/(?<=T)(.*)(?=[H])/)
          } else {
            Hour = Prawdur.match(/(?<=T)(.*)(?=[H])/)
          }
        }

        if (Prawdur.includes('M')) {
          if (Prawdur.includes('H')) {
            Min = Prawdur.match(/(?<=H)(.*)(?=[M])/)
          } else {
            Min = Prawdur.match(/(?<=T)(.*)(?=[M])/)
          }
        }

        if (Prawdur.includes('S')) {
          if (Prawdur.includes('M')) {
            Sec = Prawdur.match(/(?<=M)(.*)(?=[S])/)
          } else if (Prawdur.includes('H')) {
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
      const Pdetdurs = []
      Pdetdurs.push(Pvdurs[0], Pvdurs[1], Pvdurs[2], Pvdurs[3])
      return POP(Pdetdurs, Pdetails)
    } catch (error) {
      console.log(error)
      return Error()
    }
  }
}
