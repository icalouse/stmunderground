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
  $('#openAbout').click(function(event) {
    if ($('#aboutText').hasClass("grow")) {
      $('#aboutText').removeClass("grow").addClass("shrink");
    } else {
      $('#aboutText').removeClass('shrink').addClass('grow');
    }
  });
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
	$('.close').click(function(event) {
		$(this).parent().hide();
		event.preventDefault();
	});

	$('.draggable').draggable({
		start: function() {
		},
		stop: function() {
		}
	});
});
