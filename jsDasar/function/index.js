// console.log(`Hay kak zul !`)
// console.log(`Hay kak adma !`)
// console.log(`Hay kak astuti !`)
// console.log(`Hay kak dewita !`)
// console.log(`Hay kak aisyah !`)
// console.log(`Hay kak jihan !`)
// console.log(`Hay kak mifta !`)
// console.log(`Hay kak ulina !`)

// global scope
function greetings(name) {
  // local scope 1
  console.log(`Hay kak ${name} !`)
}

greetings('zul')
greetings('adma')
greetings('ulina')

/**
 () => invoke
 {} => curly bracket / identifier untuk local scope

 function namaFunction (variabelParameter) {

 }

 misalkan parameternya lebih dari 1, maka bisa dipisahkan dengan koma

 function namaFunction (param1, param2, ...) {

 }

 namaFunction(argument1, argument2, ...)
 */

const num1 = 10
const num2 = 20
const result1 = num1 + num2 
console.log(result1)

const num3 = 30
const num4 = 40
const result2 = num3 + num4
console.log(result2)

function sum(num1, num2) {
  const result = num1 + num2
  console.log(result)
}

sum(10, 20)
sum(100, 200)
console.log('---------------------------')

function sumWithReturn(num1, num2) {
  const result = num1 + num2
  return result
}
// console.log(sumWithReturn(50, 25))
const resultSum = sumWithReturn(50, 25)
console.log(resultSum)

function mesinPembuatRoti(bahan) {
  if (bahan === 'tepung') {
    return 'roti tawar'
  } else {
    return false
  }
}

function hiasTopping(roti) {
  if (roti) {
    return `${roti} dengan boba`
  } else {
    return `roti tidak dapat dihias karena tidak ada`
  }
}

// Cara pertama
const roti = mesinPembuatRoti('tepung')
console.log(roti, '<<< roti')
const resultRoti = hiasTopping(roti)
console.log(resultRoti, '<< result dari hias topping')

// Cara kedua
const resultRoti2 = hiasTopping(mesinPembuatRoti('tepung'))
console.log(resultRoti2)


function membuatRoti(bahan) {
  const roti = mesinPembuatRoti(bahan) // ini disebut dengan modular function / function helper
  if (roti) {
    return `${roti} dengan boba`
  } else {
    return `roti tidak dapat dihias karena tidak ada`
  }
}

const bread = membuatRoti('tepung')
console.log(bread, '<<< bread from function membuatRoti')

console.log('\n-------------------------\n')

let nama = 'astuti'

function manggilNama () {
  return `Hay kak ${nama} !`
}

console.log(manggilNama())

nama = 'adma'

console.log(manggilNama())

nama = 'jihan'

console.log(manggilNama())

function manggilNamaDenganParam (name = '') { // name sebagai parameter
  return `Hay kak ${name} !`
  // if (name) {
  //   return `Hay kak ${name} !`
  // } else {
  //   return `Hay kak !`
  // }
}

console.log(manggilNamaDenganParam('dewita')) // 'dewita' sebagai argumen
console.log(manggilNamaDenganParam('aisyah'))
console.log(manggilNamaDenganParam('ulina'))
console.log(manggilNamaDenganParam('mifta'))
console.log(manggilNamaDenganParam())
/*

  jadi, parameter => variable name nya dan argument => value dari variable tersebut

  ketika kita membuat sebuah function dengan parameter, 
  namun ternyata saat pemanggilan tidak dikasih argumen untuk parameter tersebut 
  dan kita tidak mau menampilkan 'undefined'
  maka ada dua cara
    1. memberikan default parameter
    2. kasih kondisi di dalam function
*/


// let inputName = process.argv[2]

// console.log(manggilNamaDenganParam(inputName))

console.log('\n-------------------------\n')


function firstUniqueChar(word = '') {
  const arrWord = word.split('')
  const sortWord = arrWord.sort()
  // console.log(sortWord)

  let char = ''
  for (let i = 0; i < sortWord.length; i++) {
    if (i === 0) {
      if (sortWord[i + 1]) {  // kita check character di index ke-1
        if (sortWord[i + 1] === sortWord[i]) {
          // tidak usah ngapa2in disini, karena dia duplicate char
        } else {
          char = sortWord[i]
        }
      } else {
        // jika ternyata hanya 1 karakter, maka akan masuk ke dalam kondisi disini
        char = sortWord[i]
      }
    } else if ( i === sortWord.length - 1) { // jika index terakhir, maka check di sebelumnya
      if (sortWord[i - 1] !== sortWord[i]) {
        char = sortWord[i]
      }
    } else {
      if ((sortWord[i - 1] !== sortWord[i]) && (sortWord[i] !== sortWord[i + 1])) {
        char = sortWord[i]
      }
    }

    if (char) {
      break
    }
  } 

  return `firstUniqueChar should be "${char}"`
}

// console.log(firstUniqueChar('hallo'))
// console.log(firstUniqueChar('wooohoowh'))
// console.log(firstUniqueChar('alloha'))


function firstNonRepeatChar (word = '') {
  const arrWord = word.split(' ')
  if (arrWord.length > 1) {
    return `kata tidak boleh dipisah`
  } else {
    let char = ''
  
    for (let i = 0; i < word.length; i++) {
      const currentChar = word[i]
      let duplicateFlag = false
  
      for (let j = 0; j < word.length; j++) {
        if (i !== j) {
          if (currentChar === word[j]) {
            duplicateFlag = true
          }
        }
      }
  
      if (duplicateFlag === false) {
        char = currentChar
        break
      }
    }
  
    return `firstNonRepeatChar should be "${char}"`
  }
}

console.log(firstNonRepeatChar('hallo'))
console.log(firstNonRepeatChar('wooohoowh'))
console.log(firstNonRepeatChar('alloha'))
console.log(firstNonRepeatChar('hello world'))