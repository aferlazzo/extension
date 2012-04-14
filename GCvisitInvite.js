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
    <div class='left'> \
      <img src='pic_velvet1.jpg' width='600' height='200' /> \
    </div> \
    <div class='right'> \
      <div class='band'>The Velvet Underground</div> \
    </div> \
  </li> \
  <li> \
    <div class='left'> \
      <img src='pic_velvet2.jpg' width='600' height='200' /> \
    </div> \
    <div class='right'> \
      <div class='band'>The Velvet Underground</div> \
    </div> \
  </li> \
  <li> \
    <div class='left'> \
      <img src='pic_velvet3.jpg' width='600' height='200' /> \
    </div> \
    <div class='right'> \
      <div class='band'>The Velvet Underground</div> \
    </div> \
  </li> \
  <li> \
    <div class='left'> \
      <img src='pic_velvet4.jpg' width='600' height='200' /> \
    </div> \
    <div class='right'> \
      <div class='band'>The Velvet Underground</div> \
    </div> \
  </li> \
</ul>");


$('#saapSlider').bxSlider({
    auto: true,
    autoControls: true
  });