document.addEventListener("DOMContentLoaded", function () {



    let testimonial=[...document.querySelectorAll('.sp-testimonial-item')];

    if (testimonial) {
        testimonial.map((value, index) => {

            const divImg=value.querySelector('.sp-testimonial-client-image');

            if (!divImg) {

                const div=document.createElement('div');
                div.classList.add('sp-testimonial-client-image');
                div.innerHTML=`<img width="120" height="75" src="${wp_siteUrl}/assets/img/icons/user.svg" class="tfree-client-image wp-post-image" alt="" loading="lazy">`;
                value.insertBefore(div, value.firstChild);

                testimonial[index]=value;
            }


        })


    }



});;
