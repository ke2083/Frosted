Frosted
=======

A jQuery plugin to add frosting to an element
---------------------------------------------

Ever wanted an iOS-like frosted glass transparency for modern browsers?  Ever wondered how you can apply it to work with stuff like
carousels? Wonder no more!

[Demo page](https://s3-eu-west-1.amazonaws.com/ke2083/Frosted/example.html)

```
#frosted{
  position: absolute;
  color: #eee;
  text-shadow: 2px 2px 2px #111;
  left: 20%;
  top: 20%;
}
		
#frostedContents{
  position: relative;
}
		
#frostedContentsInner{
  position: absolute;
  z-index: 2;
  padding: 2em;
}
```

```
<div class="frosting">
	<div class="overlay" id="frosted">
	  <div id="frostedContents">
		<div id="frostedContentsInner">
		  <h2>Heading</h2>
		  <p class="lead">Lead paragraph</p>
		</div>
	  </div>
	</div>
	<div>
	  <div class="col-12 text-center frostedBackground">
		<img src="myImage.jpg" alt="My lovely image" />
		<img src="myImage2.jpg" alt="My 2nd lovely image" />
		<img src="myImage3.jpg" alt="My 3rd lovely image" />
	  </div>
	</div>
</div>
```

Just a little HTML and CSS, then run:

```
$(document).ready(function(){
  $('#frosted').frost();
});
```

The images in the `frostedBackground` div will be used as a frosted glass background for the `frostedContents`, and will update when the background images change!

Compatibility
-------------

Webkit and Opera based browsers only- none of the rest (FireFox or IE) support CSS3 filters.