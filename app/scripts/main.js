  $(".ani1").on("click", function(){
    $(this).hide();
  });


  $(".Box1").on("click", function(){
    $(this).blind();
  });

			  $(".Box2").slideup( function(){
			    $(this).css("width", "50px");
			    }, function() {
				  	$(this).css("width", "30px");
				});
			    

	$(".Box3").on("click", function() {
	 $(this).fadein(slow)("colorshift");
	}); 
 
				$("Box4").keyup( function(){
				  $("input").css("background-color","purpleyellow");
				});


	$(".Box5").hover( function(){
	  	$(this).css("color", "brown");
	  }, function() {
	  	$(this).css("color", "orange");
	});

				$(".Box6").on("click", function(){
				  $(this).css("transform", "rotate(190deg)");
				});


	$(".Box7").on("click", function(){
	  $(this).css("transform", "rotate(30deg)");
	});


	$( ".Box8" ).one( "click", function() {
	  alert( "Are you about the code life? Click here." );
	});


				$(".hash").on("click", function(){
				  $(this).addClass("gradient");
				});


		$(".Box8").on("click", function(){
	  $(this).addClass("animation2");
	});

$( ".Box9" ).one( "click", function() {
	  alert( "Are you about the code life? Click here." );
	});

$( ".Box10" ).one( "click", function() {
	  alert( "Are you about the code life? Click here." );
	});

$(".Box11").hover( function(){
	  	$(this).css("color", "brown");
	  }, function() {
	  	$(this).css("color", "orange");
	});

$( ".Box12" ).one( "click", function() {
	  alert( "Are you about the code life? Click here." );
	});

$(".box5").hover( function(){
	  	$(this).css("color", "grey");
	  }, function() {
	  	$(this).css("color", "purple");
	});

$( ".Box14" ).one( "click", function() {
	  alert( "Redundancy is Key." );
	});

$( ".Box15" ).one( "click", function() {
	  alert( "Are you about the code life? Click here." );
	});
