

fetch("list.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP Error status: ${response.status}`);
        }
        return response.json();
    })
    .then((response) => {
    console.log(response);
    dataOphalen(response)
    }
    )

// gemaakt met hulp van Joppe en Jop. 
// Ik vond het lastig, maar ik begrijp nu wat er staat.

const dataOphalen = (response) => {
    // countries is mijn bezochte landen en mijn bucketlist landen bij elkaar. Gedaan met concat.
    const countries = response.visitedCountries.concat(response.bucketList)
    const flipCards = document.querySelectorAll(".flipCard");
    flipCards.forEach((flipCardSingular) => {
        // Een forEach functie om alle kaarten (flipcards) langs te gaan.
        const cardTitle = flipCardSingular.querySelector("h2").textContent;
        // Hier onder zegt het eigenlijk dat in elke kaart gezocht moet worden naar de h2 en daarvan de inhoud (dus welk land er staat in de h2)
        // En tussen alle landen wordt gezocht naar een country met dezelfde inhoud als de h2. Zo is de dus de juiste data bij het juiste kaartje.
        const foundCountry = countries.find(x => x.country === cardTitle);
        const cardImg = flipCardSingular.querySelector(".cardFront img");
        cardImg.src = foundCountry.imgUrl;
        // BRON: STACKOVERFLOW = https://stackoverflow.com/questions/66702527/creating-alt-tags-for-images-gotten-through-json
        // Ik wist niet of alt net als src gebruikt kon worden.
        cardImg.alt = foundCountry.imgAlt;
        console.log(cardImg.alt);

        // Met de button wordt de popup geopend.
        const popupButton = flipCardSingular.querySelector(".popupButton");
        const popUpElement = document.querySelector("section:nth-of-type(1) dialog");

        // Hier staat een stuk om te zorgen dat de rating uit json wordt vertaald in sterretjes.
        const stars = flipCardSingular.querySelectorAll(".ratingStars img");
        const starsDiv = flipCardSingular.querySelector(".ratingStars");
        if (foundCountry.rating){
            // Met een for loop gaan we de lege stars images af totdat de rating is bereikt en die worden gevuld.
            for (let i = 0; i < foundCountry.rating; i++){
                stars[i].src="images/star-solid.svg";
            } 
        }
        else {
            // De bucketlist landen hebben geen rating en krijgen dan een class "no-rating" erop met display:none.
            starsDiv.classList.add("no-rating");
        }

        popupButton.addEventListener("click", () => {
            const headingElement = document.querySelector("section:nth-of-type(1) dialog h2");
            // Hier wordt het land toegevoegd aan een h2 element in de popup
            headingElement.textContent = foundCountry.country;
            const dialogText = document.querySelector("section:nth-of-type(1) dialog p");
            // Hier gebruik ik een if else functie om af te vangen of er in de "p" in de popup de experience of de reason moet staan.
            if (foundCountry.experience){
                dialogText.textContent = foundCountry.experience;
            }
            else{
                dialogText.textContent = foundCountry.reason;
            }
            const dialogRecommendations = document.querySelector("section:nth-of-type(1) dialog ul");
            // Hier zet ik in de ul de recommendations en maak ik met een for each function bij elke recommendation een "li" item aan.
            dialogRecommendations.innerHTML = ""
            if (foundCountry.recommendations){
                foundCountry.recommendations.forEach((recommendation)=>{
                    // Hier maak ik het een constante voor het "li" item
                    const li = document.createElement("li");
                    li.textContent = recommendation;
                    // hier wordt het "li" item daadwerkelijk toegevoegd.
                    dialogRecommendations.append(li);
                })
            }
            // Dit zorgt ervoor dat de dialog in beeld komt wanneer je klikt op de button.
            popUpElement.showModal();
        });
    })
}

        // popupButton.addEventListener("click", () => {
        //     popUpElement.classList.add("showPopUp");
        //     console.log("hier komt de popup");
        // })


        // Dit hier vind ik heel raar, ik heb de bovenstaande function zelf geschreven maar ik kreeg een foutmelding over de eventlistener. Toen kwam 
        // ChatGPT met deze oplossing, maar hier staat toch eigenlijk alleen "als popupButton en popUpElement beide aanwezig zijn, dan moet je de function uitvoeren. 
        // Anders geeft je een errormelding" Hij geeft nu geen errormelding. Maar wat ik dan niet begrijp is waarom de function het niet meteen al deed. 
        // popupButton en popUpElement waren dus beide aanwezig toch? Ik begrijp dit echt niet!!