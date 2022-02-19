const elModalTitle = document.getElementById('modal-title')
const elModalImage = document.getElementById('modal-image')
const elModalText = document.getElementById('modal-text')

// console.log(elModalTitle, '<< modal title')
// console.log(elModalImage, '<< modal image')
// console.log(elModalText, '<< modal text')

// elModalTitle.innerHTML = 'Milk Based Coffee'
// elModalText.innerHTML = `Some quick example text to build on the card title and make up the bulk of the card's content.`
// elModalImage.src = "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=30"

/*
  string
    '...' 
    " ... "
    ``
    => dia harus di awali dan di tutupi dengan symbol yang sama

*/

// const elCard01Title = document.getElementById('card-01-title')
// const elCard01Image = document.getElementById('card-01-image')
// const elCard01Text = document.getElementById('card-01-text')

// console.log(elCard01Title)
// console.log(elCard01Image)
// console.log(elCard01Text)

// elModalTitle.innerHTML = elCard01Title.innerText
// elModalText.innerHTML = elCard01Text.innerText
// elModalImage.src = elCard01Image.src

function clickCard(idCard) {
  console.log(idCard)
  const elCardTitle = document.getElementById(`${idCard}-title`)
  const elCardImage = document.getElementById(`${idCard}-image`)
  const elCardText = document.getElementById(`${idCard}-text`)

  // console.log(elCardTitle)
  // console.log(elCardImage)
  // console.log(elCardText)

  elModalTitle.innerHTML = elCardTitle.innerText
  elModalText.innerHTML = elCardText.innerText
  elModalImage.src = elCardImage.src
}

function clickCard01 () {
  const elCard01Title = document.getElementById('card-01-title')
  const elCard01Image = document.getElementById('card-01-image')
  const elCard01Text = document.getElementById('card-01-text')

  elModalTitle.innerHTML = elCard01Title.innerText
  elModalText.innerHTML = elCard01Text.innerText
  elModalImage.src = elCard01Image.src
}

function clickCard02 () {
  const elCard02Title = document.getElementById('card-02-title')
  const elCard02Image = document.getElementById('card-02-image')
  const elCard02Text = document.getElementById('card-02-text')

  elModalTitle.innerHTML = elCard02Title.innerText
  elModalText.innerHTML = elCard02Text.innerText
  elModalImage.src = elCard02Image.src
}

function clickCard03 () {
  const elCard03Title = document.getElementById('card-03-title')
  const elCard03Image = document.getElementById('card-03-image')
  const elCard03Text = document.getElementById('card-03-text')

  elModalTitle.innerHTML = elCard03Title.innerText
  elModalText.innerHTML = elCard03Text.innerText
  elModalImage.src = elCard03Image.src
}

function clickCard04 () {
  const elCard04Title = document.getElementById('card-04-title')
  const elCard04Image = document.getElementById('card-04-image')
  const elCard04Text = document.getElementById('card-04-text')

  elModalTitle.innerHTML = elCard04Title.innerText
  elModalText.innerHTML = elCard04Text.innerText
  elModalImage.src = elCard04Image.src
}