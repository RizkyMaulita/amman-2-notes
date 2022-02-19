const dataGroupAmman = {
  gender: ['female', 'male'], // array
  address: 'Sumbawa', // string
  age: 22, // number
  isMarried: false, // boolean,
  groupMentor: {  // object
    name: 'Litha',
    gender: 'female'
  },
  students: [ // array of objects
    {
      name: 'Yayad'
    },
    {
      name: 'Zul'
    },
    {
      name: 'Astuti'
    },
    {
      name: 'Ulina'
    }
  ]
}


// const gender = ['female', 'male']
// const age = 22

/*
  secara default, akan mempunyai 
  [key / properties]: value => dengan value bebas type datanya

  akses => namaObject.[key] atau namaObject['key']
*/

console.log(dataGroupAmman.address, '<<< sumbawa')
console.log(dataGroupAmman[`address`])


// manipulate value
dataGroupAmman.age = 24   // jika ada key nya, maka akan mengganti value
dataGroupAmman.year = 2022  // jika tidak ada key nya, maka akan buat key baru dengan value tersebut
console.log(dataGroupAmman)

// tidak bisa mengganti value secara langsung

// dataGroupAmman = {  // TypeError: Assignment to constant variable.
//   umur: 25
// }

// cara untuk mengetahui sebuah object mempunyai key apa saja
const keys = Object.keys(dataGroupAmman) // mereturn sebuah array 
console.log(keys, '<<< key')  

const isHaveKeyAddress = dataGroupAmman.hasOwnProperty('address')
console.log(isHaveKeyAddress, '<<< data punya key "address"')

const isHaveKeyAlamat = dataGroupAmman.hasOwnProperty('alamat')
console.log(isHaveKeyAlamat, '<<< data punya key "alamat"')

console.log(dataGroupAmman['alamat'])

// cara pertama untuk akses value dari group mentor
const groupMentor = dataGroupAmman.groupMentor
console.log(groupMentor, '<<< group mentor')

const groupMentorName = groupMentor.name
console.log(groupMentorName, "<<<< group mentor name")

// cara kedua untuk akses value dari group mentor
const groupMentorGender = dataGroupAmman.groupMentor.gender // chaining
console.log(groupMentorGender, '<<< group mentor gender')

console.log('\n--------------------------------------\n')
const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

// cara pertama
// const ingredients = milkBasedCoffee.ingredients
// console.log(ingredients, '<<< ingredients')

// const espresso = ingredients.espresso
// console.log(espresso, '<<< espresso')

// const origin = espresso.origin
// console.log(origin, '<<< origin')

// cara kedua pakai chaining
const origin2 = milkBasedCoffee.ingredients.espresso.origin
console.log(milkBasedCoffee.ingredients.espresso.origin)

const brand = milkBasedCoffee.ingredients.espresso.brand
console.log(brand);

const isVegan = milkBasedCoffee.ingredients.milk.isVegan
console.log(isVegan);

function getObjectValue(obj = {}, path = '') {
  // console.log(obj, '<<< object')
  // console.log(path, '<<< path')
  // console.log(obj.path, '<<< obj.path')
  // console.log(obj[path], '<<< obj[path]')
  const keys = path.split('.')
  // console.log(keys)
  let result = obj
  // result.key1.key2.key3....
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    console.log(key, '<<< key dengan indeks >>>', i)
    if (result.hasOwnProperty(key)) {
      result = result[key]
      console.log(result, '<<<< dengan index >>>', i)
    } else {
      result = null
      break
    }
  }

  return result
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
// const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
// const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
// console.log(coffeeBrand);
// console.log(isMilkVegan)