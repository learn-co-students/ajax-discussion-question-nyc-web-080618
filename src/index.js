const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postcode = document.getElementById("postcode");
const phone = document.getElementById("phone");
const cell = document.getElementById("cell");
const date_of_birth = document.getElementById("date_of_birth");
const url = 'https://randomuser.me/api/'

// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  // console.log("CONTENT LOADED!");
  document.addEventListener('click', (event) => {
    if (event.target.className === 'btn btn-primary') {
      const fullNameVal = fullname.children[0].value
      const prefixName = fullNameVal.split(' ')[0]
      const firstName = fullNameVal.split(' ')[1]
      const lastName = fullNameVal.split(' ')[2]
      const emailVal = email.children[0].value
      const streetVal = street.children[0].value
      const cityVal = city.children[0].value
      const stateVal = state.children[0].value
      const postcodeVal = postcode.children[0].value
      const phoneVal = phone.children[0].value
      const cellVal = cell.children[0].value
      const date_of_birthVal = date_of_birth.children[0].value

      debugger

      fetch('https://randomuser.me/api/')
        .then(response => response.json())
    }





  })
});
