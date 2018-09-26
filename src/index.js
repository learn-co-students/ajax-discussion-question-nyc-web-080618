
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementsByClassName('btn btn-primary')[0]
  const fullname = document.getElementById("fullname");
  console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?
  console.log("CONTENT LOADED!");

  function newUser(){
    fetch('https://randomuser.me/api/')
    .then( response => response.json())
    .then( data => {
      // debugger
      fullname.innerText = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
    })

  }



  // button event listener
  button.addEventListener('click', newUser)
});
