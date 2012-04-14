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