document.addEventListener("DOMContentLoaded", function () {

    const curentPage = wp_curentUrl.split('/').pop();

    if (curentPage === 'paiement-dadhesion') {

        let form = document.querySelector("#pmpro_form")
        let newForm = ""
        if (form) {

            newForm = `
            <div class="paiement_info" id="info_block">
    <input type="hidden" id="level" name="level" value="2">
    <input type="hidden" id="checkjavascript" name="checkjavascript" value="1">
    <div id="pmpro_message" class="pmpro_message" style="display: none;"></div>
    <h3>
        <span class="pmpro_checkout-h3-name">Niveau d’adhésion</span>
        <span class="pmpro_checkout-h3-msg"><a href="${wp_curentUrl}">Changer d'offres</a></span>
    </h3>
    <div class="pmpro_checkout-fields">
        <p class="pmpro_level_name_text">
            Vous avez sélectionné l’adhésion <strong>vip</strong>. </p>


        <div id="pmpro_level_cost">

            <div class="pmpro_level_cost_text">
                <p>Le tarif est de <strong>25.00€ par Mois</strong>. </p>
            </div>

            <div class="pmpro_level_expiration_text">
                <p>L’adhésion expire après 31 Mois.</p>
            </div>
        </div> <!-- end #pmpro_level_cost -->


        <p id="other_discount_code_p" class="pmpro_small">Avez-vous un code de réduction ? <a id="other_discount_code_a" href="javascript:void(0);">  Cliquez ici pour entrer votre code de réduction</a>.</p>

        <div id="other_discount_code_tr" style="display: none;">
            <label for="other_discount_code">Code de remise</label>
            <input id="other_discount_code" name="other_discount_code" type="text" class="input pmpro_alter_price" size="20" value="">
            <input type="button" name="other_discount_code_button" id="other_discount_code_button" value="Appliquer">
        </div>
    </div>

    <div id="pmpro_account_loggedin" class="pmpro_message pmpro_alert">
        Vous êtes connecté en tant que <strong>admin </strong>. Si vous souhaitez utiliser un compte différent pour cette adhésion, <a href="${wp_siteUrl}/wp-login.php?action=logout&amp;redirect_to=%2Fpronos%2Fcompte-dadherent%2Fpaiement-dadhesion%2F&amp;_wpnonce=d7c7261ed8">déconnectez-vous maintenant</a>. </div>
</div>

<!-- Champs adresse -->
<div id="pmpro_billing_address_fields" class="pmpro_checkout">
    <hr>
    <h3>
        <span class="pmpro_checkout-h3-name">Adresse de facturation</span>
    </h3>

    <div class="pmpro_checkout-fields">

        <div id="adresse_block">
            <div class="adresse_blockInput">
                <div class="pmpro_checkout-field pmpro_checkout-field-bfirstname">
                    <label for="bfirstname">Prénom</label>
                    <input id="bfirstname" name="bfirstname" type="text" class="input pmpro_required" size="30" value="">
                    <span class="pmpro_asterisk"> <abbr title="Required Field">*</abbr></span>
                </div>

                <div class="pmpro_checkout-field pmpro_checkout-field-blastname">
                    <label for="blastname">Nom</label>
                    <input id="blastname" name="blastname" type="text" class="input pmpro_required" size="30" value="">
                    <span class="pmpro_asterisk"> <abbr title="Required Field">*</abbr></span>
                </div>
            </div>

            <div class="adresse_blockInput">
                <!-- end pmpro_checkout-field-blastname -->
                <div class="pmpro_checkout-field pmpro_checkout-field-baddress1">
                    <label for="baddress1">Adresse 1</label>
                    <input id="baddress1" name="baddress1" type="text" class="input pmpro_required" size="30" value="">
                    <span class="pmpro_asterisk"> <abbr title="Required Field">*</abbr></span>
                </div>
                <!-- end pmpro_checkout-field-baddress1 -->
                <div class="pmpro_checkout-field pmpro_checkout-field-baddress2">
                    <label for="baddress2">Adresse 2</label>
                    <input id="baddress2" name="baddress2" type="text" class="input" size="30" value="">
                </div>
            </div>


            <div class="adresse_blockInput">
                <!-- end pmpro_checkout-field-baddress2 -->
                <div class="pmpro_checkout-field pmpro_checkout-field-bcity">
                    <label for="bcity">Ville</label>
                    <input id="bcity" name="bcity" type="text" class="input pmpro_required" size="30" value="">
                    <span class="pmpro_asterisk"> <abbr title="Required Field">*</abbr></span>
                </div> <!-- end pmpro_checkout-field-bcity -->
                <div class="pmpro_checkout-field pmpro_checkout-field-bstate">
                    <label for="bstate">Région</label>
                    <input id="bstate" name="bstate" type="text" class="input pmpro_required" size="30" value="">
                    <span class="pmpro_asterisk"> <abbr title="Required Field">*</abbr></span>
                </div>
            </div>

            <div class="adresse_blockInput">
                <!-- end pmpro_checkout-field-bstate -->
                <div class="pmpro_checkout-field pmpro_checkout-field-bzipcode">
                    <label for="bzipcode">Code postal</label>
                    <input id="bzipcode" name="bzipcode" type="text" class="input pmpro_required" size="30" value="">
                    <span class="pmpro_asterisk"> <abbr title="Required Field">*</abbr></span>
                </div> <!-- end pmpro_checkout-field-bzipcode -->

                <div class="pmpro_checkout-field pmpro_checkout-field-bcountry">
                    <label for="bcountry">Pays</label>
                    <select name="bcountry" id="bcountry" class=" pmpro_required">
                        <option value="AF">Afghanistan</option>
                        <option value="ZA">Afrique du Sud</option>
                        <option value="AL">Albanie</option>
                        <option value="DZ">Algérie</option>
                        <option value="DE">Allemagne</option>
                        <option value="AD">Andorre</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antartique</option>
                        <option value="AG">Antigua-et-Barbuda</option>
                        <option value="AN">Antilles néerlandaises</option>
                        <option value="SA">Arabie Saoudite</option>
                        <option value="AR">Argentine</option>
                        <option value="AM">Arménie</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australie</option>
                        <option value="AT">Autriche</option>
                        <option value="AZ">Azerbaïdjan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahreïn</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbade</option>
                        <option value="BE">Belgique</option>
                        <option value="BM">Bermudes</option>
                        <option value="BT">Bhoutan</option>
                        <option value="MM">Birmanie</option>
                        <option value="BY">Biélorussie</option>
                        <option value="BO">Bolivie</option>
                        <option value="BA">Bosnie-Herzégovine</option>
                        <option value="BW">Botswana</option>
                        <option value="BN">Brunei</option>
                        <option value="BR">Brésil</option>
                        <option value="BG">Bulgarie</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="BZ">Bélize</option>
                        <option value="BJ">Bénin</option>
                        <option value="KH">Cambodge</option>
                        <option value="CM">Cameroun</option>
                        <option value="CA">Canada</option>
                        <option value="CV">Cap-Vert</option>
                        <option value="CL">Chili</option>
                        <option value="CN">Chine</option>
                        <option value="CY">Chypre</option>
                        <option value="CO">Colombie</option>
                        <option value="KM">Comores</option>
                        <option value="CG">Congo (Brazzaville)</option>
                        <option value="CD">Congo (Kinshasa)</option>
                        <option value="KP">Corée du Nord</option>
                        <option value="KR">Corée du Sud</option>
                        <option value="CR">Costa Rica</option>
                        <option value="HR">Croatie</option>
                        <option value="CU">Cuba</option>
                        <option value="CI">Côte d’Ivoire</option>
                        <option value="DK">Danemark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominique</option>
                        <option value="ES">Espagne</option>
                        <option value="EE">Estonie</option>
                        <option value="FJ">Fidji</option>
                        <option value="FI">Finlande</option>
                        <option value="USAF">Forces armées américaines</option>
                        <option value="FR">France</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambie</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GD">Grenade</option>
                        <option value="GL">Groenland</option>
                        <option value="GR">Grèce</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatémala</option>
                        <option value="GG">Guernesey</option>
                        <option value="GN">Guinée</option>
                        <option value="GQ">Guinée équatoriale</option>
                        <option value="GW">Guinée-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="GF">Guyane française</option>
                        <option value="GE">Géorgie</option>
                        <option value="GS">Géorgie du Sud et Îles Sandwich du Sud</option>
                        <option value="HT">Haïti</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong-Kong</option>
                        <option value="HU">Hongrie</option>
                        <option value="IN">Inde</option>
                        <option value="ID">Indonésie</option>
                        <option value="IQ">Irak</option>
                        <option value="IR">Iran</option>
                        <option value="IE">Irlande</option>
                        <option value="IS">Islande</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italie</option>
                        <option value="JM">Jamaïque</option>
                        <option value="JP">Japon</option>
                        <option value="JE">Jersey</option>
                        <option value="JO">Jordanie</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KG">Kirghizistan</option>
                        <option value="KI">Kiribati</option>
                        <option value="KW">Koweït</option>
                        <option value="LA">Laos</option>
                        <option value="SV">Le Salvador</option>
                        <option value="LS">Lesotho</option>
                        <option value="LV">Lettonie</option>
                        <option value="LB">Liban</option>
                        <option value="LY">Libye</option>
                        <option value="LR">Libéria</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lituanie</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macao</option>
                        <option value="MK">Macédoine du Nord</option>
                        <option value="MG">Madagascar</option>
                        <option value="MY">Malaisie</option>
                        <option value="MW">Malawi</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malte</option>
                        <option value="MA">Maroc</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritanie</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexique</option>
                        <option value="FM">Micronésie</option>
                        <option value="MD">Moldavie</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolie</option>
                        <option value="MS">Montserrat</option>
                        <option value="ME">Monténégro</option>
                        <option value="MZ">Mozambique</option>
                        <option value="NA">Namibie</option>
                        <option value="NR">Nauru</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NO">Norvège</option>
                        <option value="NC">Nouvelle-Calédonie</option>
                        <option value="NZ">Nouvelle-Zélande</option>
                        <option value="NP">Népal</option>
                        <option value="OM">Oman</option>
                        <option value="UG">Ouganda</option>
                        <option value="UZ">Ouzbékistan</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palaos</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papouasie-Nouvelle-Guinée</option>
                        <option value="PY">Paraguay</option>
                        <option value="NL">Pays-Bas</option>
                        <option value="PH">Philippines</option>
                        <option value="PL">Pologne</option>
                        <option value="PF">Polynésie française</option>
                        <option value="PR">Porto Rico</option>
                        <option value="PT">Portugal</option>
                        <option value="PE">Pérou</option>
                        <option value="QA">Qatar</option>
                        <option value="RO">Roumanie</option>
                        <option value="GB">Royaume-Uni</option>
                        <option value="RU">Russie</option>
                        <option value="RW">Rwanda</option>
                        <option value="CF">République Centrafricaine</option>
                        <option value="DO">République Dominicaine</option>
                        <option value="CZ">République Tchèque</option>
                        <option value="EH">Sahara occidental</option>
                        <option value="BL">Saint-Barthélémy</option>
                        <option value="KN">Saint-Christophe-et-Nevis</option>
                        <option value="SM">Saint-Marin</option>
                        <option value="MF">Saint-Martin (partie française)</option>
                        <option value="PM">Saint-Pierre-et-Miquelon</option>
                        <option value="VC">Saint-Vincent-et-les-Grenadines</option>
                        <option value="SH">Sainte-Hélène</option>
                        <option value="LC">Sainte-Lucie</option>
                        <option value="WS">Samoa</option>
                        <option value="AS">Samoa américaines</option>
                        <option value="ST">Sao Tomé-et-Principe</option>
                        <option value="RS">Serbie</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapour</option>
                        <option value="SK">Slovaquie</option>
                        <option value="SI">Slovénie</option>
                        <option value="SO">Somalie</option>
                        <option value="SD">Soudan</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="CH">Suisse</option>
                        <option value="SR">Suriname</option>
                        <option value="SE">Suède</option>
                        <option value="SJ">Svalbard et Jan Mayen</option>
                        <option value="SZ">Swaziland</option>
                        <option value="SY">Syrie</option>
                        <option value="SN">Sénégal</option>
                        <option value="TJ">Tadjikistan</option>
                        <option value="TZ">Tanzanie</option>
                        <option value="TW">Taïwan</option>
                        <option value="TD">Tchad</option>
                        <option value="TF">Terres australes et antarctiques françaises</option>
                        <option value="IO">Territoire britannique de l’océan Indien</option>
                        <option value="PS">Territoires Palestiniens</option>
                        <option value="TH">Thaïlande</option>
                        <option value="TL">Timor oriental</option>
                        <option value="TG">Togo</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinité-et-Tobago</option>
                        <option value="TN">Tunisie</option>
                        <option value="TM">Turkménistan</option>
                        <option value="TR">Turquie</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UA">Ukraine</option>
                        <option value="UY">Uruguay</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VA">Vatican</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Vietnam</option>
                        <option value="WF">Wallis-et-Futuna</option>
                        <option value="YE">Yémen</option>
                        <option value="ZM">Zambie</option>
                        <option value="ZW">Zimbabwe</option>
                        <option value="EG">Égypte</option>
                        <option value="AE">Émirats Arabes Unis</option>
                        <option value="EC">Équateur</option>
                        <option value="ER">Érythrée</option>
                        <option value="US" selected="selected">États-Unis</option>
                        <option value="ET">Éthiopie</option>
                        <option value="BV">Île Bouvet</option>
                        <option value="CX">Île Christmas</option>
                        <option value="MU">Île Maurice</option>
                        <option value="NF">Île Norfolk</option>
                        <option value="IM">Île de Man</option>
                        <option value="RE">Île de la Réunion</option>
                        <option value="KY">Îles Caïmans</option>
                        <option value="CC">Îles Cocos (Keeling)</option>
                        <option value="CK">Îles Cook</option>
                        <option value="FK">Îles Falkland</option>
                        <option value="FO">Îles Féroé</option>
                        <option value="HM">Îles Heard-et-MacDonald</option>
                        <option value="MP">Îles Mariannes du Nord</option>
                        <option value="MH">Îles Marshall</option>
                        <option value="PN">Îles Pitcairn</option>
                        <option value="SB">Îles Salomon</option>
                        <option value="TK">Îles Tokélaou</option>
                        <option value="TC">Îles Turques-et-Caïques</option>
                        <option value="VG">Îles Vierges britanniques</option>
                        <option value="VI">Îles Vierges des États-Unis</option>
                        <option value="UM">Îles mineures éloignées des États-Unis</option>
                        <option value="AX">Îles Åland</option>
                    </select>
                    <span class="pmpro_asterisk"> <abbr title="Required Field">*</abbr></span>
                </div> <!-- end pmpro_checkout-field-bcountry -->
                </div>
            <div class="adresse_blockInput">
                <div class="pmpro_checkout-field pmpro_checkout-field-bphone">
                    <label for="bphone">Téléphone</label>
                    <input id="bphone" name="bphone" type="text" class="input pmpro_required" size="30" value="">
                    <span class="pmpro_asterisk"> <abbr title="Required Field">*</abbr></span>
                </div>
                
            <!-- end pmpro_checkout-field-bphone -->
            <div class="pmpro_checkout-field pmpro_checkout-field-bemail">
                <label for="bemail">Adresse e-mail</label>
                <input id="bemail" name="bemail" type="email" class="input pmpro_required" size="30" value="teddygoss1@hotmail.com">
                <span class="pmpro_asterisk"> <abbr title="Required Field">*</abbr></span>
            </div> <!-- end pmpro_checkout-field-bemail -->
            </div>

            <div class="pmpro_checkout-field pmpro_checkout-field-bconfirmemail">
                <label for="bconfirmemail">Confirmez l’e-mail</label>
                <input id="bconfirmemail" name="bconfirmemail" type="email" class="input pmpro_required" size="30" value="teddygoss1@hotmail.com">
                <span class="pmpro_asterisk"> <abbr title="Required Field">*</abbr></span>
            </div>
        </div> <!-- end pmpro_checkout-field-bconfirmemail -->
    </div> <!-- end pmpro_checkout-fields -->
</div>

<!-- champs paiment -->
<div id="paiement_block">
    <h3>
        <span class="pmpro_checkout-h3-name">Informations de paiement</span>
        <span class="pmpro_checkout-h3-msg">Nous acceptons toutes les principales cartes de crédit</span>
    </h3>
    <div class="pmpro_checkout-fields">
        <input type="hidden" id="CardType" name="CardType" value="Unknown Card Type">
        <div class="pmpro_checkout-field pmpro_payment-account-number">
            <label for="AccountNumber">Numéro de la carte</label>
            <div id="AccountNumber" class="StripeElement StripeElement--empty">
                <div class="__PrivateStripeElement"><iframe  name="__privateStripeFrame0436" frameborder="0" allowtransparency="true" scrolling="no" role="presentation" allow="payment *" src="https://js.stripe.com/v3/elements-inner-card-8d1792974815ae2e1197cebc39c9f046.html#locale=auto&amp;wait=false&amp;mids[guid]=NA&amp;mids[muid]=NA&amp;mids[sid]=NA&amp;rtl=false&amp;componentName=cardNumber&amp;keyMode=test&amp;apiKey=pk_test_QAdf5s3X1BEW3sakhdhuqpQO&amp;referrer=http%3A%2F%2Flocalhost%2Fpronos%2Fcompte-dadherent%2Fpaiement-dadhesion%2F&amp;controllerId=__privateStripeController0431" title="Cadre sécurisé pour la saisie du numéro de carte"  ></iframe ><input class="__PrivateStripeElement-input" aria-hidden="true" aria-label=" " autocomplete="false" maxlength="1"></div>
            </div>
        </div>
        <div class="pmpro_checkout-field pmpro_payment-expiration">
            <label for="Expiry">Date d’expiration</label>
            <div id="Expiry" class="StripeElement StripeElement--empty">
                <div class="__PrivateStripeElement"><iframe name="__privateStripeFrame0437" frameborder="0" allowtransparency="true" scrolling="no" role="presentation" allow="payment *" src="https://js.stripe.com/v3/elements-inner-card-8d1792974815ae2e1197cebc39c9f046.html#locale=auto&amp;wait=false&amp;mids[guid]=NA&amp;mids[muid]=NA&amp;mids[sid]=NA&amp;rtl=false&amp;componentName=cardExpiry&amp;keyMode=test&amp;apiKey=pk_test_QAdf5s3X1BEW3sakhdhuqpQO&amp;referrer=http%3A%2F%2Flocalhost%2Fpronos%2Fcompte-dadherent%2Fpaiement-dadhesion%2F&amp;controllerId=__privateStripeController0431" title="Cadre sécurisé pour la saisie de la date d'expiration" style="padding:20px !important;" ></iframe><input class="__PrivateStripeElement-input" aria-hidden="true" aria-label=" " autocomplete="false" maxlength="1"></div>
            </div>
        </div>
        <div class="pmpro_checkout-field pmpro_payment-cvv">
            <label for="CVV">Cryptogramme</label>
            <div id="CVV" class="StripeElement StripeElement--empty">
                <div class="__PrivateStripeElement"><iframe name="__privateStripeFrame0438" frameborder="0" allowtransparency="true" scrolling="no" role="presentation" allow="payment *" src="https://js.stripe.com/v3/elements-inner-card-8d1792974815ae2e1197cebc39c9f046.html#locale=auto&amp;wait=false&amp;mids[guid]=NA&amp;mids[muid]=NA&amp;mids[sid]=NA&amp;rtl=false&amp;componentName=cardCvc&amp;keyMode=test&amp;apiKey=pk_test_QAdf5s3X1BEW3sakhdhuqpQO&amp;referrer=http%3A%2F%2Flocalhost%2Fpronos%2Fcompte-dadherent%2Fpaiement-dadhesion%2F&amp;controllerId=__privateStripeController0431" title="Cadre sécurisé pour la saisie du code de sécurité CVC" ></iframe><input class="__PrivateStripeElement-input" aria-hidden="true" aria-label=" " autocomplete="false" maxlength="1"></div>
            </div>
        </div>
        <div class="pmpro_checkout-field pmpro_payment-discount-code">
            <label for="discount_code">Code de remise</label>
            <input class="input pmpro_alter_price" id="discount_code" name="discount_code" type="text" size="10" value="">
            <input type="button" id="discount_code_button" name="discount_code_button" value="Appliquer">
            <p id="discount_code_message" class="pmpro_message" style="display: none;"></p>
        </div>
    </div>
    <div class="pmpro_checkout-field pmpro_captcha">
    </div>


    <div class="pmpro_submit">
        <hr>
        <div id="pmpro_message_bottom" class="pmpro_message" style="display: none;"></div>

        <span id="pmpro_submit_span">
            <input type="hidden" name="submit-checkout" value="1"><input type="hidden" name="javascriptok" value="1">
            <input type="submit" id="pmpro_btn-submit" class="pmpro_btn pmpro_btn-submit-checkout" value="Soumettre et payer »">
        </span>
        <span id="pmpro_processing_message" style="visibility: hidden;">
            Traitement en cours ... </span>
    </div>
</div>
            ` };
        form.innerHTML = newForm;



        const info_block = document.getElementById('info_block');
        const adresse_block = document.getElementById('adresse_block');
        const paiement_block = document.getElementById('paiement_block');
        adresse_block.style.display = 'none';
        paiement_block.style.display = 'none';

        const btnNext = document.createElement("button");
        const btnPrevious = document.createElement("button");
        const div = document.createElement("div");
        let curentForm = "info_block";

        div.className= 'paiement_info-btn';

        btnNext.innerText = "Suivant";
        btnPrevious.innerText = "Précédent";


        btnNext.attributes.type = "button";
        btnPrevious.attributes.type = "button";
        btnNext.className = 'btn';
        btnPrevious.className = 'btn';
        btnNext.addEventListener('click', () => {

            if (curentForm == "info_block") {
                info_block.style.display = 'none';
                adresse_block.style.display = 'block';
                curentForm = "adresse_block";
            } else if (curentForm == "adresse_block") {
                adresse_block.style.display = 'none';
                paiement_block.style.display = 'block';
                curentForm = "paiement_block";
            }

        });

        btnPrevious.addEventListener('click', () => {

            if (curentForm == "paiement_block") {
                paiement_block.style.display = 'none';
                adresse_block.style.display = 'block';
                curentForm = "adresse_block";
            } else if (curentForm == "adresse_block") {
                adresse_block.style.display = 'none';
                info_block.style.display = 'block';
                curentForm = "info_block";
            }
        });
        div.appendChild(btnPrevious);
        div.appendChild(btnNext);
        form.after(div)

    }



});
