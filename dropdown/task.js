let nameFin = document.getElementById('element')
let list = document.getElementById('paper')

nameFin.addEventListener('click', () => { list.className = 'dropdown__list dropdown__list_active' })

document.querySelectorAll('.dropdown__item').forEach(element => element.addEventListener('click', (ev) => {
    ev.preventDefault(),
    nameFin.textContent = ev.currentTarget.textContent,
    console.log(ev.currentTarget)
    list.className = 'dropdown__list'
}))