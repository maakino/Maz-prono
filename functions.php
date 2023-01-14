<?php


require_once('options/customize_theme.php');


add_action('after_setup_theme', function () {

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');

    /* Ajout du menu */
    add_theme_support('menus');
    register_nav_menu('header-menu', 'En tête du menu');
    register_nav_menu('footer-menu', 'footer menu');

    /* Ajout d'une category personnaliser a l'activation du theme */
    /* wp_insert_term(
        'blog',
        'category',
        array(
            'description' => 'blog',
            'slug' => 'blog'
        )
    ); */
});




add_action('wp_enqueue_scripts', function () {

    /* Css */
    wp_register_style('styleCss',  get_template_directory_uri() . '/assets/css/style.css');
    wp_enqueue_style('styleCss');

    /* Scripts */
    wp_register_script('appJs',  get_template_directory_uri() . '/assets/js/script.js', [], false, true);
    wp_enqueue_script('appJs');
});
