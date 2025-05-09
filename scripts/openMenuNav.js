const elemPoenting = document.querySelectorAll('[data-elem-poenting]')
const menuPoenting = document.querySelectorAll('[data-menu-poenting]')



elemPoenting.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.stopPropagation()
        
        console.log(e.currentTarget);
        
    })
})