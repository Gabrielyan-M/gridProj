const catalogButtons = document.querySelectorAll('[data-js-catalog-section-button]')
const catalogSections = document.querySelectorAll('[data-js-catalog-section]')

function openCatalog (e) {



    // style button
    catalogButtons.forEach(btn => {
        btn.classList.remove('active')
    })
    e.currentTarget.classList.add('active')

    // search section
    let sectionValue = e.currentTarget.attributes['data-button-section-value'].value

    catalogSections.forEach(section => {
        section.classList.remove('active')
        section.attributes['data-section-value'].value === sectionValue ? section.classList.add('active') : null
        return
    })


}

catalogButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {

        openCatalog (e)
    
    })
})

