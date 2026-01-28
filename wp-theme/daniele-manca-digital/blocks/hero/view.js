/**
 * Hero Block Frontend Script
 * Handles any interactive behavior needed on the frontend
 */

( function () {
	const heroBlocks = document.querySelectorAll( '.wp-block-daniele-manca-hero' );

	heroBlocks.forEach( ( block ) => {
		const button = block.querySelector( 'a[href*="#"]' );

		if ( button ) {
			button.addEventListener( 'click', ( e ) => {
				const href = button.getAttribute( 'href' );

				// Handle hash links smoothly
				if ( href.startsWith( '#' ) ) {
					e.preventDefault();
					const target = document.querySelector( href );

					if ( target ) {
						target.scrollIntoView( { behavior: 'smooth' } );
						window.history.pushState( null, null, href );
					}
				}
			} );
		}
	} );
} )();
