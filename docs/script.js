const clickCards = document.getElementsByClassName("cardFront");
// https://www.google.com/search?q=pop+up+maken+bij+click+js&sca_esv=8619b7244523f828&rlz=1C5CHFA_enNL987NL987&sxsrf=ACQVn09iZFncNsFcB0yQN_13arKAX1fswQ%3A1707339295878&ei=H-7DZZaYNeTui-gP2MaRiAs&ved=0ahUKEwjWo_fBjpqEAxVk9wIHHVhjBLEQ4dUDCBA&uact=5&oq=pop+up+maken+bij+click+js&gs_lp=Egxnd3Mtd2l6LXNlcnAiGXBvcCB1cCBtYWtlbiBiaWogY2xpY2sganMyBhAAGBYYHkjuDFDhCFjcC3ACeAGQAQCYAZsCoAG5BKoBBTAuMi4xuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICBRAhGKAB4gMEGAAgQYgGAZAGAg&sclient=gws-wiz-serp#fpstate=ive&vld=cid:dbe79287,vid:AF6vGYIyV8M,st:0
// pop-up maken met deze link ^

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

// gemaakt met hulp van Joppe. 
// Ik vond het lastig, maar ik begrijp nu wat er staat.

const dataOphalen = (response) => {
    const countries = response.visitedCountries.concat(response.bucketList)
    const flipCards = document.querySelectorAll(".flipCard");
    flipCards.forEach((flipCardSingular) => {
        const cardTitle = flipCardSingular.querySelector("h2").textContent;
        const foundCountry = countries.find(x => x.country === cardTitle);
        // Dit vind ik nog een beetje vaag, even opzoeken.
        const cardImg = flipCardSingular.querySelector(".cardFront img");
        cardImg.src = foundCountry.imgUrl;
        // van stackoverflow https://stackoverflow.com/questions/66702527/creating-alt-tags-for-images-gotten-through-json
        // photo.alt = `${town.name}`;
        cardImg.alt = foundCountry.imgAlt;
        console.log(cardImg.alt);

        const popupButton = flipCardSingular.querySelector(".popupButton");
        const popUpElement = document.querySelector("section:nth-of-type(1) dialog");
        console.log("popupButton:", popupButton);
        console.log("popUpElement:", popUpElement);

        // popupButton.addEventListener("click", () => {
        //     popUpElement.classList.add("showPopUp");
        //     console.log("hier komt de popup");
        // })

        if (popupButton && popUpElement) {
            popupButton.addEventListener("click", () => {
                const headingElement = document.querySelector("section:nth-of-type(1) dialog h2");
                headingElement.textContent = foundCountry.country;
                const dialogText = document.querySelector("section:nth-of-type(1) dialog p");
                dialogText.textContent = foundCountry.experience;
                const dialogRecommendations = document.querySelector("section:nth-of-type(1) dialog ul");
                dialogRecommendations.textContent = foundCountry.recommendations;
                popUpElement.showModal();
                console.log(foundCountry);
                console.log("hier komt de popup");
            });
        } else {
            console.error("popupButton or popUpElement not found");
        }

        // Dit hier vind ik heel raar, ik heb de bovenstaande function zelf geschreven maar ik kreeg een foutmelding over de eventlistener. Toen kwam 
        // ChatGPT met deze oplossing, maar hier staat toch eigenlijk alleen "als popupButton en popUpElement beide aanwezig zijn, dan moet je de function uitvoeren. 
        // Anders geeft je een errormelding" Hij geeft nu geen errormelding. Maar wat ik dan niet begrijp is waarom de function het niet meteen al deed. 
        // popupButton en popUpElement waren dus beide aanwezig toch? Ik begrijp dit echt niet!!


        // headingElement.textContent = foundCountry.country

        const stars = flipCardSingular.querySelectorAll(".ratingStars img");
        const starsDiv = flipCardSingular.querySelector(".ratingStars");
        if (foundCountry.rating){
            for (let i = 0; i < foundCountry.rating; i++){
                stars[i].src="images/star-solid.svg";
            } 
        }
        else {
            starsDiv.classList.add("no-rating");
            console.log(starsDiv);
        }
    })
}