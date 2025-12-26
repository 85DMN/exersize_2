let z = document.getElementsByClassName("dropdown__link")//все ссылки

let fg = document.getElementById('element')//название из писка

let f = document.getElementById('el1')
let s = document.getElementById('el2')
let t = document.getElementById('el3')
let fo = document.getElementById('el1')

console.log(fg.textContent)

let p = document.getElementById('paper')//сам список

fg.onclick = function() {p.className = 'dropdown__list dropdown__list_active'}

function selectz(l) {
    
    fg.textContent = l
    p.className = 'dropdown__list'

}
f.onclick = function () {
    selectz(f.textContent)
}

s.onclick = function () {
    selectz(s.textContent)
}

t.onclick = function () {
    selectz(t.textContent)
}

fo.onclick = function () {
    selectz(fo.textContent)
}