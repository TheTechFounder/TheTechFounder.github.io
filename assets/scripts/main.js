
/***********************************************************************************
  
Animations
  
************************************************************************************/

jQuery(document).ready(function($) {
	$(function() {
		$('#header').delay(100).fadeIn(1000);
		$('#intro').delay(300).fadeIn(500);
	});
});

/***********************************************************************************
  
Mailchimp
  
************************************************************************************/

var emailfilter=/^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;

$(function() {
    if ($('form').length > 0) {
        $('form').submit(function(e) {
            var $this = $(this);
            var isValid = true;
            $('.error').removeClass('error');

            // Email Id Validation
            if (emailfilter.test($("#email").val()) == false) {
                $("#email").addClass('error');
                isValid = false;
            }

            if (isValid) {
                // If email is is valid, submit form through ajax
				$.ajax({
   					// url: "//formspree.io/thetechfounder@gmail.com", 
  						//  method: "POST",
  						//	  data: {message: "hello!"},
  						//		  dataType: "json"
});
                
            }

            return false;
        });
    }
});