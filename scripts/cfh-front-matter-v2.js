
function Post(title,date){
  this.title = title;
  this.date = date;





  // this.tagLine = this.title + " - Craig Warren";
  // this.buffer = this.tagLine + " " + link;
};

// !!! JQuery below !!!

$(document).ready(function() {
  bindListeners();
});

var bindListeners = function(){
  $("form").submit(displayFrontMatter);
};

var displayFrontMatter = function(event){
  event.preventDefault();
  var title = $('form input[name=title]').val();
  var date= $('form input[name=date]').val();

  var dateYear = date.split(-)[0];
  var dateMonth = date.split(-)[1];

  var fileName = date + "-" + title.toLowerCase().split(" ").join("-");
  var tagLine = post.title + " - Craig Warren"
  var imageFile = "/img/" + fileName ".png";
  var postFile = "_posts/" + post.dateYear + "-" + post.dateMonth + "/" + fileName + ".md"
  var link = "http://www.copywritingforhealthcare.com/blogs/" + linkedDate + "/" + linkedTitle + ".html";

  var frontMatter = "--- \nlayout: post \ntitle: " + title + "\ndate: " + date + "\categories: blogs \nimage: " + imageFile + "\nmeta: {URL: " + link + ", PABLO: " + tagline + ", BUFFER: " + tagline + " " + link + "}"
};
