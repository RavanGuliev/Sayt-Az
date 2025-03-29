 const aylig = document.getElementById('aylig')
 const illik = document.getElementById('illik')








function handleAcc(arg) {
    if (arg == 'ay') {
        money1.innerHTML = '5 m'
        money2.innerHTML = '10m'
        money2.innerHTML = '20m'
    } else {
        manat1.innerHTML = '60/illik'
        manat2.innerHTML = '120/illik'
        manat3.innerHTML = '240/illik'
    }
}


function scrollOnePageDown() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }

  function opensb() {
    const sidebar = document.getElementById('sidebar');
    const alldropdowns = document.querySelectorAll('.switch');

    alldropdowns.forEach(dropdown => {
        dropdown.classList.remove('switch');
    });
    sidebar.classList.toggle('opensb');
    document.body.classList.toggle('no-scroll');
}



    
  

