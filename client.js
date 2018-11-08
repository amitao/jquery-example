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

    // Click event Listeners
    // listening for a click - when btn is clicked display the console in handleClick() function
    // syntax - $().on('action', callback function)
    $('#submitBtn').on('click', handleClick);
    // Listen on the parent
    $('#output').on('click','.person', handleDelete);

    // DOM Traversal
    // clears the child of the parent 
    $('#test').parent(); // get parent
    $('#test').parent().children().first(); // get first children

    $('#test').next(); // get you next sibling
    $('#test').last(); // get you the last sibling
}


function handleClick(){
    console.log('submit was clicked');
    // collect whats in the inputs
    // val() is a getter/setter - can save in variable
    // const name =  $('#nameTxt').val(); // val() without parameter is getter
    const name = $('#nameTxt').val();
    const age = $('#ageTxt').val();
    const food = $('#foodTxt').val();
    console.log('here is name', name, age, food);

    $('#nameTxt').val(''); 
    $('#ageTxt').val(''); 
    $('#foodTxt').val(''); // set the val put an empty string
    // log what was input

    // append(string of HTML you want to append) - change the element and text
    // template literal - place holders
    $('#output').append(`<li class="person"> ${name} is ${age} and likes ${food}</li>`);
}

function handleDelete(){
    // $(this).remove();
    // $(this).css('color', 'blue');
    // $(this).addClass('highlight');
    // $(this).removeClass('hightlight');
    $(this).toggleClass('highlight');
}








