
(function ($) {

    /* HERO HOME */
    wp.customize('title_hero_home', (value) => {
        value.bind((newVal) => {
            $('#title_hero_home').text(newVal);
        });
    });

    /* CODE PROMO */
    wp.customize('value_code_promo', (value) => {
        value.bind((newVal) => {
            console.log(newVal);
            $('#value_code_promo').text(newVal);
        });
    });

    wp.customize('value_pourcent', (value) => {
        value.bind((newVal) => {
            $('#value_pourcent').text(newVal);
        });
    });



    /* RESEAUX SOCIAUX */

    /* Reseaux  */
    wp.customize('url_facebook', (value) => {
        value.bind((newVal) => {
            $('#url_facebook').attr('href', newVal);
        });

    });

    wp.customize('url_telegram', (value) => {
        value.bind((newVal) => {
            $('#url_telegram').attr('href', newVal);
        });
    });


})(jQuery)