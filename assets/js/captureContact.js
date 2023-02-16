document.addEventListener("DOMContentLoaded", function () {

    const curentPage=wp_curentUrl.split('/').pop();

    if (curentPage==='contact') {

        const article=document.querySelector('article');
        const form=document.querySelector('.wpcf7-form')

        article.innerHTML="";

        const section=` <section class="contact">
    <div class="contactContent max-w paddingSection">
        <div class="contactInfo">
            <h1 class="title">Contact</h1>
            <p class="txt">Vous avez des questions ?</p>
            <p class="txt">N’hésitez pas à nous suivre sur nos réseaux sociaux
                afin de manquer aucune offre.</p>

                <span class="contactSocial">

                    <a class="footerSocial-hover"href="${url_facebook}" target="_blank">
                        <img src="${wp_siteUrl}/assets/img/icons/facebook.svg" alt="facebook" width="35" height="35" loading="lazy">
                    </a>
                    <a class="footerSocial-hover" href="${url_telegram}" target="_blank">
                        <img src="${wp_siteUrl}/assets/img/icons/telegram.svg" alt="telegram" width="35" height="35" loading="lazy">
                    </a>
                </span>
        </div>
       ${form.outerHTML}
    </div>
</section> `;
        article.innerHTML=section;


    }


});  
