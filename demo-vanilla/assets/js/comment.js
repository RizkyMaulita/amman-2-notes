const elFormComment = document.getElementById('form-comment')


elFormComment.addEventListener('submit', function (event) {
  event.preventDefault()
  // console.log('event listerner submit comment')
  const elInputComment = document.getElementById('input-comment')
  const commentValue = elInputComment.value

  // console.log(commentValue)
  if (commentValue) {
    // Ambil ID document
    let params = new URLSearchParams(document.location.search)
    let id = params.get('id')

    if (id) {
      // Ambil data comment sesuai id tersebut di local storage
      let getComments = localStorage.getItem(`comments_${id}`)
      let dataComments = []

      if (getComments) {
        dataComments = JSON.parse(getComments)
      } else {
        // jika belum ada satu pun, kita inisialisasi awal untuk data comment tersebut
        localStorage.setItem(`comments_${id}`, JSON.stringify(dataComments))
      }

      // check user login
      const userLogin = localStorage.getItem('userLogin')

      if (userLogin) {
        // jika user sudah login, maka dapat langsung dimasukkan commentnya
        let newComment = {
          context: commentValue,
          author: userLogin
        }
        dataComments.push(newComment)
        localStorage.setItem(`comments_${id}`, JSON.stringify(dataComments))
        elInputComment.value = ''

        getListComments()
      } else {
        // jika user belum login, maka harus login terlebih dahulu

        //--- Cara 1: Jika misalkan ada page login
        // localStorage.setItem('pathBeforeLogin', `./detailBlog.html?id=${id}`)
        // window.location.href = "./login.html"

        //--- Cara 2: Jika misalkan tidak ada page login dan register
        const elInputUsername = document.getElementById('input-username')
        const username = elInputUsername.value

        if (username) {
          // jika dia input username, maka dia melakukan dua hal sekaligus
          // yaitu dia login dan dia input comment

          // untuk dia login => set userLogin ke localstorage
          // jika ada register, maka harus melakukan pengecekan terlebih dahulu
          // asumsi tidak ada register, seperti tugas web storage
          localStorage.setItem('userLogin', username)

          // input comment
          let newComment = {
            context: commentValue,
            author: username
          }
          dataComments.push(newComment)
          localStorage.setItem(`comments_${id}`, JSON.stringify(dataComments))
          elInputComment.value = ''
          elInputUsername.value = ''
  
          getListComments()

          window.location.reload()
        }
      }
    }
  }
})


/**
 
Ide penyimpanan comment

  - simpan ke local storage
  - key : comments_id  => comments_1, comments_2, comments_3, etc
  - value => array of object
    => setiap object memiliki isi comment dan author nya

    [
      {
        context: '',
        author: ''
      }, 
      {
        context: '',
        author: ''
      }
    ]
 */

// Untuk menampilkan semua commentar dari local storage
function getListComments () {
   // Ambil ID document
   let params = new URLSearchParams(document.location.search)
   let id = params.get('id')

   if (id) {
    let getComments = localStorage.getItem(`comments_${id}`)
    let dataComments = []

    if (getComments) {
      dataComments = JSON.parse(getComments)
    } else {
      // jika belum ada satu pun, kita inisialisasi awal untuk data comment tersebut
      localStorage.setItem(`comments_${id}`, JSON.stringify(dataComments))
    }

    // console.log(dataComments)
    const elCommentList = document.getElementById('comment-list')

    for (let i = 0; i < dataComments.length; i++) {
      const comment = dataComments[i]
      let temp = `
        <li>
          <h6><b>${comment.author}</b></h6>
          <p>${comment.context}</p>
        </li>
      `
      elCommentList.insertAdjacentHTML('afterbegin', temp)
    }
   }
}

getListComments()