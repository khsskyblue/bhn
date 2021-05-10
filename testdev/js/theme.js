function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function setTheme(style){
	if(style=="light"){
		document.getElementById('style').href='./css/lightglass.css';
		saklardom='<a href="javascript:setTheme(\'dark\');" class="nav-link changer"><i class="fas fa-moon"></i>Dark</a>';
		$(".saklar2").html(saklardom);
	}
	if(style=="dark"){
		document.getElementById('style').href='./css/darkglass.css';
		 saklardom='<a href="javascript:setTheme(\'light\');" class="nav-link changer"><i class="fas fa-sun"></i>Light</a>';
		$(".saklar2").html(saklardom);
	}
	setCookie("theme", style, 365);
}

function checkTheme() {
  var theme = getCookie("theme");
  if (theme !== "") {
		setTheme(theme);		
  }else {setTheme("light");}
}

$(function () {
// set theme
checkTheme();
});
