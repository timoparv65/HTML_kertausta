//Here we wait that browser has built the DOM ready
//$(document) = jquery konstruktori
$(document).ready(function(){
    
    console.log('All is now ready. Start to modify DOM');
    $('#day').datepicker(); // hae elementti, jonka id=day ja muuta se datepickeriksi
})