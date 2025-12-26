let t1 = document.querySelectorAll('[class^="tab"]')
let k1 = document.querySelectorAll('[class^="tab__content"]')

analiz = (i) => {for (let m = 1; m<k1.length; m++) {
    if (m == i-5) {
        k1[m].classList.value = "tab__content tab__content_active";
        t1[m+50].classList.value = "tab tab_active"
    } else {
        t1[m+5].classList.value = "tab"
        k1[m].classList.value = "tab__content"

    }
}}

for (let i = 6; i<t1.length; i++) {t1[i].onclick = () => { analiz(i) }}