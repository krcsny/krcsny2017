names = ["ANJU", "APZU", "NIQI", "KAVESZ"]
sounds = [ "anyu", "apu", "niki", "karesz"]

checkedinput = (inp) ->
  names.reduce(((a, v) -> if v is inp then true else a), false)


downloadringtone = (n) ->
  x = new XMLHttpRequest()
  x.open("GET", "media/#{n}.mp3", true)
  x.responseType = 'blob'
  x.onload = (e) -> download(x.response, "#{n}.mp3", "audio/mp3" )
  x.send()

init = () ->
  $("#password").focus()
  $("#password").keypress (e) -> 
                            if e.charCode is 13
                              inp = $("#password").val().toUpperCase()
                              if checkedinput(inp)
                                $("#password").animate {"background-color":"#5b8"}, 200
                                $("#password").animate {"background-color":"#282828"}, 700, () ->
                                $("#login").animate {top : - 2000}, 1000 
                                downloadringtone sounds[names.indexOf inp]
                                # load_project(inp)
                              else
                                $("#password").val("")
                                $("#password").animate {"background-color":"#aa0000"}, 200
                                $("#password").animate {"background-color":"#282828"}, 700
