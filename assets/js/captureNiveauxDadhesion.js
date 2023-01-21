document.addEventListener("DOMContentLoaded", function () {


    const curentPage = wp_curentUrl.split('/').pop();

    if (curentPage === 'niveaux-dadhesion') {

        const tableNiveaux = document.querySelector('#pmpro_levels_table');
        const div = document.querySelector('article');
        div.innerHTML = "";
        const section = document.createElement('section');
        section.className = "card-container";
        section.classList.add('pricingGallery');
        div.appendChild(section);

        if (tableNiveaux) {


            const ArrayTd = [...tableNiveaux.querySelector('tbody').querySelectorAll('tr')];
            const ArrayFormule = [];
            ArrayTd.map((tr, index) => {

                const td = [...tr.querySelectorAll('td')];
                const value = {
                    name: td[0].innerHTML,
                    price: td[1].innerText.split('\n')[0],
                    description: td[1].innerText.split('\n')[1],
                    button: td[2].querySelector('a').outerHTML
                }
                ArrayFormule.push(value);
                console.log(value);

            });

            ArrayFormule.map((value, index) => {

                const card = `
                <div class="card">
                    <h2 class="title title-medium">${value.name}</h2>
                    <h2 class="title title-medium">${value.price}</h2>
                    <p>ACCÈS VIP</p>
                    <p>PRONO DU JOUR</p>
                    <p>COMBINÉ</p>
                    <p>COMBINÉ BONUS</p>
                    <p>COMBINÉ BUTTEURS</p>
                    <p>Montante</p>
                    <h3 class="title title-medium">25.00€</h3>
                    ${value.button}
                </div>`
                section.innerHTML += card;

            });
            const titlePage = document.createElement('h1');
            titlePage.innerText = "Nos offres";
            titlePage.className = "title";
            section.before(titlePage)

        }



    }


});
