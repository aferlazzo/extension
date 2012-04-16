/* background.js */
//console.log('1');
var iconColor="green", tabId = -1, port;


function changeIcon() {
	if (iconColor === "green") {
		chrome.browserAction.setIcon({path: "iconRed.png"});
		chrome.browserAction.setTitle({ title: "SAAP Prototype OFF"});
		iconColor="red";
	} else {
		chrome.browserAction.setIcon({path: "iconGreen.png"});
		chrome.browserAction.setTitle({ title: "SAAP Prototype ON"});
		iconColor="green";
	}
}




// Called when the user clicks on the browser action icon.
chrome.browserAction.onClicked.addListener(changeIcon); 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//console.log('2');
// find the tabs having imdb running
chrome.tabs.query({}, function(tabArray){
	//console.log('4');
	// of those tabs, find the one running Alelie
	for (var i = 0; i < tabArray.length; i++){
		//console.log('tab '+ i + ' is has title |' +tabArray[i].title + '|');
		if ((tabArray[i].title === 'Am�lie (2001) - IMDb')
		 || (tabArray[i].title === "Ocean's Eleven (2001) - IMDb")){
			tabId = i;
			//console.log('5');

			// open a connection to a content script on a particular tab at a particular port
			port = chrome.tabs.connect(tabId, {name: 'activeOrNot'});
			console.log('tabId: ' + tabId + ' port: ' + port.name);
			// This is for messaging between this background script and the content script, which interacts with the true web page
			// and the event is fired when a connection is made from the content script

			// tell content script the iconColor
			console.log('6');
			port.postMessage({colorIs: iconColor});
		}
	}
});


//console.log('3');