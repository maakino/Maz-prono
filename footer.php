<footer class="footer">
    <div class="max-w paddingHeader">
        <div class="footerContent">
            <a href="<?= home_url() ?>">
                <img src="<?= get_template_directory_uri() . "/assets/img/logo.png" ?>" alt="Logo Maz prono qui renvoie en haut de la page d'accueil" width="129" height="129" loading="lazy">
            </a>
            <div class="footerContent__block">
                <h2 class="footer__title">Liens rapide</h2>
                <ul>
                    <li>
                        <a class="footer__links links" href="<?= home_url() ?>">Accueil</a>
                    </li>
                    <li>
                        <a class="footer__links links" href="#pricing">Nos offres</a>
                    </li>
                    <li>
                        <a class="footer__links links" href="#">VIP</a>
                    </li>
                    <li>
                        <a class="footer__links links" href="<?= home_url().'/contact' ?>">Contact</a>
                    </li>
                    <li>
                        <a class="footer__links links" href="#">Mentions légales</a>
                    </li>
                    <li>
                        <a class="footer__links links" href="#">Condition générales de ventes</a>
                    </li>
                </ul>
            </div>

            <div class="footerContent__block">
                <h2 class="footer__title">Les sports</h2>
                <ul>
                    <li>
                        <a class="footer__links links" href="#">Football</a>
                    </li>
                    <li>
                        <a  class="footer__links links"href="#">Tennis</a>
                    </li>
                    <li>
                        <a  class="footer__links links"href="#">NBA</a>
                    </li>
                </ul>
            </div>
            <div class="footerContent__block">
                <h2 class="footer__title">Réseaux sociaux</h2>
                <div class="footerSocial">
                    <!-- facebook -->
                    <a href="#" class="links">
                        <img class="footerSocial-hover" src="<?= get_template_directory_uri() . "/assets/img/icons/facebook.svg" ?>" alt="Icone qui redirige vers la page facebook" width="38" height="38" loading="lazy">
                    </a>
                    <!-- Telegram -->
                    <a href="#" class="links">
                        <img class="footerSocial-hover" src="<?= get_template_directory_uri() . "/assets/img/icons/telegram.svg" ?>" alt="Icone qui redirige vers lapplication télégram " width="38" height="38" loading="lazy">
                    </a>
                </div>
            </div>
            <div class="footerContent__block">
                <h2 class="footer__title">Paiement accéptées</h2>
                <div class="footerSocial">
                    <img src="<?= get_template_directory_uri() . "/assets/img/icons/stripe.svg" ?>" alt="Logo Stripe" width="50" height="50" loading="lazy">
                    <img src="<?= get_template_directory_uri() . "/assets/img/icons/visa.svg" ?>" alt="Logo Visa" width="50" height="50" loading="lazy">
                    <img src="<?= get_template_directory_uri() . "/assets/img/icons/mastercard.svg" ?>" alt="Logo Mastercard" width="50" height="50" loading="lazy">

                </div>
            </div>
        </div>
        <p class="footerCopy ">
            LES JEUX D’ARGENT ET DE HASARD SONT INTERDITS AUX MINEURS. Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 
            <a class="links" href="tel:09-74-75-13-13"> 09-74-75-13-13</a> ( appel non surtaxé )</p>

        <p class="footerCopy"> © Copyright Maz Pronos 2023 </p>

    </div>
</footer>
</body>
<?=
wp_footer();
?>

</html>
