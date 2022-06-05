// Place any sitewide Javascript in here, it is referenced from the banner-head.html include file

function handleSelectStable(elm) {
  window.open('https://docs.google.com/spreadsheets/d/' + elm.value, '_blank');
}

function handleSelectContest(elm) {
    window.location = elm.value;
  }

function handleSelectStakesCalendar(elm)
  {
     window.open(elm.value, '_blank');
  }

function handleSelectNominations(elm)
    {
       window.open('https://www.equibase.com/profiles/Results.cfm?' + elm.value, '_blank');
    }


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
