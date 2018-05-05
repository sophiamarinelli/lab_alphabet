// console.log("1")

// $( "#body" ).click(function() {
//   $("#body").css("background-color", "red")
// });

 $( function() {
    $( ".letter" ).draggable();
  } );

$(".letter").mousedown(function(){
    //assign all divs `z-index` = 90 including clicked one
    $(".letter").css("z-index","90");
	//assign `z-index` = 100 to clicked one
    $(this).css("z-index","100");
});



// function myFunction() {
//     var solid = document.getElementsByClassName('solid');
//     console.log(solid)
//     if (solid.style.backgroundColor === 'blue') {
//         solid.style.backgroundColor = 'red';
//     } else {
//         solid.style.backgroundColor = 'green';
//     }
// };


// document.addEventListener("click", myFunction);

document.getElementById("body").addEventListener("click", function(){
    $( ".letter" ).each(function( index ) {
        var degree = Math.floor(Math.random()*300);
        $(this).css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
    });
});


document.getElementById("body").addEventListener("click", function(){
    $( ".letter" ).each(function( index ) {
        var degree = Math.floor(Math.random()*100);
        var degreeTwo = Math.floor(Math.random()*100);
        $(this).css({top: degree + '%', left: degreeTwo + '%', position:'absolute'});
    });
});

document.getElementById("body").addEventListener("click", function(){
    $( ".restack" ).show()
    });

$(".letter").mouseenter(function(){
    $(".info").show()
});

$(".letter").mouseleave(function(){
    $(".info").hide()
});

function myFunction() {
    location.reload();
}