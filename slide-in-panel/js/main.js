jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn.notepull').on('click', function(event){
		event.preventDefault();
		$('.cd-panel.notepull').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel.notepull').on('click', function(event){
		if( $(event.target).is('.cd-panel.notepull') || $(event.target).is('.cd-panel-close.notepull') ) { 
			$('.cd-panel.notepull').removeClass('is-visible');
			event.preventDefault();
		}
	});

	//open the lateral panel
	$('.cd-btn.salesforce').on('click', function(event){
		event.preventDefault();
		$('.cd-panel.salesforce').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel.salesforce').on('click', function(event){
		if( $(event.target).is('.cd-panel.salesforce') || $(event.target).is('.cd-panel-close.salesforce') ) { 
			$('.cd-panel.salesforce').removeClass('is-visible');
			event.preventDefault();
		}
	});

	//open the lateral panel
	$('.cd-btn.fle').on('click', function(event){
		event.preventDefault();
		$('.cd-panel.fle').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel.fle').on('click', function(event){
		if( $(event.target).is('.cd-panel.fle') || $(event.target).is('.cd-panel-close.fle') ) { 
			$('.cd-panel.fle').removeClass('is-visible');
			event.preventDefault();
		}
	});
});