const toggleDoB = () => {
  var dateField = document.getElementById('dob')
  dateField.setAttribute('type', 'date')
}
const email_db = ['shresthanishant011@gmail.com']
var name = document.getElementById('name')
var email = document.getElementById('email')
var uname = document.getElementById('uname')
var dob = document.getElementById('dob')
var dob = document.getElementById('dob')
var password1 = document.getElementById('password1')
var password2 = document.getElementById('password2')
var form = document.getElementById('sign-up')
var isNameValid = false
var isEmailValid = false
// validates email
const emailValidator = (email) => {
  const email_warner = document.getElementById('email-warning')
  if (email !== '') {
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      console.log('Valid format')
      if (email_db.includes(email)) {
        isEmailValid = false
        email_warner.innerHTML = 'arkako email nalekhna bhai.'
      } else {
        isEmailValid = true
        email_warner.innerHTML = ''
      }
    } else {
      email_warner.innerHTML = 'Email kasto hunxa tha xaina talai?'
    }
  }
  console.log(isEmailValid)
}

const nameValidator = (len) => {
  const name_warner = document.getElementById('name-warning')

  if (len > 32) {
    name_warner.innerHTML = 'kati lamo name ho... agadi rw paxadi ko matra lekh'
    isNameValid = false
  } else {
    name_warner.innerHTML = ''
    isNameValid = true
  }
}
