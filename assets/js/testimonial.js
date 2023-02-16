document.addEventListener("DOMContentLoaded", function () {


    const allImg=[...document.querySelectorAll('.imgupdate-circle-img')];

    if (allImg) {

        allImg.map((value, index) => {

            allImg[index].src=`${wp_siteUrl}/assets/img/icons/user.svg`;
            allImg[index].setAttribute('width', '100px');
            allImg[index].setAttribute('height', '100px');

            allImg[index].setAttribute('alt', "avatar générique utilisateur pour les témoignages");

        })
    }


});
