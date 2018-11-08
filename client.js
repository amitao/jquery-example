// console.log('client is loaded');

// jquery
// expects a callback function
$(document).ready(handleReady);


function handleReady(){
    console.log('jquery loaded');
    // (setter) select h1 tag and change h1 to whatever text we set it
    $('h1').text('jQuery is awesome!');
    // getter 
    console.log($('h1').text()); 

    // event handler
    // listening for a click - when btn is clicked display the console in handleClick() function
    // syntax - $().on('action', callback function)
    $('#submitBtn').on('click', handleClick);
}


function handleClick(){
    console.log('submit was clicked');
    // collect whats in the inputs
    // val() is a getter/setter - can save in variable
    // const name =  $('#nameTxt').val(); // val() without parameter is getter
    const name = $('#nameTxt').val();
    console.log('here is name', name);
        // log what was input

}
