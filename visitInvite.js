//alert('visitInvite.js start');


// Content scripts are JavaScript files that run in the context of web pages.


var articleParent = document.getElementById('maindetails_center_bottom');
var myArticle = document.createElement("div");

// Get a reference to the first child and in sert our article here
var theFirstChild = articleParent.firstChild;
articleParent.insertBefore(myArticle, theFirstChild);
// Add attributes to the new article
myArticle.setAttribute('id', 'saapArticle');
myArticle.setAttribute('class', 'article');
myArticle.style.height='100px';
myArticle.innerHTML="<h2>Visit your favorite places in <span style='font-style:italic;'>Amelie</span></h2>";




