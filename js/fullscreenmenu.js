(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
		overlay = document.querySelector( 'div.overlay' ),
		closeBttn1 = overlay.querySelector( 'button.overlay-close');
		closeBttn2 = overlay.querySelector( 'li.workLink a' );
		closeBttn3 = overlay.querySelector( 'li.expLink a' );
		closeBttn4 = overlay.querySelector( 'li.skillsLink a' );
		closeBttn5 = overlay.querySelector( 'li.aboutLink a' );
		closeBttn6 = overlay.querySelector( 'li.contactLink a' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				overlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
		}
	}

	triggerBttn.addEventListener( 'click', toggleOverlay );
	closeBttn1.addEventListener( 'click', toggleOverlay );
	closeBttn2.addEventListener( 'click', toggleOverlay );
	closeBttn3.addEventListener( 'click', toggleOverlay );
	closeBttn4.addEventListener( 'click', toggleOverlay );
	closeBttn5.addEventListener( 'click', toggleOverlay );
	closeBttn6.addEventListener( 'click', toggleOverlay );
})();