jQuery('document').ready(function(){

	jQuery('.customerBtn').click(function(){

		jQuery('#fcModal').modal('show');
		jQuery('#fcModal').removeClass('signup');
	});
	
	jQuery('#buddyBtn').click(function(){

		jQuery('#buddyModal').modal('show');
		jQuery('#buddyModal').removeClass('signup');
	});
	
	jQuery("#loadSignup").click(function(){
		
		jQuery("#fcModal").addClass("signup");
	});
	
	jQuery("#loadSignin").click(function(){
		
		jQuery("#fcModal").removeClass("signup");
	});
	
	jQuery("#buddyloadSignup").click(function(){
		
		jQuery("#buddyModal").addClass("signup");
	});
	
	jQuery("#buddyloadSignin").click(function(){
		
		jQuery("#buddyModal").removeClass("signup");
	});
	
	jQuery("#buddyModal .signinBtn").click(function(){
		window.location = "buddyafterlogin.html";
	});
	
	jQuery("#helpCustomerBtn").click(function(){
		window.location = "customerlist.html";
	});
});