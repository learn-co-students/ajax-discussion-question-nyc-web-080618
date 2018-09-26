const fullname = document.getElementById("fullname");
const generateBtn = document.getElementById("generate")

document.addEventListener("DOMContentLoaded", () => {
  generateBtn.addEventListener('click', function() {
    event.preventDefault()
    fetch("https://randomuser.me/api/")
    .then( response => response.json())
    .then(
      function(data) {
        console.log(data.results[0])
        const userData = data.results[0]
        const picAddress = document.getElementById("profile_picture")
        const street = document.getElementById("street")
        const city = document.getElementById("city")
        const state = document.getElementById("state")
        const post = document.getElementById("postcode")
        const name = document.getElementById("fullname")
        const email = document.getElementById("email")
        const phone = document.getElementById("phone")
        const cell = document.getElementById("cell")
        const dob = document.getElementById("date_of_birth")

        picAddress.src = userData.picture.large
        street.innerText = userData.location.street
        city.innerText = userData.location.city
        state.innerText = userData.location.state
        post.innerText = userData.location.postcode
        name.innerText = userData.name.title + " " + userData.name.first + " " + userData.name.last
        email.innerText = userData.email
        phone.innerText = userData.phone
        cell.innerText = userData.cell
        dob.innerText = userData.dob.date


      }
    )



})





});
