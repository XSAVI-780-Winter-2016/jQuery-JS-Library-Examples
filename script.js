// This document presents some typical uses of jQuery

$(document).ready(function() {
	// simple fading and sliding without interaction
	//$("#right").fadeOut('slow');
	//$(".button").slideUp('slow');
	//$(".button").slideDown('fast');

	// first interaction
	/*
 	$('img').mouseenter(function() {
        $('#navbar').hide();
    });

 	$('img').mouseleave(function() {
        $('#navbar').show();
    });
	*/

    // jquery selector variables
    /*
    $img = $('img');
    $navbar = $('#navbar');

 	$img.click(function() {
        $navbar.toggle();
    });
	*/	

	// what is "this"?
	// if we tell imgs to hide on a click, then they'll all hide
    /*
    $img = $('img');
	$img.click(function() {
		$img.slideUp('slow');
    });
	*/

    // but we can use the "this" keyword in jQuery to only 
    // have that action work on the element we click
    // this is the use of the event handler
    /*
	$img = $('img');
	$img.click(function() {
		$(this).slideUp('slow');
    });
	*/

	// do your excercise here:







}); 

