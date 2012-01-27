// JavaScript Document

$(document).ready(function () {
	//All our jQuery code goes inside the document ready event
	
	/*
		Everything we do in jQuery goes through the $() function:
		1. We select an element using a CSS selector
		2. We do something to that element
		We can write any CSS selector you can think up in the $() function
		
		$('#thing') --> get by ID
		$('.thing') --> get by class
		$('div p') --> get by tags: all the <p> elements inside <div> elements
		$('div p:first-child') --> the first <p> element inside a <div> element
		etc.
	*/
		
	$('a').on('click', function (ev) {
		/*
			'.preventDefault()' will stop HTMl elements from doing what they normally do
			- For links it will stop them from going to another page
			- For forms it will stop them from submitting
		*/
		ev.preventDefault();
		console.log('hello');
		/*
			'$(this)' gives us reference to the element this event listener is attached to
		*/		
		console.log($(this).attr('href'));
		
		/*
			With '.css()' we can get and set CSS properties
			The CSS property name (the 1st argument is identical to how you'd write it in CSS
		*/		
		$(this).css('background-color', '#f33');
		
		
	});
	
	
	$('form').on('submit', function (ev) {
			console.log('test');
			ev.preventDefault();
			
			var newLi = $(document.createElement('li'));
			
			if ($('#item').val() != '') {
				newLi.html($('#item').val());	
				$('ul').append(newLi);
				$('#item').val('');
				
			}
	});
	
	$('ul').on('click', 'li', function (ev) {
		//$(this).addClass('done');
		$(this).toggleClass('done');
	});
});