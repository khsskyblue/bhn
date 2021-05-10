$(function () {
	// create theme changer dom
	themechanger();
	saklar2();
	 
	//theme changer spinner
	$(".fa-moon, .fa-sun").hover(function(){$(this).addClass("fa-spin");}, function(){$(this).removeClass("fa-spin");});	
	$(".changer").hover(function(){$(".changer .fas").addClass("fa-spin");}, function(){$(".changer .fas").removeClass("fa-spin");});	
});

// Easing Effects and tilting Effects here, simply delete the lines below to disable any effect on the screen
gsap.from(".bg", {duration: .5, y: -20, opacity: .5, scale: 1.2, ease: "power1.inOut"}); // background movement
gsap.from(".navbar", {duration: 1, y: -50, opacity: 0, scale: .5,ease: "circ.inOut",backdropFilter: "blur(0px)"});
gsap.from(".footer", {duration: 1, y: 50, opacity: 0, scale: .5,ease: "circ.inOut",backdropFilter: "blur(0px)"});
gsap.from(".navbar-brand", {duration: 1, x: 300, opacity: 0, scale: 0.5, delay: .2, ease: "power4.inOut"});
gsap.from(".post", {duration: 1, x: -100, opacity: 0, backdropFilter:"blur(0px)",ease: "power2.inOut"});
gsap.from(".produk, .thumb", {duration: 1, x: -100, opacity: 0, backdropFilter:"blur(0px)",ease: "power2.inOut"});
gsap.from("#sidebar", {duration: 1, x: 100, opacity: 0, backdropFilter:"blur(5px)",ease: "power2.inOut"});
gsap.from(".kartu", 1, {
	scale: 0,
	opacity: 0, 
    y: -100,
    yoyo: false, 
    repeat: 0, 
    ease: "circ.inOut",
    stagger: {
      amount: .2, 
      grid: "auto",
      from: "center"
    }
  });
VanillaTilt.init(document.querySelectorAll(".kartu"), { // this effect can severely affect web page rendering performance on mobile phones
        		max: 25,
        		speed: 400,
        		//reset: false,
        		glare: true, // glare effect
        		"max-glare": 1,
        		scale:1.0, // zoom effect
        		axis: "null", // disable axis movement x, y, null
        		gyroscope: false // will follow mobile phone movement, it will slow down some cheap phones
			});
// End of Effects

function themechanger(){
	var saklar='<div class="themechanger" style="display:none;text-decoration:none;"><a href="javascript:setTheme(\'dark\');" ><i class="fas fa-moon"></i></a><br/><span class="separator">-</span><br/><a href="javascript:setTheme(\'light\');" ><i class="fas fa-sun"></i></a></div>';
	$("body").prepend(saklar);
	$(".themechanger").show("slow");
}

function saklar2(){
	var theme = getCookie("theme");
	var saklardom="";
  if (theme !== "") {
		if(theme=="light"){
			saklardom='<a href="javascript:setTheme(\'dark\');" class="nav-link changer"><i class="fas fa-moon"></i>Dark</a>';
			$(".saklar2").html(saklardom);
		}
		if(theme=="dark"){
			 saklardom='<a href="javascript:setTheme(\'light\');" class="nav-link changer"><i class="fas fa-sun"></i>Light</a>';
			$(".saklar2").html(saklardom);
		}
  } else {
		saklardom='<a href="javascript:setTheme(\'dark\');" class="nav-link changer"><i class="fas fa-moon"></i>Dark</a>';
		$(".saklar2").html(saklardom);
  }  	
	//$(".saklar").show("slow");
}
