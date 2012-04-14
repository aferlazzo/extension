/*
 * Chrome extension Sabre SAAP
 */
//chrome.tabs.insertCSS(integer tabId, object details, function callback)
// defaults to current tab

// set background of current tab to red
//chrome.tabs.insertCSS({code:"document.body.style.background='red !important'"});

//chrome.tabs.insertCSS({code:"document.body.style.background='red !important'"});

//alert('creating a new tab');
chrome.tabs.create({
					index:1,		//make this the second tab
					url: 'http://www.imdb.com/title/tt0211915/' 
					});

// inject javascript found in the file into the imdb.com page
chrome.tabs.executeScript(null, {file: 'visitInvite.js'});

// Fired when a tab is created. Lists the changes to the state of the tab that was updated.
/*
chrome.tabs.onCreated.addListener(function(null, url('http://www.imdb.com') {
		display.log('tab created');
		});
*/