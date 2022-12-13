let icon_close = document.querySelector('#icon_close')
let icon_menu = document.querySelector('#icon_menu')

icon_menu.addEventListener('click', clicar)
icon_close.addEventListener('click', clicar)

function clicar() {
    icon_menu.classList.toggle('show')
    icon_close.classList.toggle('show')
    document.querySelector('#mobile_menu').classList.toggle('show')
    document.querySelector('main section').classList.toggle('hide')
    document.querySelector('footer').classList.toggle('hide')
    // document.querySelector('header').style.position = 'static'
}
