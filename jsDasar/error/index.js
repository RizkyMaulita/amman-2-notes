/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
// => terjadi ReferenceError; Cannot access 'salaryWithConst' before initialization
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut? 
// => ReferenceError
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi
// => karena kita memanggil sebuah variable 'salaryWithConst' sebelum variable tersebut di deklarasi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;