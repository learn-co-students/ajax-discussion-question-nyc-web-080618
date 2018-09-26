document.addEventListener("DOMContentLoaded", () => {

  console.log("CONTENT LOADED!");

  const button = document.querySelector('button')
  const fullname = document.getElementById("fullname");
  const email = document.getElementById('email')
  const street = document.getElementById("street")
  const city = document.getElementById("city")
  const state = document.getElementById("state")
  const postcode = document.getElementById("postcode")
  const phone = document.getElementById("phone")
  const cell = document.getElementById("cell")
  const date_of_birth = document.getElementById("date_of_birth")
    button.addEventListener('click', (event) =>
    fetch('https://randomuser.me/api/')
    .then(respond => respond.json())
    .then(result => {
      street.innerText = result.results[0].location.street
      city.innerText = result.results[0].location.city
      state.innerText = result.results[0].location.state
      postcode.innerText = result.results[0].location.postcode
      phone.innerText = result.results[0].phone
      cell.innerText = result.results[0].cell
      date_of_birth.innerText = result.results[0].dob.date
      fullname.innerText =`${result.results[0].name.title} ${result.results[0].name.first} ${result.results[0].name.last}`
      email.innerText = result.results[0].email
    })
  )
});
