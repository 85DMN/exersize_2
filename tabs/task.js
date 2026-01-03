let menu = document.getElementsByClassName('tab')
let content = document.getElementsByClassName('tab__content')

function correctz(name) {
    for (let i=0; i<menu.length; i++){
        if (menu[i].textContent == name) {
            menu[i].className = "tab tab_active",
            content[i].className = "tab__content  tab__content_active" 
        } else {
            menu[i].className = "tab",
            content[i].className = "tab__content" 
        }
    }
}

document.querySelectorAll('.tab').forEach(li => li.addEventListener('click', (ev) => {
    ev.preventDefault(),
    correctz(ev.currentTarget.textContent)    
}))