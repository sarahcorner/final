$(document).ready(function() {

	$(".articlecontainer").fadeIn(1000);

	$(".x").addClass("rotate");



	var mixer = mixitup('.container');

		$("#home").mouseenter(function() {
			$("#home").fadeTo("fast", 0.5);
		});

		$("#home").mouseleave(function() {
			$("#home").fadeTo("fast", 1);
		});

		$("#about").mouseenter(function() {
			$("#about").fadeTo("fast", 0.5)
		});

		$("#about").mouseleave(function() {
			$("#about").fadeTo("fast", 1);
		});

		$("#submit").mouseenter(function() {
			$("#submit").fadeTo("fast", 0.5)
		});

		$("#submit").mouseleave(function() {
			$("#submit").fadeTo("fast", 1);
		});

		$("#explore").mouseenter(function() {
			$("#explore").fadeTo("fast", 0.5)
		});

		$("#explore").mouseleave(function() {
			$("#explore").fadeTo("fast", 1);
		});


		$("#explore").click(function() {


			if ($('#categories').css('display') == 'none') {
            	$('#categories').slideDown(1000);
            	$(".explore").removeClass("spinback");
				$(".explore").addClass("spinboy");
        	} 
        	else {
				$('#categories').slideUp(1000);
				$(".explore").removeClass("spinboy");
				$(".explore").addClass("spinback");
   			}
   			
		});

		$("#contact").mouseenter(function() {
			$("#contact").fadeTo("fast", 0.5)
		});

		$("#contact").mouseleave(function() {
			$("#contact").fadeTo("fast", 1);
	});




	var mixer = ('img');

		$("#1").mouseenter(function() {
			$("#1").fadeTo("fast", 0.7);
		});

		$("#1").mouseleave(function() {
			$("#1").fadeTo("fast", 1);
		});

		$("#2").mouseenter(function() {
			$("#2").fadeTo("fast", 0.7);
		});

		$("#2").mouseleave(function() {
			$("#2").fadeTo("fast", 1);
		});

		$("#3").mouseenter(function() {
			$("#3").fadeTo("fast", 0.7);
		});

		$("#3").mouseleave(function() {
			$("#3").fadeTo("fast", 1);
		});

		$("#4").mouseenter(function() {
			$("#4").fadeTo("fast", 0.7);
		});

		$("#4").mouseleave(function() {
			$("#4").fadeTo("fast", 1);
		});

		$("#5").mouseenter(function() {
			$("#5").fadeTo("fast", 0.7);
		});

		$("#5").mouseleave(function() {
			$("#5").fadeTo("fast", 1);
		});

		$("#6").mouseenter(function() {
			$("#6").fadeTo("fast", 0.7);
		});

		$("#6").mouseleave(function() {
			$("#6").fadeTo("fast", 1);
		});

		$("#7").mouseenter(function() {
			$("#7").fadeTo("fast", 0.7);
		});

		$("#7").mouseleave(function() {
			$("#7").fadeTo("fast", 1);
		});

		$("#8").mouseenter(function() {
			$("#8").fadeTo("fast", 0.7);
		});

		$("#8").mouseleave(function() {
			$("#8").fadeTo("fast", 1);
		});

		$("#9").mouseenter(function() {
			$("#9").fadeTo("fast", 0.7);
		});

		$("#9").mouseleave(function() {
			$("#9").fadeTo("fast", 1);
		});

		$("#10").mouseenter(function() {
			$("#10").fadeTo("fast", 0.7);
		});

		$("#10").mouseleave(function() {
			$("#10").fadeTo("fast", 1);
		});

		$("#11").mouseenter(function() {
			$("#11").fadeTo("fast", 0.7);
		});

		$("#11").mouseleave(function() {
			$("#11").fadeTo("fast", 1);
	});











});