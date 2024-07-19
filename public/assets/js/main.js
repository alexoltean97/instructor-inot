$(document).ready(function () {

    // Refactor -- CREATE UTILITY 
    if ($(window).width() <= 767) {
        $('h1.ftsz-50.pb-2').each(function() {
            $(this).removeClass('ftsz-50').addClass('ftsz-24');
        });

        $('p.ftsz-20').each(function() {
            $(this).removeClass('ftsz-20').addClass('ftz-15');
        });

    }

    $(window).resize(function() {
        if ($(window).width() <= 767) {
            $('h1.ftsz-50.pb-2').each(function() {
                $(this).removeClass('ftsz-50').addClass('ftsz-24');
            });
        } else {
            $('h1.ftsz-24.pb-2').each(function() {
                $(this).removeClass('ftsz-24').addClass('ftsz-50');
            });
        }
    });

});