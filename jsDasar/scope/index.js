/*
SCOPE
  1. Global Scope
      => semua yang ada di dalam global scope, maka dapat di pakai atau di akses oleh 
          local scope didalamnya
      => tetapi, global scope tidak bisa mengakses sesuatu yang ada di dalam local scope 
  2. Local Scope
      => biasanya diidentifikasi dengan adanya {}
      => biasanya kalau codenya rapi, maka local scope yang identasinya lebih menjorok ke dalam
      => semua yang ada di dalam local scope, hanya bisa diakses oleh local scope itu sendiri
      => dan semua yang ada di dalam global scopenya bisa diakses di dalam local scope
      => if () {
          ...local scope 1
        } else {
          ...local scope 2
        }
      => function namaFunction() {
          ...local scope 3
          if () {
            ...local scope 4
          }
        }
      => switch (baju) {
          case 'merah':
            ...local scope untuk baju merah
          case 'biru':
            ...local scope untuk baju biru
        }
      => for (let i = 0; i <...) {  // bahkan deklarasi i untuk looping itu masuk ke dalam local scope yg berbeda
          ...local scope process looping
        }

        for (...local scope untuk insialisasi loop) {
          ...local scope untuk process loop
        }
*/

if (true) {
  console.log('benar')
}

for( let i = 0; i < 5; i++) {
  // global scope untuk kondisi A
  // local scope untuk process looping
  const x = 10 
  // maka x menjadi local scope untuk process looping dilihat dari file
  // dan x menjadi global scope untuk kondisi A
  if (i === 0) { // kondisi A
    // local scope untuk kondisi A = kondisi i === 0
    // console.log(x, '<<< x di local scope kondisi A')
    let y = 5
    // console.log(y, '<<< y di local scope kondisi A')
  }

  // console.log(y, '<<< y yang dari kondisi A di akses di dalam globalnya')
}

let z = 7 // z adalah global scope pada file
// console.log(x, '<< x yang dari process looping di akses di global scope pada file')



function makan(nasi) {
  if (nasi) {
    const lauk = 'ayam goreng'
    console.log(lauk, '<<< lauk')
  } else {
    const goFood = 'KFC'
  }

  // console.log(lauk, '<<< lauk')
}

// makan(true)

function belanja (uang) {
  let barang = '' // deklarasi variable

  if (uang > 1000000) {
    barang = 'Laptop' // assign value ke dalam variable
    // let barang = 'Laptop' // deklrasi variable dan assign value kedalamnya
    // console.log(barang, '<<< barang di local scope uang > 100000')
  } else if (uang <= 1e6 && uang > 500000) { // e6 === ada 6 digit 0
    barang = 'SSD'
  } else if (uang <= 500000 && uang > 100000) {
    barang = 'baju'
  } else {
    barang = 'makanan'
  }

  console.log(barang, '<<< barang di local scope function belanja')
}

belanja(1050000)

/**
 
aturan :
  - ketika di dalam local scope, dia akan mencari variable / function yang ada di dalam local scope itu dulu
    jika tidak ada, maka dia akan mencari di globalnya.

    contoh: ada sebuah sekolah SMA, lalu kita berada di kelas 10 IPA 1. kita sedang mencari siswa yang bernama "Ani"
        - langkah pertama, kita mencari terlebih dahulu teman kita yang nama "Ani" di kelas 10 IPA 1
          jika ada, maka "Ani" yang dimaksud ialah dia. kalau tidak, maka lanjut ke langkah kedua
        - langkah kedua, kita mencari diantara siswa kelas 10 yang namanya "Ani". kalau ada, maka dia yang dimaksud.
          kalau tidak, maka lanjut ke langkah ketiga
        - langkah ketiga, kita mencari diantara seluruh siswa di SMA tersebut yang namanya "Ani". kalau ada, maka dia 
          yang dimaksud. kalau gak, berarti "Ani" tidak ditemukan / tidak ada / error .
 */