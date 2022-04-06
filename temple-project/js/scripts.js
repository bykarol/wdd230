/*--------------BOTÓN ARRIBA-----------------*/
function arrowup() {
	$(document).ready(function () {

		$('.icon-up').click(function () {
			$('body, html').animate({
				scrollTop: '0px'
			}, 300);
		});

		$(window).scroll(function () {
			if ($(this).scrollTop() > 0) {
				$('.icon-up').slideDown(300);
			} else {
				$('.icon-up').slideUp(300);
			}
		});

	});
}
arrowup();

/* --------------CURRENT DATA --------------------*/
function date() {
	/*Actualizando el año actual en el footer*/
	document.getElementById("current-year").innerHTML = new Date().getFullYear();

	/*Fecha de última visita*/
	const now = new Date(document.lastModified);
	const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
	document.getElementById("date").innerHTML = fulldate;
}
/*Llamada a la función date()*/
date();

/* ----------------------TOGGLE MENU ---------------------*/
function toggleMenu() {
	document.getElementById("primaryNav").classList.toggle("open");
	document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

