const banner = document.getElementById('banner');
let today = new Date();
let day = today.getDay();

const showbanner = () => {
  banner.style.display = "block";
};

if (day == 1 || day == 2) {showbanner();
};