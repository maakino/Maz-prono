document.addEventListener("DOMContentLoaded", function () {


    const curentPage=wp_curentUrl.split('/').pop();


    if (is_home==="1"|curentPage==='niveaux-dadhesion') {

        let div=null;
        let section=null;

        const LevelBlock=[...document.querySelectorAll('.pmpro_level 			')];

        if (is_home==="1") {
            div=document.getElementById('pricing');
            div.innerHTML=""
        }


        if (curentPage==='niveaux-dadhesion') {
            div=document.querySelector('article');

            section=document.createElement('section');
            section.className="card-container";
            section.classList.add('pricingGallery');
            div.innerHTML=""
            div.appendChild(section);
        }

        LevelBlock.map((elementHtml, index) => {

            const title=elementHtml.querySelector("h2").innerText;
            const price=elementHtml.querySelector(".pmpro_level-price").innerText;
            const button=elementHtml.querySelector(".pmpro_btn").outerHTML;
            const statusAdhesion=elementHtml.querySelector(".entry-meta").innerText;



            const card=createCard({
                name: title,
                price: price.split(' ')[0],
                button: button,
                statusAdhesion: statusAdhesion
            });
            if (is_home==="1") {
                div.innerHTML+=card;
            } else {
                section.innerHTML+=card;

            }


        });

        if (curentPage==='niveaux-dadhesion') {
            const titlePage=document.createElement('h1');
            titlePage.innerText="Nos offres";
            titlePage.className="title";
            section.before(titlePage)
        }


    }

    function createCard({ name, price, button, statusAdhesion }) {

        const card=`
                <div class="card">
                    <div class="card__header"> 
                        ${textLineThrough(name)}
                    </div>
                    <h3 class="title title-medium" style="color:#111111">${price}</h3>

                <div class="card__content"> 
                    <p>ACCÈS VIP</p>
                    <p>PRONO DU JOUR</p>
                    <p>COMBINÉ</p>
                    <p>COMBINÉ BONUS</p>
                    <p>COMBINÉ BUTTEURS</p>
                    <p>Montante</p>
                </div>
                ${button}

                <div class="card__footer"> 
                    <small>${statusAdhesion}</small>
                    </div>
                </div>`

        return card;
    }

    function textLineThrough(text) {
        const ArrayText=text.split("/");
        if (ArrayText.length>1) {
            return `  <h2 class="title title-medium">${ArrayText[0]}/<span class="line-through">${ArrayText[1]}</span></h2>`
        }

        return `<h2 class="title title-medium">${text}</h2>`;



    }
});

