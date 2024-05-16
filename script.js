$(function() {
	  // Toggle linkBar visibility when hamburger icon is clicked
	  $('#hamburger-icon').click(function(event) {
		$('#linkBar').toggleClass('show-linkBar');
		console.log($('#linkBar').css("top"));
		if ($('#linkBar').css("top").charAt(0) == "-") {
			$('#linkBar').css("top","0");
		} else {
			$('#linkBar').css("top","-100%");
		}
		event.preventDefault();
	  });
		$('#openSuscribe').click(function(event) {
		    $('#subscribeContainer').show();
			event.preventDefault();
		});
	  $('#openMixcloud').click(function(event) {
	      $('#mixcloudContainer').show();
	    event.preventDefault();
	  });
	  $('#openPoster').click(function(event) {
	      $('#posterContainer').show();
	    event.preventDefault();
	  });
	  $('#openCV').click(function(event) {
		$('#cvContainer').show();
	  event.preventDefault();
	});
	  $('#openRental').click(function(event) {
		$('#rentalContainer').show();
	  event.preventDefault();
	});
		$('#openStream').click(function(event) {
				$('#streamContainer').show();
			event.preventDefault();
		});
	  $('#openAbout').click(function(event) {
	    if ($('#aboutText').hasClass("grow")) {
	      $('#aboutText').removeClass("grow").addClass("shrink");
	    } else {
	      $('#aboutText').removeClass('shrink').addClass('grow');
	    }
	  });
		$('.close').click(function(event) {
			console.log($(this).parent().attr('id'));
			$(this).parent().hide();
			if ($(this).parent().attr('id') == 'streamContainer') {
				myaudio.pause();
				init = false;
				console.log('should switch image back');
				document.getElementById("streamImage").src = "stm-metro-mono.svg";
			}
			event.preventDefault();
		});
		$('#agreeButton').click(function(event) {
			$('#defaultWindow').hide();
			$('#defaultMapWindow').show();
		});
		$('.ticketButton').click(function(event) {
			window.location.href = $(this).attr('href');
		});
		$('.subscribeButton').click(function(event) {
		window.location.href = $(this).attr('href');
		});
		$('#switchEventButton1').click(function(event) {
			if (screen.width < 800) {
				$('#eventContainer1').hide();
			}
			$('#eventContainer2').show();
		});
	$('#switchEventButton2').click(function(event) {
		if (screen.width < 800) {
			$('#eventContainer2').hide();
		}
		$('#eventContainer1').show();
	});
	$('#openOrganizerCVButton').click(function(event) {
		window.open('https://drive.google.com/file/d/1sC99fm3ASISTugA8N2TSf4nrJAaqfHuT/view?usp=sharing', '_blank');
	});
	$('#openDJCVButton').click(function(event) {
		window.open('https://drive.google.com/file/d/1304IuqLOarTwaer-DM5yeJ4l5IK0T2E0/view?usp=sharing', '_blank');
	});
	$('#showContactButton').click(function(event) {
		$('#contactEmail').first().text( "nic@stmunderground.com" );
	});
	$('#openInventoryButton').click(function(event) {
		window.open('https://drive.google.com/file/d/17uHpoXVOSLTueAbobaGLafJ0jc1Zk7rj/view?usp=sharing', '_blank');
	});
		if (screen.width > 800) {
		$('.posterRow').click(function(event) {
			var imageSrc = $(this).find('img').attr('src').replace(/-thumb/, '');
			console.log(imageSrc);
			$('#expandPosterImage').attr('src', imageSrc);
			$('#expandPosterImage').attr('width', '30%');
			$('#expandPosterWindow').show();
		});
		$('#expandPosterWindow').click(function(event) {
			$('#expandPosterWindow').hide();
		});
		$('#pngMap').hide();
		$('#mapText').hide();
		$('#googleMap').show();
		$('.draggable').draggable({
			start: function() {
			},
			stop: function() {
			}
		});
	}
});
