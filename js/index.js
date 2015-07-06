$(document).ready(function() {
	$( 'button .autofocus' ).focus();
	$( ".about_launcher" ).click(function() {
		$( "#about_text" ).toggle( "slow", function() {
	    // Animation complete.
		});
		$( ".exp_col_icon" ).toggle(); // Icon flipping.
	});
});