<?php



get_header();
?>


<section class="error404 paddingSection">
    <!-- .page-header -->
    <header class="page-header alignwide">
        <h1 class="title title-medium">Page 404</h1>
    </header>

    <div class="error404Content not-found paddingSection">
        <p>La page que vous tentez d'accéder n'existe pas ou n'existe plus merci de retourner à l'accueil.</p>
    </div>
    <a href="<?= home_url() ?>" class=" btn btn-primary">Retourner a l'accueil</a>
</section>

<?php
get_footer();
