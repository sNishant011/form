const toggleDate = () => {
  var dateField = document.getElementById('dob')
  dateField.setAttribute('type', 'date')
}

const email_db = ['shresthanishant011@gmail.com']
const user_db = ['srestn011', 'nishant', 'prashant']
var isNameValid = false
var isEmailValid = false
var isUsernameValid = false
var isdobValid = false
// password shower
var passShow = false
const showPassword = () => {
  if (passShow) {
    document.getElementById('password1').type = 'password'
    document.getElementById('password2').type = 'password'
    document.getElementById('show_hide-icon').classList.remove('fa-eye-slash')
    document.getElementById('show_hide-icon').classList.add('fa-eye')

    passShow = false
  } else {
    document.getElementById('password1').type = 'text'
    document.getElementById('password2').type = 'text'
    document.getElementById('show_hide-icon').classList.remove('fa-eye')

    document.getElementById('show_hide-icon').classList.add('fa-eye-slash')

    passShow = true
  }
}
// validates email
const emailValidator = (email) => {
  const email_warner = document.getElementById('email-warning')
  if (email !== '') {
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      if (email_db.includes(email)) {
        isEmailValid = false
        email_warner.innerHTML = 'Email already registered.'
      } else {
        isEmailValid = true
        email_warner.innerHTML = ''
      }
    } else {
      email_warner.innerHTML = 'Please enter a valid email.'
    }
  } else {
    email_warner.innerHTML = 'Email cannot be empty.'
  }
}

const nameValidator = (len) => {
  const name_warner = document.getElementById('name-warning')

  if (len > 32) {
    name_warner.innerHTML =
      'Name is too long. It should be less than 32 letters.'
    isNameValid = false
  } else if (len < 2) {
    name_warner.innerHTML = 'Name should be at least of 2 letter'
    isNameValid = false
  } else {
    name_warner.innerHTML = ''
    isNameValid = true
  }
}

const usernameValidator = (username) => {
  const username_warner = document.getElementById('username-warning')
  if (username.match(/[-!$%^&*()_ +|~=`\\#{}\[\]:";'<>?,.\/]/)) {
    isUsernameValid = false
    username_warner.innerHTML =
      'Username should be formed using letters and numbers only.'
  } else {
    if (username === '') {
      isUsernameValid = false
      username_warner.innerHTML = 'Username cannot be empty.'
    } else if (username.length > 20) {
      isUsernameValid = false
      username_warner.innerHTML = 'Username should be less than 20 character.'
    } else if (user_db.includes(username)) {
      isUsernameValid = false

      username_warner.innerHTML = 'This username is already taken.'
    } else {
      isUsernameValid = true
      username_warner.innerHTML = ''
    }
  }
}

const dobValidator = (dob) => {
  const dob_warner = document.getElementById('dob-warning')
  const age = Date.now() - Date.parse(dob)
  if (dob !== '') {
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
  } else {
    isdobValid = false
    dob_warner.innerHTML = 'Date of Birth is mandatory field.'
  }
}

const checkPasswordStrength = (password) => {
  const password_warner = document.getElementById('password1-warning')
  if (password !== '') {
    const full_name = document.getElementById('name').value
    const username = document.getElementById('username').value
    const dob = document.getElementById('dob').value
    const dates = dob.split('-')
    const names = full_name.split(' ')
    let insecure_variables = [...names, username, ...dates]
    // /[-!$%^&*()_ +|~=`\\#{}\[\]:";'<>?,.\/1234567890 ]/
  } else {
    password_warner.innerHTML = 'Password cannot be empty.'
  }
}
