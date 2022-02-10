console.log('connect')

// // console.log(document.getElementById('makanan'))
// console.log(document.getElementById('makanan').innerText, '<<< value dari tag p')

// let food = document.getElementById('makanan').innerText
// console.log(food, '<<< food')

// // food = 'Mie Goreng'
// // console.log(food, '<<< food')
// // document.getElementById('makanan').innerHTML = food

// setTimeout(() => {
//   food = 'Steak'
//   console.log(food, '<<< food')
//   document.getElementById('makanan').innerHTML = food
// }, 3000)  // akan delay / dijalankan setelah 3000 ms = 3 detik

let docMakanan = document.getElementById('makanan')
console.log(docMakanan)
console.log(docMakanan.innerText, '<< inner text dari makanan') // kita bisa melakukan ini karena id itu unique dan cuma hanya 1.

let food = docMakanan.innerText

function changeFood () {
  food = 'Sushi'
  console.log(food, '<< food')
  docMakanan.innerHTML = food
}

// setTimeout(changeFood, 3000)  // setelah 3 detik berjalan, maka function changeFood akan dijalankan

let docMinuman = document.getElementsByClassName('minuman')
console.log(docMinuman, '<<< docMinuman')
console.log(docMinuman.length, '<<< karena ada length berarti datanya banyak')

for (let i = 0; i < docMinuman.length; i++) {
  // console.log(docMinuman[i])
  let docDrink = docMinuman[i]
  console.log(docDrink.innerText)
  let drink = docDrink.innerText
  
  function changeDrink () {
    drink += `<bold> dicampur ke dalam Coffee Iced </bold>`
    console.log(drink)
    docDrink.innerHTML = drink
    // docDrink.innerText = drink
  }
  // setTimeout(changeDrink, 4000)
}


let docTPoint = document.getElementById('tpoint')
console.log(docTPoint)


/**
  Di CSS, ketika kalian define style, maka
      . => class
      # => id

  Maka . atau # digunakan pada pendefinisian querySelector
*/

let docMakanan2 = document.querySelector('#makanan')
console.log(docMakanan2, '<<< docMakanan 2')

let docMinuman2 = document.querySelector('.minuman')
console.log(docMinuman2.innerHTML, '<<< docMinuman 2')

let docMinuman3 = document.querySelectorAll('.minuman')
console.log(docMinuman3, '<<< docMinuman 3')

for (let i = 0; i < docMinuman3.length; i++) {
  let docDrink = docMinuman3[i]
  console.log(docDrink, '<<< doc drink')
}