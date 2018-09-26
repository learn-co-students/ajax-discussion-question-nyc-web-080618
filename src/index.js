const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

const primaryButton = document.getElementById("userButton")

primaryButton.addEventListener("click", function(event) {
console.log(primaryButton)

    const userInfo = fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(userData => {
      console.log(userData.results)
      const userObj = userData.results[0]
      let user1 = new User(userObj)
      console.log(user1)

      const nameContainer = document.getElementById("fullname")
      const emailContainer = document.getElementById("email")
      const streetContainer = document.getElementById("street")
      const cityContainer = document.getElementById("city")
      const stateContainer = document.getElementById("state")
      const phoneContainer = document.getElementById("phone")
      const cellContainer = document.getElementById("cell")
      const birthDateContainer = document.getElementById("date_of_birth")
      const postContainer = document.getElementById("postcode")
      const imgTag = document.getElementById("profile_picture")


      nameContainer.innerText = `${user1.first} ${user1.last}`
      emailContainer.innerText = user1.email
      streetContainer.innerText = user1.street
      cityContainer.innerText = user1.city
      stateContainer.innerText = user1.state
      phoneContainer.innerText = user1.phone
      cellContainer.innerText = user1.cell
      postContainer.innerText = user1.post
      birthDateContainer.innerText = user1.birth

      imgTag.src = user1.picture

    })
})





});
