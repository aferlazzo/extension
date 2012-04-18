//wrap up our code in an anonomous function
(function (){
	console.log('content 1 - visitInvite.js start');


	// send a request message to background task
	chrome.extension.sendRequest({greeting: "hello"}, function(response) {
	  console.log(response.farewell);
	});

	var iconColor = 'red',	// by default assume the extension background preocess is not loaded
		movieName = "",
		wWidth = $('#root').width(),   // returns width of browser viewport
		theHotelChooser = "";


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

	// booking overlay logic
	
	$('<div id="bookingOverlay"></div>').insertBefore('#nb20');
	
	$('body').on("click", '.closeIcon', function(e){
		e.preventDefault();
		$('#bookingOverlay').css({'display': 'none'});
	});
		
	// scroll to the top of page when the booking overlay is dispayed
	
	$("body").on("click", '.flightPage', function(e){
		e.preventDefault();
		$('#bookingOverlay').css('display', 'block');
		window.scrollTo(0, 0);
	});

	// inject code into the imdb page to display the slider of pictures and to book a flight
	
	function injectCode() {
		var articleParent = document.getElementById('maindetails_center_bottom'),
			myArticle = document.createElement('div'),
			// Get a reference to the first child and in sert our article here
			theFirstChild = articleParent.firstChild, mmm, i, j;
			
		articleParent.insertBefore(myArticle, theFirstChild);
		// Add attributes to the new article
		myArticle.setAttribute('id', 'saapArticle');
		myArticle.setAttribute('class', 'article');
				
		// get the movie name using the h1 text, without the year info or sub-title info
		mmm = $('h1.header').clone()
            .children()
            .remove()
            .end()
            .text();
		//console.log(mmm);
		movieName="";
		
		for (var i=0; i< mmm.length; i++){
			if(mmm.charAt(i) == "(") {
				i += 6;
			} else {
				if(mmm.charAt(i) != "\n"){
					movieName += mmm[i];
					//console.log('Now: '+movieName);
				}
			}
		}
		console.log('|'+movieName+'|');		

		/*
		console.log(movieName.split(""));
		
		for(var i=0;i<movieName.length; i++)
			console.log(movieName.charCodeAt(i));
		
		console.log('|'+movieName+'|');		
		*/
		
		// prepare string for booking overlay
		
		theHotelChooser = "<h1>Experience "+movieName+" on Location</h1>\
		<div class='closeIcon'></div>\
		<h3>Hotels are based on proximity to the filming location.</h3> \
		<div id='hotelMap'></div> \
		<div class='twoUp'><h2>hotel name</h2></div>\
		<div class='twoUp' id='hotelRate'><h2>$98/night</h2></div>\
		";
		
		$('#bookingOverlay').html(theHotelChooser);


		$('#saapArticle').html("<h2>Visit your favorite places in <span>"+movieName+"</span></h2> \
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
		
		/* // add the 'book a trip' invitation in the 'Details' (filming locations) section of page  */
		$('.txt-block').eq(11)
			.append("<br><a href id='detailBooking' class='flightPage'>Book a Trip to these Locations</a> &#187;");


		// options for slider controls
		
		$('#saapSlider').bxSlider({
			auto: true,
			autoControls: true,
			speed:1000,
			captions: true,
			captionsSelector: '.caption'
		});
	}
})();
