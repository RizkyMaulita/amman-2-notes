function validateEmail (email) {
  const emailValidator = new RegExp(/^\S+@\S+\.\S+$/);
  if (emailValidator.test(email)) {
    return true;
  } else {
    return false;
  }
}

function validatePassword (password) {
  if (!password || password.length < 6) {
    return false
  } else {
    return true
  }
}

function validateUsername(username) {
  if (!username) {
    return false;
  } else {
    return true;
  }
}


const elFormRegister = document.getElementById('form-register')

const elInputEmail = document.getElementById('email')
const elInputUsername = document.getElementById('username')
const elInputPassword = document.getElementById('password')

elFormRegister.addEventListener('submit', function(event) {
  event.preventDefault()

  const email = elInputEmail.value
  const username = elInputUsername.value
  const password = elInputPassword.value

  // console.log(email, '<<< email')
  // console.log(username, '<<< username')
  // console.log(password, '<<< password')

  // validasi email 
  if (validateEmail(email)) {
    // console.log('email valid')
    
    // validasi username
    if (validateUsername(username)) {
      // console.log('username and email valid')

      // validasi password
      if (validatePassword(password)) {
        // console.log('semuanya valid')
        const newData = {
          email,
          username,
          password
        }


        // check data user yg ada
        const getDataUsers = localStorage.getItem('dataUser')
        let dataUser = []

        if (getDataUsers) {
          dataUser = JSON.parse(getDataUsers)
        }

        const checkEmail = dataUser.find(user => user.email === email)

        if (checkEmail) {
          // jika ternyata emailnya ada
          alert('Email has already exist !') 
        } else {
          const checkUsername = dataUser.find(user => user.username === username)

          if (checkUsername) {
            alert('Username has already exist !')
          } else {

            // SUCCESS register
            dataUser.push(newData)
            localStorage.setItem('dataUser', JSON.stringify(dataUser))

            // ketika sudah success, maka kita anggap dia sudah login juga
            localStorage.setItem('userLogin', username)
            window.location.href = './index.html'
          }
        }
      } else {
        alert('Please input password at least 6 character !')
      }
    } else {
      alert('Please input username !')
    }
  } else {
    alert('Please input correct email !')
  }
})


// check if show password checked
const elCheckboxPass = document.getElementById('showPassword')

elCheckboxPass.addEventListener('click', function () {
  const checkedValue = elCheckboxPass.checked
  // console.log(checkedValue)
  if (checkedValue) {
    elInputPassword.setAttribute('type', 'text')
  } else {
    elInputPassword.setAttribute('type', 'password')
  }
})