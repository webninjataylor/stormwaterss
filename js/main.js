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
function cycleImages4(){
	var $active = $('#cycler4 .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('#cycler4 img:first');
	$next.css('z-index',2);//move the next image up the pile
	$active.fadeOut(1500,function(){//fade out the top image
		$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index',3).addClass('active');//make the next image the top one
	});
}
function cycleImages5(){
	var $active = $('#cycler5 .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('#cycler5 img:first');
	$next.css('z-index',2);//move the next image up the pile
	$active.fadeOut(1500,function(){//fade out the top image
		$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index',3).addClass('active');//make the next image the top one
	});
}
function cycleImages6(){
	var $active = $('#cycler6 .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('#cycler6 img:first');
	$next.css('z-index',2);//move the next image up the pile
	$active.fadeOut(1500,function(){//fade out the top image
		$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index',3).addClass('active');//make the next image the top one
	});
}
function cycleImages7(){
	var $active = $('#cycler7 .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('#cycler7 img:first');
	$next.css('z-index',2);//move the next image up the pile
	$active.fadeOut(1500,function(){//fade out the top image
		$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index',3).addClass('active');//make the next image the top one
	});
}
function cycleImages8(){
	var $active = $('#cycler8 .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('#cycler8 img:first');
	$next.css('z-index',2);//move the next image up the pile
	$active.fadeOut(1500,function(){//fade out the top image
		$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index',3).addClass('active');//make the next image the top one
	});
}
function cycleImages9(){
	var $active = $('#cycler9 .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('#cycler9 img:first');
	$next.css('z-index',2);//move the next image up the pile
	$active.fadeOut(1500,function(){//fade out the top image
		$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index',3).addClass('active');//make the next image the top one
	});
}
function cycleImages10(){
	var $active = $('#cycler10 .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('#cycler10 img:first');
	$next.css('z-index',2);//move the next image up the pile
	$active.fadeOut(1500,function(){//fade out the top image
		$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index',3).addClass('active');//make the next image the top one
	});
}
function cycleImages11(){
	var $active = $('#cycler11 .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('#cycler11 img:first');
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
	setInterval('cycleImages4()', 3000);
	setInterval('cycleImages5()', 3000);
	setInterval('cycleImages6()', 3000);
	setInterval('cycleImages7()', 3000);
	setInterval('cycleImages8()', 3000);
	setInterval('cycleImages9()', 3000);
	setInterval('cycleImages10()', 3000);
	setInterval('cycleImages11()', 3000);
});