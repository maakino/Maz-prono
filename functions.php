<?php


require_once('options/customize_theme.php');


add_action('after_setup_theme', function () {

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');

    /* Ajout du menu */
    add_theme_support('menus');
    register_nav_menu('header-menu', 'En tête du menu');
    /* register_nav_menu('footer-menu', 'footer menu'); */

    /* Ajout d'une category personnaliser a l'activation du theme */
    wp_insert_term(
        'last_tips',
        'category',
        array(
            'description' => 'category a utiliser pour les images qui doivent être afficher sur la page d\'accueil',
            'slug' => ' last_tips'
        )
    );
    wp_insert_term(
        'vip_board',
        'category',
        array(
            'description' => 'category a utiliser pour les images qui doivent être afficher sur la page Vip ',
            'slug' => ' vip_board'
        )
    );
});




add_action('wp_enqueue_scripts', function () {

    /* Css */
    wp_register_style('styleCss',  get_template_directory_uri() . '/assets/css/style.css');
    wp_enqueue_style('styleCss');

    /* Scripts */
    wp_register_script('appJs',  get_template_directory_uri() . '/assets/js/script.js', [], false, true);
    wp_enqueue_script('appJs');

    wp_register_script('capture_subscription',  get_template_directory_uri() . '/assets/js/captureSubscription.js', [], false, true);
    wp_enqueue_script('capture_subscription');

    wp_register_script('testimonial',  get_template_directory_uri() . '/assets/js/testimonial.js', [], false, true);
    wp_enqueue_script('testimonial');

    wp_register_script('captureNiveauxDadhesion',  get_template_directory_uri() . '/assets/js/captureNiveauxDadhesion.js', [], false, true);
    wp_enqueue_script('captureNiveauxDadhesion');

    wp_register_script('captureContact',  get_template_directory_uri() . '/assets/js/captureContact.js', [], false, true);
    wp_enqueue_script('captureContact');

    wp_register_script('captureFacture',  get_template_directory_uri() . '/assets/js/captureFacture.js', [], false, true);
    wp_enqueue_script('captureFacture');
});

/* captureFacture */
