<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript">
        const wp_curentUrl = '<?= home_url($wp->request); ?>';
    </script>
    <?= wp_head() ?>
    <title><?= get_bloginfo('name') ?></title>
</head>

<body>

    <header class="header">
        <div class="max-w paddingHeader">
            <div class="header__burgerIcon">
                <img id="burger" src="<?= get_template_directory_uri() . "/assets/img/iconBurger.svg" ?>" alt="Icone pour ouvrir le menue" width="45" height="45" loading="lazy">
            </div>

            <div class="header__content">
                <a href="#accueil">
                    <img src="<?= get_template_directory_uri() . "/assets/img/logo.jpg" ?>" alt="Logo Maz prono" width="126" height="69" loading="lazy">
                </a>

                <nav class="headernNav">
                    <ul class="headerNav__block">
                        <li class="headerNav__items"><a href="#">Accueil</a></li>
                        <li class="headerNav__items"><a href="#">Contact</a></li>
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
                    </ul>
                </nav>
                <button href="#" class="btn btn-secondary" title="Button pour allez sur la page profil">Mon profil</button>
            </div>
        </div>

    </header>
