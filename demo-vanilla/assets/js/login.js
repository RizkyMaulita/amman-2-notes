const elFormLogin = document.getElementById('form-login')

const elInputAccount = document.getElementById('account')
const elInputPassword = document.getElementById('password')

elFormLogin.addEventListener('submit', function (event) {
  event.preventDefault()
  const account = elInputAccount.value
  const password = elInputPassword.value

  if (account) {
    if (password) {
      // console.log(account, password)

      // check data user yg ada
      const getDataUsers = localStorage.getItem('dataUser')
      let dataUser = []

      if (getDataUsers) {
        dataUser = JSON.parse(getDataUsers)
      }

      const findAccount = dataUser.find(user => user.email === account || user.username === account)

      if (findAccount) {
        if (findAccount.password === password) {
          // SUCCESS login
          const username = findAccount.username
          localStorage.setItem('userLogin', username)
          window.location.href = './index.html'
        } else {
          elInputPassword.value = ''
          alert('Invalid account !')
        }
      } else {
        elInputPassword.value = ''
        alert('Invalid account !')
      }
    } else {
      alert('Please input your password !')
    }
  } else {
    alert('Please input your email / username !')
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