/*--------------Lazy Loading-----------------*/
let imagesToLoad = document.querySelectorAll("img[data-src]");

const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px -500px 0px'
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src"); // remove the data-src attribute after its used.
    };

};

// load the intersection Observer method
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
                
            }
        });
    }, imageOptions);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
    
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
    
};
/*--------------BOTÓN ARRIBA-----------------*/
function arrowup() {
$(document).ready(function(){

	$('.icon-up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
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
  document.getElementById("date").innerHTML = fulldate; //TODO utilizar el query selector

  // toLocaleDateString
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById("headerDate").textContent = new Date().toLocaleDateString('en-UK', options); 
}
/*Llamada a la función date()*/
date();

/* ----------------- Banner -----------------------*/
const banner = document.getElementById('banner');
let today = new Date();
let day = today.getDay();

const showbanner = () => {
  banner.style.display = "block";
};

if (day == 1 || day == 2) {showbanner();
};

/* ----------------------TOGGLE MENU ---------------------*/
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;