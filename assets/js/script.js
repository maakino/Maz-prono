document.addEventListener("DOMContentLoaded", function () {

    const curentPage=wp_curentUrl.split('/').pop();


    if (curentPage==='member') {
        const testimonialImg=document.createElement('img');
        const testimonialDiv=document.querySelector('#testimonialLinkContent');
        testimonialImg.setAttribute('src', wp_siteUrl+'/assets/img/icons/comment-solid.svg');
        testimonialImg.setAttribute('height', '20px')
        testimonialDiv.querySelector('a').after(testimonialImg);
    }



});
