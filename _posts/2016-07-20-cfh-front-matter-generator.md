---
layout: post
title:  "CfH Front Matter Generator"
date:   2016-07-20
categories: tools
---


<form>
	<label for="title"> Title: </label>
	<input type="text" name="title" id="title">
	<label for="date"> Date </label>
	<input type="date" name="date" id="date">
	<input type="submit" value="Submit">
</form>

<div id="copy-wrapper" style="display:none">
<h3>Preview:</h3>

<p id="preview"></p>

<input type="text" id="copy-text" value="" />
<button data-copytarget="#website">copy</button>
</div>

<hr>

This tool is to generate front matter for Copywriting for Healthcare Jekyll posts. I also used ti to play around with using Javascript to use the clipboard feature, but that is currently unavalible. I'm hoping to implement that successfully in the future. 

The current functionality requires only the planned release date and the title, and spits out the required front matter for Jekyll as well as some helpful tools for me, such as a copy/paste solution to entering the post into Buffer. 

UPDATE 9/8:

The problems I've seen or had:

* copy/paste functionality broken, sometimes leading to broken files due to non-tech business partner missing small syntax that is crucial 
* More categories than strictly nessecary, for example the image file needs a direct reference, but there is nowhere on the page that needs the actual url or buffer information, so some of those could be placed under a single entry.

More to the point, I have a few reasons I'm ready to update:

*  the Jekyll folder has become unwieldy after a number of posts and requires further organization. However this requires me to change the front matter as well. 
*  I would like to create a cleaner OOP version of the tool so that the JQuery portion is clean. 

<script src="/scripts/cfh-front-matter.js"></script>
