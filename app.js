const toggleDate = () => {
  var dateField = document.getElementById('dob')
  dateField.setAttribute('type', 'date')
}
const toggleText = () => {
  var dateField = document.getElementById('dob')
  dateField.setAttribute('type', 'text')
}
const email_db = ['shresthanishant011@gmail.com']
const user_db = ['srestn011', 'nishant']
var isNameValid = false
var isEmailValid = false
var isUsernameValid = false
var isdobValid = false
// validates email
const emailValidator = (email) => {
  const email_warner = document.getElementById('email-warning')
  if (email !== '') {
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
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
}

const nameValidator = (len) => {
  const name_warner = document.getElementById('name-warning')

  if (len > 32) {
    name_warner.innerHTML = 'kati lamo name agadi rw paxadi ko matra lekh'
    isNameValid = false
  } else if (len < 2) {
    name_warner.innerHTML = 'name nai xaina ki k ho'
    isNameValid = false
  } else {
    name_warner.innerHTML = ''
    isNameValid = true
  }
}

const usernameValidator = (username) => {
  const username_warner = document.getElementById('username-warning')
  if (username.match(/[-!$%^&*()_+|~=`\\#{}\[\]:";'<>?,.\/]/)) {
    isUsernameValid = false
    username_warner.innerHTML = 'Jpt name narakhna hey bhagwan!!'
    if (username.length > 20) {
      isUsernameValid = false
      username_warner.innerHTML = 'Jpt lamo name narakhna hey bhagwan!!'
    }
  } else {
    if (username.length > 20) {
      isUsernameValid = false
      username_warner.innerHTML =
        'ajhai lamo rakhna.. database bharini tw mero ho'
    } else if (user_db.includes(username)) {
      isUsernameValid = false

      username_warner.innerHTML = 'ali unique rakhna.. yo name pailai xa'
    } else {
      isUsernameValid = true
      username_warner.innerHTML = ''
    }
  }
}

const dobValidator = (dob) => {
  const dob_warner = document.getElementById('dob-warning')

  const age = Date.now() - Date.parse(dob)
  if (age >= 567993600000) {
    isdobValid = true
    dob_warner.innerHTML = ''
  } else {
    isdobValid = false
    if (Date.parse(dob) > Date.now()) {
      dob_warner.innerHTML = 'Janminai baki raixas'
    } else {
      dob_warner.innerHTML = 'bacchai xas'
    }
  }
}
document.addEventListener('focusout')
