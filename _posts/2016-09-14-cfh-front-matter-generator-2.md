---
layout: post
title:  "CfH Front Matter Generator v2.0"
date:   2016-09-14
categories: tools
---


<form>
	<label for="title"> Title: </label>
	<input type="text" name="title" id="title">
	<label for="date"> Date </label>
	<input type="date" name="date" id="date">
	<input type="submit" value="Submit">
</form>

<p id="view"></p>

<hr>

This is the updated version of the [previous tool](http://fuzzy-sniffle.herokuapp.com/tools/2016/07/20/cfh-front-matter-generator.html). I had several goals in updating it, but not all were generated this version.

* Allow a more organized file structure: Instead of having Jubilant Fortnight's blogs all in one folder, I seperated them into their respective months. The images are also organized this way, through an extra directory dedicated to blogs. However I will need to fix the front matter on all previous files and organize the actual files before using this tool.
* Fix copy button functionality: I need this out fairly quickly since I'd like to have the whole system organized by the time the next post needs to be uploaded, and since we're going to be out of the office Friday through Sunday, the Monday blog needs to be uploaded tomarrow. This can be added later.
* Extra Information: Instead of having the extra information used outside the front matter contained in it anyways, I have it cut off after the front matter and have a description of what I am already doing for every post but with the appropriate changes, such as the title and buffer info, and terminal commands ready to plug in and have the appropriate files and commit messages. Some of these are terrible git management, but I don't need to worry too much about the master branch since it's just a blog going up and I've got a solid handle on that (especially with step by step as above) and no one else is working on the codebase. On any changes outside simply uploading a blog I do use branches, but for this it adds extra steps and time.
* OOP: I started working on this, but realized that I ended up passing the same information around in circles, and that by "simplifying" it, I was actually making it more difficult to understand without a clear benefit. 

So we'll see how this iteration goes, and hopefully come back to work on a copy button (or several).

<script src="/scripts/cfh-front-matter-v2.js"></script>     