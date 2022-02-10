// bagaimana cara kita menampilkan angka 1 sampai 5
console.log('\n-------------METHOD FOR LOOP-------------\n')

// method looping 1 => for - loop
for (let i = 1; i <= 5; i++) {
  console.log(i)
}

console.log('\n-------------METHOD WHILE - DO-------------\n')

// bagaimana cara kita menampilkan suatu nilai itu genap atau ganjil, dari angka 0 sampai 10
/*
0 - genap
1 - ganjil
2 - genap
...
10 - genap
*/

let nilai = 0;

// method looping 2 => while - do
while (nilai <= 10) {
  // yang di dalam scope while, adalah do
  if (nilai%2 === 0) {
    console.log(nilai + ' - genap') // metode concat
  } else {
    console.log(`${nilai} - ganjil`) // metode template literal 
  }
  // nilai++
  nilai = nilai + 1
}


console.log('\n-------------METHOD DO - WHILE-------------\n')
/**
 aku punya uang sekian ribu
 mau berapapun uangku, akan aku sumbangkan sebesar 50%
 jika uangku bersisa > 10000, maka akan aku sumbangkan kembali sebesar 50%
*/

// method looping 3 => do - while

let money = 10000

do {
  let uangSedekah = 0.5 * money
  console.log(`Saya sudah bersedekah sejumlah ${uangSedekah}`)

  // money = money - uangSedekah
  money -= uangSedekah
} while(money > 10000)


console.log('\n-------------ASTERIK-------------\n')

/*
  Tolong buat program yang dapat menampilkan gambar seperti ini
  *
  *
  *
  * 
  * 
*/

// for (let i = 1; i <= 5; i++) {
//   console.log('*')
// }

/**
 baris => row => i
 kolom => col => j
 */

for(let baris = 0; baris < 5; baris++) {
  console.log('*')
}

/*
  Tolong buat program yang dapat menampilkan gambar seperti ini
  *
  * *
  * * *
  * * * *
  * * * * *
*/
console.log('-------------------')
for(let baris = 0; baris < 5; baris++) {
  let template = `baris ke-${baris} => `
  for (let kolom = 0; kolom < 5; kolom++) {
    // template += '* '
    template += `(${baris},${kolom}) `
  }
  console.log(template)
}

console.log('-------------------')
for(let baris = 0; baris < 5; baris++) {
  let template = ''
  for (let kolom = 0; kolom < 5; kolom++) {
    // template += '* '
    if (baris >= kolom) {
      template += '* '
    } else {
      template += '  '
    }
  }
  console.log(template)
}

/*

* * * * *
* * * *
* * *
* *
*

*/


let word = 'kancil'

// palindrome = licnak 
// palindrome === word ? kalau iya, maka kita kasih 'true', jika tidak, maka 'false'


let palindromeWord = ''
// console.log(palindromeWord, "<<< sebelum ditambahkan")
// palindromeWord += 'k'
// console.log(palindromeWord, "<<< sesudah ditambahkan k")
// palindromeWord += 'a'
// console.log(palindromeWord, "<<< sesudah ditambahkan a")
// palindromeWord += 'n'
// console.log(palindromeWord, "<<< sesudah ditambahkan n")

// bagaimana cara aku bisa menampilkan huruf 'k' dalam kata 'kancil' dalam variabel word tersebut
// console.log(word[0])
// console.log(word[1])
// console.log(word[2])
// console.log(word.length, '<< panjang dari kata kancil')
console.log(word[word.length], '<<< pasti undefined')
// console.log(word[word.length - 1])

// for (let index = 0; index < word.length; index++) {
//   console.log(word[index])
//   palindromeWord += word[index]
// }

// console.log(palindromeWord)

word = 'kancil'

for (let index = word.length - 1; index >= 0; index--) {
  console.log(word[index])
  palindromeWord += word[index]
}

console.log(palindromeWord)

if (word === palindromeWord) {
  console.log(true)
} else {
  console.log(false)
}