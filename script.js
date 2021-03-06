// Generated by CoffeeScript 1.12.6
var checkedinput, downloadringtone, init, names, sounds;

names = ["ANJU", "APZU", "NIQI", "KAVESZ"];

sounds = ["anyu", "apu", "niki", "karesz"];

checkedinput = function(inp) {
  return names.reduce((function(a, v) {
    if (v === inp) {
      return true;
    } else {
      return a;
    }
  }), false);
};

downloadringtone = function(n) {
  var x;
  x = new XMLHttpRequest();
  x.open("GET", "media/" + n + ".mp3", true);
  x.responseType = 'blob';
  x.onload = function(e) {
    return download(x.response, n + ".mp3", "audio/mp3");
  };
  return x.send();
};

init = function() {
  $("#password").focus();
  return $("#password").keypress(function(e) {
    var inp;
    if (e.charCode === 13) {
      inp = $("#password").val().toUpperCase();
      if (checkedinput(inp)) {
        $("#password").animate({
          "background-color": "#5b8"
        }, 200);
        $("#password").animate({
          "background-color": "#282828"
        }, 700, function() {});
        $("#login").animate({
          top: -2000
        }, 1000);
        return downloadringtone(sounds[names.indexOf(inp)]);
      } else {
        $("#password").val("");
        $("#password").animate({
          "background-color": "#aa0000"
        }, 200);
        return $("#password").animate({
          "background-color": "#282828"
        }, 700);
      }
    }
  });
};

//# sourceMappingURL=script.js.map
