$(function() {
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
				$('#streamImage').src = "stm-metro-mono.svg";
			}
			event.preventDefault();
		});


		if (screen.width > 1000) {
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

		$('.draggable').draggable({
			start: function() {
			},
			stop: function() {
			}
		});
	}
});

//open stream from VPS
var myaudio = new Audio('http://rhizotron.net:8080/listen.mp3');
//determines if audio has been initialized
let init = false;
//streaming status
let muted = true;

//function for index/player play button
function play() {
	if (init === false) {
		myaudio.play();
		init = true;
		console.log("stream opened");
	}

	if (muted === true) {
		myaudio.muted = false;
		muted = false;
		//update to playing icon
		document.getElementById("streamImage").src = "speaker.svg";

	} else if (muted === false) {
		myaudio.muted = true;
		muted = true;
		//update to muted icon
		document.getElementById("streamImage").src = "mute.svg";
	}
}
