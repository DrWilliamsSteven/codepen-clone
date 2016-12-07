$(document).ready(function() {



$('.panel').height($(window).height() -  $('#toolbar').height() - $('.menubar').height() - 65); 	//
$('textarea').height($('.panel').height() -  $('.menubar').height() -10); 	

$('.panel').width($(window).width() / 4 - 5 );

$('iframe').contents().find('html').html($('#htmlinputbox').val()  );

$('textarea').on('change keyup paste', function() {
	$('iframe').contents().find('html').html($('#htmlinputbox').val()  );
});

});