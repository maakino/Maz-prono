<!-- permet d'avoir le chemin verre le repertoire du theme
get_template_directory_uri()
-->

<?php
get_header();
?>


<!-- YOUR CODE HTML  -->
<Main>

    <section class="home">
        <div class="max-w homeContent paddingSection">
            <h1 id="title_hero_home" class="title title-big"><?= get_theme_mod('title_hero_home') ? get_theme_mod('title_hero_home') : 'MAZ PRONOS' ?> </h1>
            <p class="txt">Bienvenue sur Maz Pronos, votre site de pronostics sportifs ! Nous vous offrons les meilleurs pronostics pour le Tennis, le Football et le Basket.</p>
            <a href="#pricing" class="btn btn-primary">Voir les offres</a>
        </div>
    </section>

    <section class="lastGain">
        <div class="max-w paddingSection lastGainContent">
            <span class="titleSubs">
                <h2 class="title title-medium"> Nos derniers gain</h2>
                <p class="txt">Voici mes derniers pronostiques </p>
            </span>
            <div class="lastGain__gallery">
                <img src="<?= get_template_directory_uri() . "/assets/img/card/cardImg.jpg" ?>" alt="Apperçu du derniers gain" width="312" height="355" loading="lazy">
                <img src="<?= get_template_directory_uri() . "/assets/img/card/cardImg.jpg" ?>" alt="Apperçu du derniers gain" width="312" height="355" loading="lazy">
                <img src="<?= get_template_directory_uri() . "/assets/img/card/cardImg.jpg" ?>" alt="Apperçu du derniers gain" width="312" height="355" loading="lazy">
            </div>
        </div>
    </section>
    <?php if (get_theme_mod('value_code_promo') !== "") : ?>
        <section class="promoCode">
            <div class="max-w">
                <h2 class="title title-medium">
                    Bénéficier de
                    <span id="value_pourcent"><?= get_theme_mod('value_pourcent') ? get_theme_mod('value_pourcent') : '20' ?></span>% de remise avec le code
                    <span id="value_code_promo"><?= get_theme_mod('value_code_promo') ? get_theme_mod('value_code_promo') :  'Cow974' ?></span>
                </h2>
            </div>
        </section>
    <?php endif; ?>


    <section class="pricing">
        <div class="max-w paddingSection pricingContent">
            <span class="titleSubs">
                <h2 class="title title-medium"> Nos offres</h2>
                <p class="txt">Voici les dernières offres que nous proposons </p>
            </span>
            <div id="pricing" class="pricingGallery">

                <?= do_shortcode('[pmpro_advanced_levels]'); ?>
            </div>
        </div>
    </section>

    <section class="testimonial">
        <div class="maw-w paddingSection testimonialContent">
            <?php echo do_shortcode('[sp_testimonial id="39"]'); ?>
        </div>
    </section>

</Main>


<?php
get_footer();
?>