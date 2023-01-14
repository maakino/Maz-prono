<!DOCTYPE html>
<html lang="en">

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

    <header>

        <nav>
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
        </nav>

    </header>