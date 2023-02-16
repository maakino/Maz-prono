<!-- permet d'avoir le chemin verre le repertoire du theme
get_template_directory_uri()
-->

<?php
get_header();

?>


<!-- YOUR CODE HTML  -->
<Main>

    <section id="background_image" class="home" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(<?= get_theme_mod('background_image') ?>);">
        <div class="max-w homeContent paddingSection">
            <h1 id="title_hero_home" class="title title-big"><?= get_theme_mod('title_hero_home') ? get_theme_mod('title_hero_home') : 'MAZ PRONOS' ?> </h1>
            <p id="title_hero_message" class="txt"><?= get_theme_mod('title_hero_message', true) ?></p>
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
                <?= do_shortcode('[gain_view]'); ?>
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
            <p>Toutes nos offres sont sans engagement vous pouvez résilier à tout moment.</p>
        </div>
    </section>

    <section class="testimonial">
        <div class="maw-w paddingSection testimonialContent">
            <?php echo do_shortcode('[print_best_testimonial_slider]'); ?>
        </div>
    </section>

</Main>


<?php
get_footer();
?>