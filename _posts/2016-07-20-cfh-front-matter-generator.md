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

blah blah words and stuff

<script src="/scripts/cfh-front-matter.js"></script>
