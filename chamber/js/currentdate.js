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
