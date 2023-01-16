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
            <h1 class="title title-big">MAZ PRONOS</h1>
            <p class="txt">Lorem ipsum dolor sit amet consectetur. Sollicitudin malesuada libero non pellentesque convallis arcu non.</p>
            <a href="#" class="btn btn-primary">Voir les offres</a>
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

    <section class="promoCode">
        <div class="max-w">
            <h2 class="title title-medium">
                Bénéficier de 20% de remise avec le code Cow974
            </h2>
        </div>
    </section>

</Main>


<?php
get_footer();
?>
