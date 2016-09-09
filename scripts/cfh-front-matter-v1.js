$(document).ready(function () {
  bindListeners();
});

var bindListeners = function(){
  $("form").submit(displayFrontMatter);
};

var displayFrontMatter = function(event){
  event.preventDefault();
  var title = $('form input[name=title]').val();
  var date= $('form input[name=date]').val();
  var linkedTitle = title.toLowerCase().split(" ").join("-")
  var linkedDate = date.split("-").join("/");
  var link = "http://www.copywritingforhealthcare.com/blogs/" + linkedDate + "/" + linkedTitle + ".html";

  // below are for copyValue
  var wrapper = "---";
  var newline = "<br>";
  var layout = "layout: post";
  var titleFormat = "title: " + title;
  var dateFormat = "date: " + date;
  var category = "categories: blogs";
  var image = "image: \"/img/" + date + "-" + linkedTitle + ".png\"";
  var postUrl = "url: \"" + link + "\"";
  var bufferFeed = "buffer: \"" + title + " - Craig Warren " + link + "\"";

  var copyValue = [wrapper, newline, layout, newline, titleFormat, newline, dateFormat, newline, category, newline, image, newline, postUrl, newline, bufferFeed, newline, wrapper].join("");

  $("#copy-text").attr("value", copyValue);
  $("#preview").html(copyValue)
  $("#copy-wrapper").css("display","initial");
  // console.log(copyValue)
};

// below from https://www.sitepoint.com/javascript-copy-to-clipboard/

(function() {

  'use strict';

  // click events
  document.body.addEventListener('click', copy, true);

  // event handler
  function copy(e) {

    // find target element
    var
      t = e.target,
      c = t.dataset.copytarget,
      inp = (c ? document.querySelector(c) : null);

    // is element selectable?
    if (inp && inp.select) {

      // select text
      inp.select();

      try {
        // copy text
        document.execCommand('copy');
        inp.blur();
      }
      catch (err) {
        alert('please press Ctrl/Cmd+C to copy');
      }

    }

  }

})();