$(document).ready(function() {
  bindListeners();
});

var bindListeners = function() {
  $("form").submit(displayFrontMatter);
};

var displayFrontMatter = function(event) {
  event.preventDefault();

  var title = $('form input[name=title]').val();
  var date = $('form input[name=date]').val();

  var data = formatFrontMatter(title, date);

  $("#view").html(data);
};

var formatFrontMatter = function(title, date) {

  var linkedDate = date.split("-").join("/");
  var linkedTitle = title.toLowerCase().split(" ").join("-");
  var dateYear = date.split("-")[0];
  var dateMonth = date.split("-")[1];
  
  var newline = "<br>";

  var fileName = date + "-" + linkedTitle;
  var tagline = title + " - Craig Warren";
  var imageFile = "img/blog/" + dateYear + "-" + dateMonth + "/" + fileName + ".png";
  var postFile = "_posts/" + dateYear + "-" + dateMonth + "/" + fileName + ".md";
  var link = "http://www.copywritingforhealthcare.com/blogs/" + linkedDate + "/" + linkedTitle + ".html";

  var frontMatterAndMeta = [
    "--- ",
    newline, "layout: post",
    newline, "title: ", title,
    newline, "date: ", date,
    newline, "categories: blogs",
    newline, "image: /", imageFile,
    newline, "---",
    newline, newline, "meta:",
    "{",
    newline, "URL: ", link,
    newline, "PABLO: ", tagline,
    newline, "BUFFER: ", tagline, " ", link,
    newline, "TERRIBLE GIT WORKFLOW DON'T LOOK AT ME:",
    newline, "1. Be in Jubilant Fortnight root with a clean git status (check for updates from github)",
    newline, "2. >> mkdir -p _posts/", dateYear, "-", dateMonth, " && touch ", postFile,
    newline, "3. Copy above front matter and post body into the file.",
    newline, "4. Generate Pablo image and upload it to Buffer using above text as appropriate. Download file",
    newline, "5. >> mkdir -p img/blog/", dateYear, "-", dateMonth, " && mv ../../../../Downloads/pablo.png ", imageFile,
    newline, "6. Make sure no one is watching to cringe at you and >> git add . && git commit -m \"Add ", date, " blog and image\" && git push origin master && git push heroku",
    newline, "7. Pop some champagne, another post uploaded with little to no effort at all.",
    newline,"}"
    ].join("");

  return frontMatterAndMeta;
};
