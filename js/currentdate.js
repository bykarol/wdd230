function date() {
  /*Actualizando el año actual en el footer*/
  document.getElementById("current-year").innerHTML = new Date().getFullYear();

  /*Fecha de última visita*/
  const now = new Date(document.lastModified);
  const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
  document.getElementById("date").innerHTML = fulldate; //TODO utilizar el query selector
}
/*Llamada a la función date()*/
date();

/* // toLocaleDateString
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById("currentdate").textContent = new Date().toLocaleDateString('en-US', options); */