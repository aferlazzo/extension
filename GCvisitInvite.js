//wrap up our code in an anonomous function
(function (){
	console.log('content 1 - visitInvite.js start');


	// send a request message to background task
	chrome.extension.sendRequest({greeting: "hello"}, function(response) {
	  console.log(response.farewell);
	});

	var iconColor = 'red';	// by default assume the extension background preocess is not loaded
	// send a request message to background task for iconColor
	chrome.extension.sendRequest({greeting: "iconColor"}, function(response) {
		iconColor = response.farewell;
		console.log('icon color is ' + iconColor);
		if (iconColor === 'green'){
			injectCode();
		}
	});
	// listen for requests
	chrome.extension.onRequest.addListener(
	  function(request, sender, sendResponse) {
		console.log(sender.tab ?
					"from a content script:" + sender.tab.url :
					"from the extension");
		if (request.greeting == "hello")
			sendResponse({farewell: "goodbye"});
		if (request.greeting == "iconColor"){
			iconColor = response.farewell;
			sendResponse({farewell: "ok"});
		}
	});  




	var wWidth = $('#root').width();   // returns width of browser viewport
	$('<div id="bookingOverlay"></div>').insertBefore('#nb20');
	
	$('.closeIcon').click(function(){
		$('#bookingOverlay').css({'display': 'none'});
	});
	
	var theHotelChooser = "<h1>Experience Ocean's Eleven on Location</h1>\
	<div class='closeIcon'></div>\
	<h3>Hotels are based on proximity to the filming location.</h3> \
	<div id='hotelMap'></div> \
	<div class='twoUp'><h2>hotel name</h2></div>\
	<div class='twoUp' id='hotelRate'><h2>$98/night</h2></div>\
	";
	
	$('#bookingOverlay').html(theHotelChooser);
	$("body").on("click", '.flightPage', function(e){
		e.preventDefault();
		$('#bookingOverlay').css('display', 'block');
		window.scrollTo(0, 0);
	});





	function injectCode() {
		var articleParent = document.getElementById('maindetails_center_bottom'),
			myArticle = document.createElement('div'),
			// Get a reference to the first child and in sert our article here
			theFirstChild = articleParent.firstChild;
			
		articleParent.insertBefore(myArticle, theFirstChild);
		// Add attributes to the new article
		myArticle.setAttribute('id', 'saapArticle');
		myArticle.setAttribute('class', 'article');
		
		
			

		$('#saapArticle').html("<h2>Visit your favorite places in <span>Ocean's Eleven</span></h2> \
		<ul id='saapSlider'> \
		  <li> \
			<div id='pic1'></div> \
			<div class='caption'>\
		  </li> \
		  <li> \
			<div id='pic2'></div> \
			<div class='caption'>\
		  </li> \
		  <li> \
			<div id='pic3'></div> \
			<div class='caption'>\
		  </li> \
		  <li> \
			<div id='pic4'></div> \
			<div class='caption'>\
		  </li> \
		</ul> \
		<div id='GChotel'>Hotel Nico</div> \
		<div id='GCbookNow'> \
			<a href id='GCbookButton' class='flightPage'>Book Now</a> &#187; \
		</div>");
		
		$('.txt-block').eq(11)
			.append("<br><a href id='detailBooking' class='flightPage'>Book a Trip to these Locations</a> &#187;");


		$('#saapSlider').bxSlider({
			auto: true,
			autoControls: true,
			speed:1000,
			captions: true,
			captionsSelector: '.caption'
		});
	}
})();