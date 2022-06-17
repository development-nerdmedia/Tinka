$(document).ready(function (argument) {
    AOS.init();
    if ($('.img-tienda').length > 0) {
		$(".img-tienda").stick_in_parent({
			offset_top: 180
		});
	}   
})