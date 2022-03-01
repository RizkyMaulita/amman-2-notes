const elMenuBar = document.querySelectorAll('#menu-bar li a')
// console.log(elMenuBar, '<<< menu bar')

function onClickNav (sectionId) {
  // console.log(sectionId)
  for(let i = 0; i < elMenuBar.length; i++) {
    const href = elMenuBar[i].getAttribute('href')
    if (href.includes(sectionId)) {
      // console.log(elMenuBar[i], '<<< menu bar yang aktif')
      elMenuBar[i].classList.add('active')
    } else {
      elMenuBar[i].classList.remove('active')
    }
  }
}

window.onscroll = () => {
  // console.log('window sedang di scroll')

  const elSection = document.querySelectorAll('section')

  for (let i = 0; i < elSection.length; i++) {
    const currentTop = window.scrollY;
    const sectionHeight = elSection[i].offsetHeight;
    const sectionTop = elSection[i].offsetTop - 150;

    // console.log(elSection[i], "<<< section");
    // console.log(sectionHeight, "<<< section height");
    // console.log(sectionTop, "<<< section top");
    // console.log(currentTop, "<<< current top");
    // console.log("\n");
    if (currentTop >= sectionTop && currentTop < (sectionTop + sectionHeight)) {
      // console.log(elSection[i])
      const elActiveSection = elSection[i]
      const sectionId = elActiveSection.getAttribute('id')
      // console.log(sectionId)
      onClickNav(sectionId)
    }
  }
}