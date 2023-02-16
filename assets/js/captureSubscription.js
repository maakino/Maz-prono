document.addEventListener("DOMContentLoaded", function () {

    const curentPage=wp_curentUrl.split('/').pop();

    if (curentPage==='paiement-dadhesion') {

        let form=document.querySelector("#pmpro_form")

        const btnSubmit=document.querySelector("#pmpro_submit_span");

        btnSubmit.style.display='none';

        const ListIdElement=[
            "#pmpro_pricing_fields",
            "#pmpro_user_fields",
            "#pmpro_billing_address_fields",
            "#pmpro_payment_information_fields"
        ]

        const ArrayElements=[];


        ListIdElement.forEach((_element) => {

            const element=document.querySelector(_element);
            if (element!==null) {
                element.style.display='none';
                ArrayElements.push(element);
            }

        });

        console.info("GET ARRAY ELEMENTS", ArrayElements);

        ArrayElements[0].style.display='block';

        const NUMBER_ARRAY_ELEMENTS=ArrayElements.length;
        let curentNumberElements=0;


        const btnNextElement=document.createElement("button");
        const btnPreviousElement=document.createElement("button");
        btnNextElement.innerText="Suivant";
        btnPreviousElement.innerText="Précédent";
        btnNextElement.attributes.type="button";
        btnPreviousElement.attributes.type="button";
        btnNextElement.className='btn';
        btnPreviousElement.className='btn';
        btnPreviousElement.style.display='none';

        const BtnContentElement=document.createElement("div");
        BtnContentElement.className='paiement_info-btn';




        btnNextElement.addEventListener('click', () => {

            curentNumberElements++;

            if (curentNumberElements>=1&&btnPreviousElement.style.display=='none') {

                btnPreviousElement.style.display='block';
            }

            if (curentNumberElements>=NUMBER_ARRAY_ELEMENTS-1) {

                btnNextElement.style.display='none';
                btnSubmit.style.display='block';
            }

            if (curentNumberElements<=NUMBER_ARRAY_ELEMENTS-1) {

                ArrayElements[curentNumberElements].style.display='block';

                /* boucle inverser */
                for (let index=curentNumberElements-1;index>=0;index--) {
                    console.info(index);
                    ArrayElements[index].style.display='none';


                }



            }

        });

        btnPreviousElement.addEventListener('click', () => {


            curentNumberElements--;

            if (curentNumberElements<=0) {

                btnPreviousElement.style.display='none';
            }

            if (curentNumberElements<NUMBER_ARRAY_ELEMENTS-1) {

                btnNextElement.style.display='block';
                btnSubmit.style.display='none';
            }

            if (curentNumberElements>=0) {

                ArrayElements[curentNumberElements].style.display='block';

                for (let index=curentNumberElements+1;index<NUMBER_ARRAY_ELEMENTS;index++) {
                    ArrayElements[index].style.display='none';


                }

            }

        });

        BtnContentElement.appendChild(btnPreviousElement);
        BtnContentElement.appendChild(btnNextElement);
        form.after(BtnContentElement)

    }



});

