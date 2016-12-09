$(document).ready(function() {
			
			function updateOutput() {
				$('iframe').contents().find('html').html(
					'<html><head><style type="text/css">' + $('#cssinputbox').val() + '</style></head><body>' + $('#htmlinputbox').val()  + '</body></html>' );
					
				document.getElementById('outputbox').contentWindow.eval($('#jsinputbox').val() );	
			}
			
			var startHeight = $(document).height();
			var startWidth = $(window).width();

			function horizontalLayout() {
						
			$('.panel').addClass('panelHorizontal');
						
			$('.panel').height( startHeight -  $('#toolbar').height() - 15); 	
			$('textarea').height($('.panel').height() -  $('.menubar').height() - 30); 	
			$('#outputbox').height(startHeight -  $('#toolbar').height() - 35 );	

			$('.panel').width( startWidth / 4 - 14);		

			}			
			
			
			function stackedLayout() {
					$('.panel').removeClass('panelHorizontal');
					
					$('.panel').height( ( startHeight -  $('#toolbar').height() ) / 3 - 6);
					$('textarea').height($('.panel').height() -  $('.menubar').height() - 50); 
					$('.panel').width( startWidth / 2 - 2 );	
					$('#outputbox').width( startWidth / 2 - 34);	
					$('#outputbox').height( startHeight -  $('#toolbar').height() - 30 );	

			}
			

			horizontalLayout();
			updateOutput();
			
			$('#changeView').click( function() {
					if (  $('.panel').hasClass('panelHorizontal') ) {
						stackedLayout();				
					} else {
						horizontalLayout();	
					}			
			});

			$('textarea').on('change keyup paste', function() {
				updateOutput()
			});			
			
			$('#run').click( function() {
				updateOutput()
			});
			
						
    $(document).on('click', function(e) {
        if (e.target.id === 'pencil' || e.target.id === 'penTitle' ) {
            $('#penTitle').attr('contenteditable', 'true');       
		}	else {
           $('#penTitle').attr('contenteditable', 'false');
			}

		});

});
