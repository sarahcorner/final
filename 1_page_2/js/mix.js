$(document).ready(function() {

	//$(".x").animate({transform: "rotate(" + 30 + "deg)"}, 2000);
	$(".x").addClass("rotate");
	$(".society").addClass("rosociety");

	var one = ['<a href=""><img id="1" src="images/submission1.svg" width="240px"></a>', '<a href=""><img id="1" src="images/submission5-14.svg" width="240px"></a>', '<a href=""><img id="1" src="images/submission6-15.svg" width="240px"></a>'];

	var x = Math.floor(Math.random()*one.length);

		$("#one").html(one[x]);




	var two = ['<a href=""><img id="2" src="images/submission2.svg" width="243px"></a>', '<a href=""><img id="2" src="images/submission7-14.svg" width="240px"></a>', '<a href=""><img id="2" src="images/submission8-16.svg" width="240px"></a>'];

	var x = Math.floor(Math.random()*two.length);

		$("#two").html(two[x]);


	var three = ['<a href=""><img id="3" src="images/submission4-11.svg" width="245px"></a>', '<a href=""><img id="2" src="images/submission3.svg" width="240px"></a>'];

	var x = Math.floor(Math.random()*three.length);

		$("#three").html(three[x]);

	$(".title").mouseenter(function() {
		$(".title").css({ 'color' : '#9B6262' })
	});

	$(".title").mouseleave(function() {
		$(".title").css({ 'color' : '#000000' })
	});

	$(".title").click(function() {
		$(".x").removeClass("rotate");
		$(".x").addClass("reverse");
		$(".society").addClass("revsociety");
		$(".menucontent").addClass("revmenu");
		$(".recentsubmissions").addClass("rerecentsubmissions");
	});

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






	
});