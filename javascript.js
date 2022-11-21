// Pertemuan 18 Oktober 2022
// Menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
	tombolMenu.click(function () {
		menu.toggle();
	});
	menu.click(function () {
		menu.toggle();
	});
}

$(document).ready(function () {
	var width= $(window).width();
	if (width < 990) {
		klikMenu();
	}
})
// Closed Pertemuan 18 Oktober 2022
// Check Lebar
$(window).resize(function () {
	var width = $(window).width();
    if (width > 989) {
    	menu.css("display", "block");
    } else {
    	menu.css("display", "none");
    }
    klikMenu();  
});
// Closed Pertemuan 24 Oktober 2022
// Pertemuan 8 November 2022

// Efek Scroll
$(document).ready(function () {
	var scroll_pos = 0;
	$(document).scroll(function () {
		scroll_pos = $(this).scrollTop();
		if (scroll_pos > 0) {
			$("nav").addClass("putih");
			$("nav img.hitam").show();
			$("nav img.putih").hide();
		} else {
			$("nav").removeClass("putih");
			$("nav img.hitam").hide();
			$("nav img.putih").show();
		}
	})
});