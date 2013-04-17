//@codekit-prepend "jquery-1.9.0.min.js";
//@codekit-prepend "modernizr.min.js";
//@codekit-prepend "jquery.dataTables.min.js";
//@codekit-prepend "wnt.js";



/******** GOOGLE ANALYTICS ********/
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-39303162-1']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();



/******** IMAGE FADE-SWAP ********/
function cycleImages(){
	var $active = $('#cycler .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
	$next.css('z-index',2);//move the next image up the pile
	$active.fadeOut(1500,function(){//fade out the top image
		$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index',3).addClass('active');//make the next image the top one
	});
}

function cycleImages2(){
	var $active = $('#cycler2 .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('#cycler2 img:first');
	$next.css('z-index',2);//move the next image up the pile
	$active.fadeOut(1500,function(){//fade out the top image
		$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index',3).addClass('active');//make the next image the top one
	});
}

function cycleImages3(){
	var $active = $('#cycler3 .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('#cycler3 img:first');
	$next.css('z-index',2);//move the next image up the pile
	$active.fadeOut(1500,function(){//fade out the top image
		$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index',3).addClass('active');//make the next image the top one
	});
}

$(document).ready(function(){
	// run every 3s
	setInterval('cycleImages()', 3000);
	setInterval('cycleImages2()', 3000);
	setInterval('cycleImages3()', 3000);
});