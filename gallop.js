// Place any sitewide Javascript in here, it is referenced from the banner-head.html include file

function handleSelectStable(elm) {
  window.open('https://docs.google.com/spreadsheets/d/' + elm.value, '_blank');
  elm.value = ''; // Reset drop-down menu after selection
}

function handleSelectContest(elm) {
    window.location = elm.value;
    elm.value = ''; // Reset drop-down menu after selection
  }

function handleSelectStakesCalendar(elm)
  {
     window.open(elm.value, '_blank');
     elm.value = ''; // Reset drop-down menu after selection
  }

function handleSelectNominations(elm)
    {
       window.open('https://www.equibase.com/profiles/Results.cfm?' + elm.value, '_blank');
       elm.value = ''; // Reset drop-down menu after selection
      }

function handleSelectPDF(elm)
      {
         window.open(elm.value, '_blank');
         elm.value = ''; // Reset drop-down menu after selection
        }

// BEGIN Expand/Collapse All Accordion Items

document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.accordion-group').forEach(group => {

        const button = group.querySelector('.toggle-all');

        function updateButtonText() {

            const panels = group.querySelectorAll('.accordion-collapse');

            const allOpen =
                panels.length > 0 &&
                [...panels].every(panel =>
                    panel.classList.contains('show')
                );

            button.textContent =
                allOpen ? 'Collapse All' : 'Expand All';
        }

        button.addEventListener('click', function () {

            const panels =
                group.querySelectorAll('.accordion-collapse');

            const allOpen =
                [...panels].every(panel =>
                    panel.classList.contains('show')
                );

            panels.forEach(panel => {

                const collapse =
                    bootstrap.Collapse.getOrCreateInstance(panel, {
                        toggle: false
                    });

                if (allOpen) {
                    collapse.hide();
                } else {
                    collapse.show();
                }
            });

            setTimeout(updateButtonText, 100);
        });

        group.querySelectorAll('.accordion-collapse')
            .forEach(panel => {

                panel.addEventListener(
                    'shown.bs.collapse',
                    updateButtonText
                );

                panel.addEventListener(
                    'hidden.bs.collapse',
                    updateButtonText
                );
            });

        updateButtonText();

    });

});

// END Expand/Collapse All Accordion Items
        

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
