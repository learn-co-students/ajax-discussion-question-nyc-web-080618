const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => console.log(data))
    






});
