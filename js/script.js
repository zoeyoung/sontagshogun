
$(document).ready(function(){
	showHide();
	playMusic();
	startingPosition();
	changeContent();
	slideAlbums();
});



var showHide = function (){
	$('#more').click(function(event){
		event.preventDefault();

		var moreLess = $('#more');

		var contentBox = $('#rightbox');

		if (contentBox.hasClass('hidden')){
			contentBox.removeClass('hidden');
			moreLess.removeClass('plus').addClass('minus');

		} else {
			contentBox.addClass('hidden');
			moreLess.removeClass('minus').addClass('plus');
		}
		return false;
	});

};

var playMusic =function (){
	$('#play').click(function(event){
		event.preventDefault();

		var musicBox = $('#bandcamp');

		var playButton = $('#play');

		if (musicBox.hasClass('hidden')){
			musicBox.removeClass('hidden');
			playButton.addClass('rotate');

		} else {
			musicBox.addClass('hidden');
			playButton.removeClass('rotate');
		}
		return false;
	});
};

var startingPosition = function() {
	$('.musicContent').addClass('hide');
	$('.tourContent').addClass('hide');
	$('.pressContent').addClass('hide');
	$('.storyContent').addClass('hide');
}

var changeContent = function (){
	$('#music').click(function(event){
		event.preventDefault();
		$('.newsContent').addClass('hide');
		$('.tourContent').addClass('hide');
		$('.pressContent').addClass('hide');
		$('.storyContent').addClass('hide');
		$('.musicContent').removeClass('hide');
		return false;
	});

	$('#tour').click(function(event){
		event.preventDefault();
		$('.newsContent').addClass('hide');
		$('.musicContent').addClass('hide');
		$('.pressContent').addClass('hide');
		$('.storyContent').addClass('hide');
		$('.tourContent').removeClass('hide');
		return false;
	});

	$('#story').click(function(event){
		event.preventDefault();
		$('.newsContent').addClass('hide');
		$('.pressContent').addClass('hide');
		$('.musicContent').addClass('hide');
		$('.tourContent').addClass('hide');
		$('.storyContent').removeClass('hide');
		return false;
	});

	$('#press').click(function(event){
		event.preventDefault();
		$('.newsContent').addClass('hide');
		$('.musicContent').addClass('hide');
		$('.storyContent').addClass('hide');
		$('.tourContent').addClass('hide');
		$('.pressContent').removeClass('hide');
		return false;
	});
	$('#news').click(function(event){
		event.preventDefault();
		$('.pressContent').addClass('hide');
		$('.musicContent').addClass('hide');
		$('.storyContent').addClass('hide');
		$('.tourContent').addClass('hide');
		$('.newsContent').removeClass('hide');
		return false;
	});
};


var slideAlbums = function(){
	var tale = $('#taledetail');
	var ltfi = $('#ltfidetail');
	var absent = $('#absentdetail');

	$('#tale').click(function(event){
		event.preventDefault();
		if (tale.is(":visible")){
			tale.slideUp("slow");
			$('#tale').removeClass('cdcoverselected');
		} else if (ltfi.is(":visible")){
			ltfi.slideUp("slow");
			$('#ltfi').removeClass('cdcoverselected');
			$('#tale').addClass('cdcoverselected');
			tale.slideDown("slow");
		} else if (absent.is(":visible")){
			absent.slideUp("slow");
			$('#absentwarrior').removeClass('cdcoverselected');
			$('#tale').addClass('cdcoverselected');
			tale.slideDown("slow");
		} else {
			tale.slideDown("slow");
			$('#tale').addClass('cdcoverselected');
		}
		return false;
	});

	$('#absentwarrior').click(function(event){
		event.preventDefault();
		if (absent.is(":visible")){
			absent.slideUp("slow");
			$('#absentwarrior').removeClass('cdcoverselected');
		} else if (ltfi.is(":visible")){
			ltfi.slideUp("slow");
			$('#ltfi').removeClass('cdcoverselected');
			$('#absentwarrior').addClass('cdcoverselected');
			absent.slideDown("slow");
		} else if (tale.is(":visible")){
			tale.slideUp("slow");
			$('#tale').removeClass('cdcoverselected');
			$('#absentwarrior').addClass('cdcoverselected');
			absent.slideDown("slow");
		} else {
			absent.slideDown();
			$('#absentwarrior').addClass('cdcoverselected');
		}
		return false;
	});

	$('#ltfi').click(function(event){
		event.preventDefault();
		if (ltfi.is(":visible")){
			ltfi.slideUp("slow");
			$('#ltfi').removeClass('cdcoverselected');
		} else if (tale.is(":visible")){
			tale.slideUp("slow");
			$('#tale').removeClass('cdcoverselected');
			$('#ltfi').addClass('cdcoverselected');
			ltfi.slideDown("slow");
		} else if (absent.is(":visible")){
			absent.slideUp("slow");
			$('#absentwarrior').removeClass('cdcoverselected');
			$('#ltfi').addClass('cdcoverselected');
			ltfi.slideDown("slow");
		} else {
			ltfi.slideDown("slow");
			$('#ltfi').addClass('cdcoverselected');
		}
		return false;
	});
};