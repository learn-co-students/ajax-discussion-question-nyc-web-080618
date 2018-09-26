document.addEventListener("DOMContentLoaded", () => {
  const fullname = document.getElementById("fullname");
  const emailAddress = document.getElementById("email");
  const imageUrl = document.getElementById("profile_picture")
  const address = document.getElementById("streetInformation")
  const buttonListener = document.getElementById("addNewPersonToPageButton");
  const phoneInformation = document.getElementById("allPhoneInformation");
  const dobInformation = document.getElementById("date_of_birth")


  buttonListener.addEventListener('click', (event) => {
    fetch('https://randomuser.me/api/')
    .then(response => {
      return response.json()
    })
    .then(data => {
    //  debugger
      fullname.innerText = data.results[0].name.first + " " + data.results[0].name.last
      email.innerText = data.results[0].email
      imageUrl.src = data.results[0].picture.thumbnail
      //debugger
      address.innerHTML = streetInformation(data)
      phoneInformation.innerHTML = updatingAllPhoneInofmration(data)
      dobInformation.innerText =  data.results[0].dob.date
    })

  })


});

function streetInformation(data){

  let results = `<div class="col" id="streetInformation">
      <label for="street">Street:</label>
      <h4 id="street">${data.results[0].location.street}</h4>
      <label for="city">City:</label>
      <h4 id="city">${data.results[0].location.city}</h4>
      <label for="state">State:</label>
      <h4 id="state">${data.results[0].location.state}</h4>
      <label for="postcode">Post Code:</label>
      <h4 id="postcode">${data.results[0].location.postcode}</h4>
    </div>`
    return results
}

function updatingAllPhoneInofmration(data){
  let results = `<div class="col" id="allPhoneInformation">

    <label for="phone">Phone:</label>
    <h4 id="phone">${data.results[0].phone}</h4>

    <label for="cell">Cell:</label>
    <h4 id="cell">${data.results[0].cell}</h4>

  </div>`
  return results
}
