<?php

add_action('customize_register', function (WP_Customize_Manager $manager) {

    /* Define section */

    $manager->add_section('hero-home', [
        'title' => 'Hero Home',
    ]);

    /* title home  */
    $manager->add_setting('title_hero_home', [
        'default' => 'MAZ PRONOS',
        'transport' => 'postMessage'
    ]);

    $manager->add_control('title_hero_home', [
        'section' => 'hero-home',
        'seting' => 'title_hero_home',
        'label' => 'Titre pour le Hero Home de la page d\'accueil',
        'type' => 'text',

    ]);
    $manager->add_setting('title_hero_message', [
        'default' => 'Bienvenue sur Maz Pronos, votre site de pronostics sportifs ! Nous vous offrons les meilleurs pronostics pour le Tennis, le Football et le Basket.',
        'transport' => 'postMessage'
    ]);

    $manager->add_control('title_hero_message', [
        'section' => 'hero-home',
        'seting' => 'title_hero_message',
        'label' => 'message pour le Hero Home de la page d\'accueil',
        'type' => 'text',

    ]);

    /* add ooption change background image  */
    $manager->add_setting('background_image', [
        'default' => get_template_directory_uri() . '/assets/img/hero-home.jpg',
        'transport' => 'postMessage'
    ]);

    $manager->add_control(new WP_Customize_Image_Control($manager, 'background_image', [
        'label' => 'Image de fond',
        'section' => 'hero-home',
        'settings' => 'background_image',
    ]));





    /* Define section */

    $manager->add_section('code_promo', [
        'title' => 'code promotionnel',
    ]);

    /* Value code promo  */
    $manager->add_setting('value_code_promo', [
        'default' => 'Cow974',
        'transport' => 'postMessage'
    ]);

    $manager->add_control('value_code_promo', [
        'section' => 'code_promo',
        'seting' => 'value_code_promo',
        'label' => 'le code promotionnel que vous souhaitez afficher sur la page d\'accueil',
        'type' => 'text',

    ]);

    /* Value pourcentage du code promo  */
    $manager->add_setting('value_pourcent', [
        'default' => '20',
        'transport' => 'postMessage'
    ]);

    $manager->add_control('value_pourcent', [
        'section' => 'code_promo',
        'seting' => 'value_pourcent',
        'label' => 'la valeur du pourcentage du code promotionnel que vous souhaitez afficher sur la page d\'accueil',
        'type' => 'number',

    ]);

    /* Define section */

    $manager->add_section('social_network', [
        'title' => 'Réseaux sociaux',
    ]);



    /* Url Facebook  */
    $manager->add_setting('url_facebook', [
        'default' => '',
        'transport' => 'postMessage'
    ]);

    $manager->add_control('url_facebook', [
        'section' => 'social_network',
        'seting' => 'url_facebook',
        'label' => 'lien vers votre page facebook',
        'type' => 'text',

    ]);

    /* Url Telegram  */
    $manager->add_setting('url_telegram', [
        'default' => '',
        'transport' => 'postMessage'
    ]);

    $manager->add_control('url_telegram', [
        'section' => 'social_network',
        'seting' => 'url_telegram',
        'label' => 'lien vers votre page Telegram',
        'type' => 'text',

    ]);
});



/* add js apparence  */
add_action('customize_preview_init', function () {
    wp_enqueue_script('custom_theme_apparence', get_template_directory_uri() . '/assets/js/theme_customization.js', ['jquery', 'customize-preview'], '', true);
});
