let hrs = document.getElementById("hurs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();

  
  let hours = currentTime.getHours();
  let formattedHours = hours % 12 || 12;  

  hrs.innerHTML = (formattedHours < 10 ? "0" : "") + formattedHours;
  min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);

