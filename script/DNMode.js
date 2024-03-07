let night = document.getElementById('moon')
let day = document.getElementById('sun')
let mode= document.getElementById('modes')
day.style.display = "none"

if (localStorage.getItem('theme') == null ){
    localStorage.setItem('theme', 'style/darkstyle.css')
    mode.setAttribute('href', localStorage.getItem('theme'))
} else {
    mode.setAttribute('href', localStorage.getItem('theme'))
}

if(localStorage.getItem('theme') == 'style/darkstyle.css'){
    night.style.display = 'block'
    day.style.display = 'none'
} else {
    night.style.display = 'none'
    day.style.display = 'block'
}


night.addEventListener('click', ()=>{
    day.style.display="block"
    night.style.display="none"
    if (mode.getAttribute('href') == 'style/darkstyle.css'){
        mode.setAttribute('href', "style/lightstyle.css")
        localStorage.setItem('theme', 'style/lightstyle.css')
    }
})

day.addEventListener('click', ()=>{
    night.style.display = "block"
    day.style.display = "none"
    if (mode.getAttribute('href') == 'style/lightstyle.css'){
        mode.setAttribute('href', "style/darkstyle.css")
        localStorage.setItem('theme', 'style/darkstyle.css')
    }
})