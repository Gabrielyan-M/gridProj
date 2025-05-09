const burgerButton = document.querySelector('[data-js-button]')
const catalogButton = document.querySelector('[data-js-catalog-menu-burger]')


const burgerMenu = document.querySelector('[data-js-burger-menu]')
const catalogMenu = document.querySelector('[data-js-catalog-menu]')



window.addEventListener('resize', (e) => {
    if (e.target.innerWidth > 1200 && burgerMenu.classList.contains('active') ) {
        burgerMenu.classList.remove('active') 
        catalogMenu.classList.add('active') 

        catalogMenu.style.top = `${document.querySelector('header').clientHeight}px`
        catalogMenu.style.left = `${burgerButton.getBoundingClientRect().x}px`
    } else if (e.target.innerWidth < 1200 && catalogMenu.classList.contains('active') ) {
        catalogMenu.classList.remove('active')
        burgerMenu.classList.add('active')
    }
})

function catalogMenuFun () {

    catalogMenu.style.top = `${document.querySelector('header').clientHeight}px`
    catalogMenu.style.left = `${burgerButton.getBoundingClientRect().x}px`

    catalogMenu.classList.toggle('active')
    burgerButton.classList.toggle('active')    

}

function burgerMenuFun () {
    burgerButton.classList.toggle('active') 
    burgerMenu.classList.toggle('active') 

}


burgerButton.addEventListener('click', (e) => {
    const buttonValue = e.currentTarget.getAttribute('data-button-value')
    
    window.innerWidth > 1200 ? catalogMenuFun() : burgerMenuFun()
    console.log("button value: ", buttonValue);
    
})

