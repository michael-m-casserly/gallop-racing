// Place any sitewide Javascript in here, it is referenced from the banner-head.html include file

function handleSelectStable(elm)
    {
       //window.location = elm.value;
       window.open('https://docs.google.com/spreadsheets/d/' + elm.value, '_blank');
    }
  
function handleSelectNominations(elm)
    {
       //window.location = elm.value;
       window.open('https://www.equibase.com/profiles/Results.cfm?' + elm.value, '_blank');
    }
