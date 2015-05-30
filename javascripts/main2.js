/// <reference path="../../typings/jquery/jquery.d.ts"/>
$(function() {
	var $bloons = $('#bloons img');
	
	function randomDuration() {
		return 3000 + Math.random() * 1000 * 3;
	}
	
	function considerAddDog() {
		if (Math.random() < 0.1) {
			var $dog = $('#dog')
			$dog.css('left', '-400px');
			$dog.animate({left: '110%'}, randomDuration());
		}
	}
	
	function animationLoop() {
		$(this).css('top', '800px');
		$(this).animate({top: -400}, randomDuration(), animationLoop);	
		considerAddDog();
	}
	
	$bloons.each(animationLoop);


	function randomShaun()
	{
	  var seans = ['Sean', 'Shawn', 'Shaun', 'Shone', 'Chone'];
	  return seans[Math.floor(Math.random() * seans.length)];
	}

	$('h1').html('Happy Birthday ' + randomShaun());
});