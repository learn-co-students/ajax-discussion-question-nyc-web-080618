class User {
constructor(userObj) {
  this.first = userObj.name.first
  this.last = userObj.name.last
  this.email = userObj.email
  this.street = userObj.location.street
  this.city = userObj.location.city
  this.state = userObj.location.state
  this.phone = userObj.phone
  this.cell = userObj.cell
  this.birth = userObj.registered.date
  this.post = userObj.location.postcode
  this.picture = userObj.picture.medium
}

render() {


}



}
