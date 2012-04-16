console.log('content 1 - visitInvite.js start');

// Content scripts are JavaScript files that run in the context of web pages.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// this is for messaging between the content script and the rest of the extension

// Here's what it looks like to respond to incoming connections from a background script
 
// This connect method attempts to connect to other listeners, primarily used by 
// content scripts connection to other parts of the extension, and assigns a port to 
// be used for this particular communication
/*
// In order to handle incoming connections set up a onConnect event listener
console.log('setting up chrome.extension.onConnect.addListener callback function');

chrome.extension.onConnect.addListener(function(port) {
	console.assert(port.name == "activeOrNot");
	// once a connect request is received, define a listener to process the messages
	port.onMessage.addListener(function(msg) {
		if (msg.colorIs == 'green'){
			ExtenstionActivate= true;
		} else {
			ExtenstionActivate= false;
		}
		console.log('in content script. msg.colorIs: '+msg.colorIs); 
	});
});
*/

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
});  
//----------------------------------

function injectCode() {
	var articleParent = document.getElementById('maindetails_center_bottom');
	var myArticle = document.createElement('div');

	// Get a reference to the first child and in sert our article here
	var theFirstChild = articleParent.firstChild;
	articleParent.insertBefore(myArticle, theFirstChild);
	// Add attributes to the new article
	myArticle.setAttribute('id', 'saapArticle');
	myArticle.setAttribute('class', 'article');

	$('#saapArticle').html("<h2>Visit your favorite places in <span>Ocean's Eleven</span></h2> \
	<ul id='saapSlider'> \
	  <li> \
		<div id='pic1'></div> \
	  </li> \
	  <li> \
		<div id='pic2'></div> \
	  </li> \
	  <li> \
		<div id='pic3'></div> \
	  </li> \
	  <li> \
		 <div id='pic4'></div> \
	  </li> \
	</ul>");


	$('#saapSlider').bxSlider({
		auto: true,
		autoControls: true
	  });
}