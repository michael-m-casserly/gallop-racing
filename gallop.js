// Place any sitewide Javascript in here, it is referenced from the banner-head.html include file

//This code is used to ensure that the accordion scrolls to the top of the collapsed content automatically; This had been an issue in mobile devices.

/* USING JQUERY FOR NOW, MAY REVISIT TO SEE IF THIS CAN BE DONE WITH JUST JAVASCRIPT...
const accordionItems = document.querySelectorAll('.accordion-collapse')
const acc = document.getElementById('accordionExample')

accordionItems.forEach((el)=>{
    el.addEventListener('shown.bs.collapse',(e)=>{
        var scrollOffset = acc.scrollTop + el.parentNode.offsetTop
        acc.scroll({
            top: scrollOffset,
            left: 0,
            behavior: 'smooth'
        })
    })
})
*/
