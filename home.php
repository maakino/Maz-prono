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

    <section class="pricing">
        <div class="max-w paddingSection pricingContent">
            <span class="titleSubs">
                <h2 class="title title-medium"> Nos offres</h2>
                <p class="txt">Voici les dernières offres que nous proposons </p>
            </span>
            <div class="pricingGallery">
                <div class="card">
                    <h2 class="title title-medium">VIP</h2>
                    <h2 class="title title-medium">1 mois</h2>
                    <p>ACCÈS VIP</p>
                    <p>PRONO DU JOUR</p>
                    <p>COMBINÉ</p>
                    <p>COMBINÉ BONUS</p>
                    <p>COMBINÉ BUTTEURS</p>
                    <p>Montante</p>
                    <h3 class="title title-medium">25.00€</h3>
                    <a href="#" class="btn btn-primary">S'abonner</a>
                </div>
                <div class="card">
                    <h2 class="title title-medium">VIP</h2>
                    <h2 class="title title-medium">2 mois</h2>
                    <p>ACCÈS VIP</p>
                    <p>PRONO DU JOUR</p>
                    <p>COMBINÉ</p>
                    <p>COMBINÉ BONUS</p>
                    <p>COMBINÉ BUTTEURS</p>
                    <p>Montante</p>
                    <h3 class="title title-medium">25.00€</h3>
                    <a href="#" class="btn btn-primary">S'abonner</a>
                </div>
                <div class="card">
                    <h2 class="title title-medium">VIP</h2>
                    <h2 class="title title-medium">3 mois</h2>
                    <p>ACCÈS VIP</p>
                    <p>PRONO DU JOUR</p>
                    <p>COMBINÉ</p>
                    <p>COMBINÉ BONUS</p>
                    <p>COMBINÉ BUTTEURS</p>
                    <p>Montante</p>
                    <h3 class="title title-medium">25.00€</h3>
                    <a href="#" class="btn btn-primary">S'abonner</a>
                </div>
            </div>
        </div>
    </section>

</Main>


<?php
get_footer();
?>
