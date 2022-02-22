
// contoh: jika uang > 100 ribu, aku akan traktir bakso. kalau kurang , maka tidak jadi traktir
function janji (uang) {
  return new Promise(function (resolve, reject) {
    if (uang > 100000) {
      // menepati janji 
      resolve('aku akan traktir bakso besok !')
    } else {
      reject('aku tidak jadi traktir bakso')
    }
  })
}

let uang = 50000
janji(uang)
  .then(response => console.log(response))  // ketika janji di tepatin => atau masuk resolve
  .catch(error => console.log(error)) // ketika janji tidak di tepatin => atau masuk reject


const isR18Plus = ( age = 0 ) => {
  return new Promise(function (resolve, reject) {
    if (age >= 18) {
      resolve('anda sudah dewasa')
    } else {
      reject('anda masih dibawah umur')
    }
  })
}

const printR18Plus = async () => {
  try {
    const underAge = await isR18Plus(10); // jika sudah error, maka code yang dibawahnya tidak akan dijalankan. langsung ke catch
    const properAge = await isR18Plus(19);

    console.log(underAge, '<<< underage');
    console.log(properAge, '<<< properAge');
  } catch (error) {
    console.log(error, '<<< error')
  }
}

printR18Plus();