const preload = document.querySelector("#preloader");

window.addEventListener('load',function(){
	preload.style.opacity = '0';
	setTimeout(function(){
		preload.style.display = 'none';
	}, 300);
});

$('nav.menu-mobile h2').click(function(){
	$('nav.menu-mobile ul').slideToggle();
});