
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

  var linkedDate = date.split("-").join("/");
  var dateYear = date.split("-")[0];
  var dateMonth = date.split("-")[1];

  var fileName = date + "-" + title.toLowerCase().split(" ").join("-");
  var tagLine = post.title + " - Craig Warren"
  var imageFile = "img/blog/" + fileName ".png";
  var postFile = "_posts/" + post.dateYear + "-" + post.dateMonth + "/" + fileName + ".md"
  var link = "http://www.copywritingforhealthcare.com/blogs/" + linkedDate + "/" + linkedTitle + ".html";

  var frontMatterAndMeta = (
    "--- ",
    "\nlayout: post \ntitle: ", title, 
    "\ndate: ", date, 
    "\categories: blogs", 
    "\nimage: ", imageFile, 
    "\n---",
    "\n\nmeta:",
    "{\n\tURL: ", link, 
    "\n\tPABLO: ", tagline, 
    "\n\tBUFFER: ", tagline, " ", link, 
    "\n\tTERRIBLE GIT WORKFLOW DON'T LOOK AT ME:",
    " \n\t\t1. Be in Jubilant Fortnight root with a clean git status (check for updates from github)",
    "\n\t\t2. >> \"mkdir -p _posts/", dateYear, "-", dateMonth," && touch ", postFile,
    "\n\t\t3. Copy above front matter and post body into the file.",
    "\n\t\t4. Generate Pablo image and upload it to Buffer using above text as appropriate. Download file (next command on current mac setep only)",
    "\n\n\t5. >> \"mkdir -p img/blog/", dateYear, "-",dateMonth, " && mv ../../../../Downloads/pablo.png ", imageFile, "\"",
    "\n\t\t6. Make sure no one is watching to cringe at you and >> \"git add . && git commit -m \"Add ", date, " blog and image\" && git push origin master && git push heroku\"",
    "\n\t\t7. Pop some champagne, another post uploaded with little to no effort at all.",
    "\n}").join()
    
    return frontMatterAndMeta;
};
