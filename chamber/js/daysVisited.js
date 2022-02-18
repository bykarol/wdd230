const daysVisited = document.getElementById("container");
const timestamp = today.getTime();

document.addEventListener("DOMContentLoaded", () => {
  populateStorage();
});

const populateStorage = () => {
  try {
    let theDay = localStorage.getItem("daysVisited");
    if (theDay != timestamp) {
      // (1.000 miliseconds x 60 seconds x 60 minutes x 24 hours)
      let days = Math.round((timestamp - theDay) / 86400000);
      daysVisited.textContent = `Amount of time in days between user visits: ${days} days`;
      setStyles();
    }
  } catch (er) {
    setStyles();
  }
};

const setStyles = () => {
  localStorage.setItem("daysVisited", timestamp);
};