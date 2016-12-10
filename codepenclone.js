$(document).ready(function() {
			
			var isAutorun = true;
			
			var startHeight = $(document).height();
			var startWidth = $(window).width();
			
			function updateOutput() {
				$('iframe').contents().find('html').html(
					'<html><head><style type="text/css">' + $('#cssinputbox').val() + '</style></head><body>' + $('#htmlinputbox').val()  + '</body></html>' );					
				document.getElementById('outputbox').contentWindow.eval($('#jsinputbox').val() );	
			}
			

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
			

			$( ".closeModal" ).on( "click", function() {					
				if ( $( "#layoutRadios1").is(":checked") ) {	
						horizontalLayout();	
				}  else 	if ( $( "#layoutRadios2").is(":checked") ) {	
						stackedLayout();		
				} 
				
				if ( $( "#autosaveCheckbox1").is(":checked")) {	
						//autosave
				} 
				
				if ( $( "#autorunCheckbox1").is(":checked") ) {	
					isAutorun = true;
				} else  {
					isAutorun = false;
				}
				
				});						
						
			
			$('textarea').on('change keyup paste', function() {
				if (isAutorun) {updateOutput()};
			});			
			
			$('#run').click( function() {
				updateOutput();
			});
			
						
    $(document).on('click', function(e) {
        if (e.target.id === 'pencil' || e.target.id === 'penTitle' ) {
            $('#penTitle').attr('contenteditable', 'true');       
		}	else {
           $('#penTitle').attr('contenteditable', 'false');
			}

		});
		
		
		$(".panel-left").resizable({
   handles: "e",
   resizeHeight: false
 });
		
		

});
