const themeIcon= document.getElementById("theme")
themeIcon.onclick = () => {
    document.body.classList.toggle("dark-theme") //ekleme çıkarma
    if(document.body.classList.contains("dark-theme")){
        themeIcon.classList="fa-solid fa-sun fa-2x"
    }
    else{
        themeIcon.classList="fa-solid fa-moon fa-2x"
    }
localStorage.setItem('theme', document.body.classList)
  localStorage.setItem('icon', theme.classList)
}

if (localStorage.getItem('theme')) {
  document.body.classList.add(localStorage.getItem('theme'))
  theme.classList = localStorage.getItem('icon')
}