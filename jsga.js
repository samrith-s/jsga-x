

function JSGA(options) {
	
	var $BASE_SCRIPT_URL = 'modules/';
	var $REQUIRED_MODULES = ['display'];

	var settings = $.extend({
		modules: ['menu'],
		cache: true
	}, options);

	$.ajaxSetup({
  		cache: settings.cache
	});	

	for(var i=0,len=$REQUIRED_MODULES.length; i<len; i++)
		$.getScript($BASE_SCRIPT_URL + $REQUIRED_MODULES[i] + '.js').done(function( script, textStatus ) {
    		console.log( textStatus );
  		}).fail(function( jqxhr, settings, exception ) {
    		console.error( "Triggered ajaxError handler." );
		});

	for(var i=0,len=settings.modules.length; i<len; i++)
		$.getScript($BASE_SCRIPT_URL + settings.modules[i] + '.js').done(function( script, textStatus ) {
    		console.log( textStatus );
  		}).fail(function( jqxhr, settings, exception ) {
    		console.error( "Triggered ajaxError handler." );
		});


}
