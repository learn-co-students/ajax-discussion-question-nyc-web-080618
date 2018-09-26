const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  const primaryButton = document.getElementById('userButton')


 fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(userData => {
    const userObj = userData.results[0]
    let user1 = new User(userObj)

    const nameContainer = document.getElementById('fullname')
    const emailContainer = document.getElementById('email')
    const streetContainer = document.getElementById('street')
    const cityContainer = document.getElementById('city')
    const stateContainer = document.getElementById('state')
    const postcodeContainer = document.getElementById('postcode')
    const phoneContainer = document.getElementById('phone')
    const cellContainer = document.getElementById('cell')
    const dobContainer = document.getElementById('date_of_birth')
    const pictureContainer = document.getElementById('profile_picture')

    nameContainer.innerText = `${user1.first} ${user1.last}`
    emailContainer.innerText = `${user1.email}`
    streetContainer.innerText = `${user1.street}`
    cityContainer.innerText = `${user1.city}`
    stateContainer.innerText = `${user1.state}`
    postcodeContainer.innerText = `${user1.post}`
    phoneContainer.innerText = `${user1.phone}`
    cellContainer.innerText = `${user1.cell}`
    dobContainer.innerText = `${user1.dateOfBirth}`
    pictureContainer.innerText = `${user1.picture}`

    pictureContainer.src = user1.picture

})

});
