class User {
  constructor(obj) {
    this.first = obj.name.first
    this.last = obj.name.last
    this.street = obj.location.street
    this.email = obj.email
    this.city = obj.location.city
    this.state = obj.location.state
    this.post = obj.location.postcode
    this.phone = obj.phone
    this.cell = obj.cell
    this.dateOfBirth = new Date(obj.dob.date)
    this.picture = obj.picture.medium
  }
}
