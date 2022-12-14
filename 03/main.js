
const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

const handler1 = (e) =>{
    e.stopPropagation()
    alert('Click')
}
const handler2 = (e) =>{
    e.stopPropagation()
    alert('Yo!!!')
}
const handler3 = (e) =>{
    e.stopPropagation()
    console.dir(e)
}
const handler4 = (e) =>{
    if(e.target.tagName === 'BUTTON')
   alert(e.currentTarget.id)
}
// sm.onclick = handler1
// sm.onclick = handler2
// sm.onclick = ()=> {
//     handler1()
//     handler2()
// }
// sm.onclick = handler2 // удаляем первый обработчик

// sm.addEventListener('click', handler1)
// sm.addEventListener('click', handler2)
// sm.removeEventListener('click', handler1) // удаляем первый обработчик

//onClick -> React

// e, ev, event => {} (object)

sm.addEventListener('click', handler4)
md.addEventListener('click', handler4)
bg.addEventListener('click', handler4)


const a = document.getElementById('a')
a.addEventListener('click', (e)=> {
    e.preventDefault()
    alert('block')
})