document.addEventListener("DOMContentLoaded", function () {

    const curentPage=wp_curentUrl.split('/').pop();

    if (curentPage==='contact') {

        const article=document.querySelector('article');
        const form=document.getElementById('wpcf7-f41-p43-o1')
        article.innerHTML="";

        const section=` <section class="contact">
    <div class="contactContent max-w paddingSection">
        <div class="contactInfo">
            <h1 class="title">Contact</h1>
            <p class="txt">Vous avez des questions ?</p>
            <p class="txt">N’hésitez pas à nous suivre sur nos réseaux sociaux
                afin de manquer aucune offre.</p>

                <span class="contactSocial">

                    <a class="footerSocial-hover" href="https://www.facebook.com/mazprono/" target="_blank">
                        <img src="${wp_siteUrl}/assets/img/icons/facebook.svg" alt="facebook">
                    </a>
                    <a class="footerSocial-hover" href="https://t.me/mazprono" target="_blank">
                        <img src="${wp_siteUrl}/assets/img/icons/telegram.svg" alt="telegram">
                    </a>
                </span>
        </div>
       ${form.outerHTML}
    </div>
</section> `;
        article.innerHTML=section;


    }


});  
