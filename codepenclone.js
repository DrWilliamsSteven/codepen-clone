$(document).ready(function() {
			
			function updateOutput() {
				$('iframe').contents().find('html').html(
					'<html><head><style type="text/css">' + $('#cssinputbox').val() + '</style></head><body>' + $('#htmlinputbox').val()  + '</body></html>' );
					
				document.getElementById('outputbox').contentWindow.eval($('#jsinputbox').val() );	
			}

			$('.panel').height($(window).height() -  $('#toolbar').height() - $('.menubar').height() - 65); 	
			$('textarea').height($('.panel').height() -  $('.menubar').height() -10); 	

			$('.panel').width($(window).width() / 4 - 10 );

			updateOutput()

			$('textarea').on('change keyup paste', function() {
				updateOutput()
			});			

});
