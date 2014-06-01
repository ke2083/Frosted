	    (function($){
		
		  var container, backgrounds, frosted, checker, currentBackground;
		
		  function applyFrosting(background){
		    // Do we have a container to hold the frosted image?
		    var frostHolder = frosted.find('#frostHolder');
			if (frostHolder.length === 0) {
			  frostHolder = $('<div />').attr('id', 'frostHolder');
			  frosted.find('#frostedContents').prepend(frostHolder);
			}
				  
			// How big should the container be?	  
		    var height = frosted.find('#frostedContentsInner').outerHeight();
			var width = frosted.find('#frostedContentsInner').outerWidth();
			
			// Do we have an image to apply?
			var src = background.attr('src');
			if (!src) return;
			
		    // Compute the offset
			var left = Math.floor(frosted.offset().left);
			var top = Math.floor(frosted.offset().top);
			
			// Apply the frosted background
		    frostHolder.css({
			  'background': 'url(\'' + src + '\') -' + left +'px -' + top + 'px no-repeat',
			  'position': 'absolute',
			  'height': height + 'px',
			  'width': width + 'px',
			  'filter': 'blur(5px)',
			  '-webkit-filter': 'blur(5px)',
			  '-moz-filter': 'blur(5px)',
	          '-o-filter': 'blur(5px)',
	          '-ms-filter': 'blur(5px)',
			  'z-index': 1
			});
			
			currentBackground = background.clone();
		  };
		
		  function checkFrosting(){
		    if (!container || !backgrounds || backgrounds.length === 0 || !frosted){
			  clearInterval(checker);
			  return;
			}
			
			// Do we have a proposed background?
			var proposedBackground = $(backgrounds).find(':visible:first');
			if (!proposedBackground) return;
			
			// Is the proposed background different to the one currently applied in terms of source or position?
			if (!currentBackground || 
				currentBackground.attr('src') !== proposedBackground.attr('src') ||
				currentBackground.offset().left !== proposedBackground.offset().left || 
				currentBackground.offset().top !== proposedBackground.offset().top ||
				currentBackground.css('opacity') !== proposedBackground.css('opacity')) {
			  applyFrosting(proposedBackground);
			}
		  };
		
		  $.fn.frost = function(){
            frosted = this;
			container = $(frosted).parents('.frosting');
			backgrounds = container.find('.frostedBackground');
			
			checker = setInterval(checkFrosting, 5);
			
		  };
		
		})(jQuery)
