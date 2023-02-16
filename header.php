<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="
    Achetez des pronostics sportifs fiables pour maximiser vos gains. Rejoignez notre communauté de parieurs en ligne pour des paris sportifs réussis grâce à nos pronostics de qualité. ">
    <meta property="og:title" content="Maz Prono" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://mazprono.com/" />
    <meta property="og:image" content="https://mazprono.com/wp-content/themes/mazprono/assets/img/logo.png" />
    <meta property="og:description" content="Achetez des pronostics sportifs fiables pour maximiser vos gains. Rejoignez notre communauté de parieurs en ligne pour des paris sportifs réussis grâce à nos pronostics de qualité." />
    <meta property="og:site_name" content="Maz Prono" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="fb:app_id" content="123456789" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="Achetez des pronostics sportifs fiables pour maximiser vos gains. Rejoignez notre communauté de parieurs en ligne pour des paris sportifs réussis grâce à nos pronostics de qualité." />
    <meta name="twitter:title" content="Maz Prono" />
    <meta name="twitter:image" content="https://mazprono.com/wp-content/themes/mazprono/assets/img/logo.png" />
    <meta name="twitter:site" content="@mazprono" />
    <meta name="twitter:creator" content="@mazprono" />
    <meta name="twitter:domain" content="Maz Prono" />
    <meta name="twitter:app:name:iphone" content="Maz Prono" />
    <meta name="twitter:app:name:ipad" content="Maz Prono" />
    <meta name="twitter:app:name:googleplay" content="Maz Prono" />
    <meta name="twitter:app:id:iphone" content="123456789" />
    <meta name="twitter:app:id:ipad" content="123456789" />
    <meta name="twitter:app:id:googleplay" content="123456789" />


    <script type="text/javascript">
        const wp_curentUrl = '<?= home_url($wp->request); ?>';
        const wp_siteUrl = '<?= get_template_directory_uri() ?>';
        const is_home = '<?= is_home() ?>';
        const url_facebook = '<?= get_theme_mod('url_facebook') ?>';
        const url_telegram = '<?= get_theme_mod('url_telegram') ?>';
    </script>
    <?= wp_head() ?>
    <title><?= get_bloginfo('name') ?></title>
</head>


<body>

    <header class="header">
        <div class="max-w paddingHeader">
            <div id="burger" class="header__burgerIcon">
                <img id="burger" src="<?= get_template_directory_uri() . "/assets/img/iconBurger.svg" ?>" alt="Icone pour ouvrir le menue" width="35" height="35" loading="lazy">
            </div>

            <div id="nav" class="header__content">
                <a href="<?= home_url() ?>">
                    <img src="<?= get_template_directory_uri() . "/assets/img/logo.png" ?>" alt="Logo Maz prono" width="60" height="60" loading="lazy">
                </a>

                <nav class="headernNav">
                    <ul class="headerNav__block">
                        <li class="headerNav__items"><a href="<?= home_url() ?>">Accueil</a></li>
                        <li class="headerNav__items"><a href="<?= is_home() ? '#pricing' : home_url() . '#pricing'   ?>">Nos offres</a></li>
                        <li>

                            <?php
                            $customMenu = wp_nav_menu([
                                'theme_location' => "header-menu",
                                'menu' => 0,
                                'container' => 'ul',
                                'fallback_cb' => false,
                            ]);

                            /* get li in menu */
                            $li = explode('</li>', $customMenu);
                            /* echo li */
                            foreach ($li as $value) {
                                echo $value . '</li>';
                            }

                            ?>
                        </li>
                    </ul>
                </nav>
                <div class="header__btn">

                    <?php if (!wp_get_current_user()->user_login) : ?>

                        <a href="<?= get_site_url() . '/login' ?>" class="btn btn-primary">Se connecter</a>
                        <a href="<?= get_site_url() . '/compte-dadherent/paiement-dadhesion/' ?>" class="btn btn-secondary">S'abonner</a>

                    <?php else : ?>
                        <a href="<?= get_site_url() . '/compte-dadherent' ?>" class="btn btn-primary">Profil</a>
                        <a href="<?= wp_logout_url('/') ?>" class="btn btn-secondary">Déconnectons</a>

                    <?php endif; ?>
                </div>

            </div>
        </div>

    </header>