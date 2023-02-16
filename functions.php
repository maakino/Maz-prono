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
        'Football',
        'category',
        array(
            'description' => '',
            'slug' => ' football'
        )
    );
    wp_insert_term(
        'Tennis',
        'category',
        array(
            'description' => '',
            'slug' => ' tennis'
        )
    );
    wp_insert_term(
        'NBA',
        'category',
        array(
            'description' => '',
            'slug' => ' nba'
        )
    );
});




add_action('wp_enqueue_scripts', function () {

    /* Css */
    wp_register_style('styleCss',  get_template_directory_uri() . '/assets/css/style.css');
    wp_enqueue_style('styleCss');

    /* Scripts */






    wp_register_script('appJs',  get_template_directory_uri() . '/assets/js/script.js', [], false, false);
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

    wp_register_script('headerBurger',  get_template_directory_uri() . '/assets/js/headerBurger.js', [], false, true);
    wp_enqueue_script('headerBurger');


    /* 
    function add_defer_attribute($tag, $handle)
    {
        // ajouter les handles de mes scripts au array ci-dessous. Ici 3 scripts par exemple.
        $scripts_to_defer = array('appJs', 'capture_subscription', 'testimonial', 'captureNiveauxDadhesion', 'captureContact', 'captureContact', 'headerBurger');
        foreach ($scripts_to_defer as $defer_script) {
            if (
                $defer_script === $handle
            ) {
                return str_replace(' src', ' async="async" src', $tag);
            }
        }
        return $tag;
    }

    add_filter('script_loader_tag', 'add_defer_attribute', 10, 2); */

    function load_wp_media_files()
    {
        wp_enqueue_media();
    }
    add_action('admin_enqueue_scripts', 'load_wp_media_files');

    function wpc_show_admin_bar()
    {
        if (!current_user_can('administrator') && !is_admin()) {
            return false;
        }
        return true;
    }
    add_filter('show_admin_bar', 'wpc_show_admin_bar');
});

/* captureFacture */
