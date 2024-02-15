# Web App From Scratch @cmda-minor-web 2023 - 2024
                                      |             |)

## Procesverslag
## Week 1, maandag 05-02-2024
Maandag begonnen we WAFS met met een uitleg over de opdracht. Ik moet eerlijk zeggen dat ik behoorlijk schrok van de hoeveelheid werk dat we moesten doen in een korte tijd. Ik benoemde mezelf een junior omdat ik vrij weinig weet van javascript en alles daarom heen. Als junior werd ik met Jop in een team gezet en daarbij kwamen Joppe en Lynn, twee mediums. Samen gingen we kijken wat onze interesses waren en waar onze verschillen lagen. We kwamen op het thema reizen en begonnen aan een leuk idee voor onze team-app. We maakten een lijst van alle data die we nodig hadden voor de team-app en dus ook welke data we in onze persoonlijke app moesten verwerken. Ik begon met wat schetsjes en ik besloot al snel om een leuk, maar simpel design te maken om een beetje op te maken voor mijn gebrek aan kennis op tech gebied.



![Design van de app](/images/design-schets.png)
![grid uitgeschetst voor desktop](/images/grid-desktop.png)
![grid uitgeschetst voor mobile](/images/grid-mobile.png)

### Week 1, dinsdag 06-02-2024
Dinsdag begon ik met het opstellen van mijn persoonlijke app. Een beetje html en een leuk grid ontwerpen. Ook een flip card systeem opgezocht en die werkzaam gemaakt in mijn code.

### Week 1, woensdag 07-02-2024
Woensdag stond in het teken van responsiveness. Het duurde me een eeuwigheid om het grid van desktop naar mobile om te bouwen. Uiterraad was ik niet mobile first begonnen :( Toch lukte het na een tijdje gelukkig. Samen met Joppe had ik data kunnen ophalen uit mijn json bestand. Ik vond dat echt heel erg lastig en moest telkens vragen waarom ik iets moest doen of op die manier moest verwoorden.

### Week 1, donderdag 08-02-2024
Donderdag werd ik helaas ziek wakker en kon ik niet naar school komen. We besloten om samen een teams call te doen om de team-app te bespreken. Hierin hebben we een ontwerp bedacht voor de app en is Lynn die netjes gaan uitwerken.

### Week 1, vrijdag 09-02-2024
Vrijdag was ik weer op school en heb ik nog verder gewerkt aan de states van mijn design en begon ik met het maken van een pop-up wanneer je op een button op een kaartje zou klikken. Hier ging ik in mijn eentje werken aan de script, ik moet eerlijk bekennen dat het vrij dramatisch was en ik al snel afhaakte.

### Week 1, zaterdag en zondag 10/11-02-2024
Vrijdag na school sloeg die griep dat ik donderdag had opgelopen pas echt toe, waardoor ik het hele weekend ziek op bed lag. Ik heb zondagavond nog eventjes naar de script gekeken en ik liep tegen behoorlijk wat dingetjes aan:
1.  Ik wilde een button in mijn kaartelementen klikbaar maken om vervolgens een class op een pop-up element te kunnen zetten. Om de een of andere reden wilde dit stukje code niet werken tot dat ik aan chatGPT vroeg hoe ik dat probleem kon oplossen. chatGPT kwam met een goede oplossing, maar een oplossing die ik totaal niet begreep. Ik had het volgende stukje code geschreven:

        popupButton.addEventListener("click", () => {
             popUpElement.classList.add("showPopUp");
             console.log("hier komt de popup");
         })

chatGPT maakte dit ervan:

if (popupButton && popUpElement) {
            popupButton.addEventListener("click", () => {
                popUpElement.classList.add("showPopUp");
                console.log("hier komt de popup");

            });
        } else {
            console.error("popupButton or popUpElement not found");
        }

Ik begrijp wat hier staat, dus ik zou verwachten dat hier de error melding in de console zou verschijnen. Maar niets was minder waar. Dit begrijp ik niet, waarom zou mijn stukje code dan niet werken als popupButton en popUpElement er dus beide wel zijn? (zie gesprek met chatGPT hieronder, het is nogal rommelig.)

![foutmelding in de console](/images/foutmelding.png)

2. Mijn tweede grote probleem was dat mijn styling niet mee wil werken. Ik had met javascript een class gezet op een element bij het klikken van een button. In de inspector kan ik zien dat de class inderdaad op het element wordt gezet, maar wanneer ik die class in CSS probeer te stylen, doet sommige styling het wel en andere niet. Background-color en visibility bijvoorbeeld doen het niet, maar borderradius doet het wel. Error niet in de console, maar in mijn hoofd. 

![problemen met mijn javascript en css](/images/probleem-met-function-en-foutmelding.png)

### Week 2, maandag 12-02-2024
Maandag kwamen we allemaal naar school om te werken aan de team-app en onze persoonlijke app. Jop heeft me maandag geholpen met de problemen die ik tegen kwam op zondag. Door het in een dialog te zetten en de code daar in op te halen, waren meteen al mijn problemen opgelost. Verder heb ik deze dag nog veel styling gedaan.

### Week 2, dinsdag 12-02-2024
Dinsdag was de dag dat ik had geprobeerd mijn persoonlijke app zo goed als af te maken, zodat ik woensdag de hele dag aan de styling van de team app zou kunnen werken. Ik heb dus dinsdag voornamelijk mijn code opgeschoond en een aantal tests gedaan. Accecebility van mijn app is niet al te best door de flipcards die geen focus willen krijgen met tab. Ik kreeg dit niet zelf voor elkaar om toch te regelen. Contrast test waren goed en ook op mobiel werkt alles prima. 

### Week 2, woensdag 12-02-2024
Woensdag stond voor mij in het teken van de team app. Ik heb de sidebar gestyled en alles responsive gemaakt. Verder hebben we samen nog wat bugs opgelost.

## Description of my work
Mijn app is een leuke weergave van mijn vakantie bestemmingen en welke landen er nog op mijn bucketlist staan. Je kan een klein stukje lezen over elk land.

## Posterimage of my work
![homepage van mijn app](/images/posterimage.png)

## checklist
Wat ik graag nog had willen doen was het meer accesible maken. We kregen de dag van de deadline een leuke presentatie over de accesibility en daarna wilde ik heel graag daar verder aan werken, maar daar had ik niet genoeg tijd meer voor.

## License
Ik heb op advies van Jop en Joppe een MIT lisence toegevoegd. 





## chatGPT conversation
Dit is mijn conversatie die ik zondag had met chatGPT over alle foutmeldingen en mijn code.



User
hi hi
ChatGPT
Hello! How can I assist you today? If you have any questions or need help with something, feel free to let me know!

User
ik heb een stuk code geschreven en ik kan wat hulp gebruiken
ChatGPT
Natuurlijk, ik help je graag! Laat me weten welk deel van de code je vragen over hebt of waar je hulp bij nodig hebt, en ik zal mijn best doen om je bij te staan.

User
const dataOphalen = (response) => {
    const countries = response.visitedCountries.concat(response.bucketList)
    const flipCards = document.querySelectorAll(".flipCard");
    flipCards.forEach((flipCardSingular) => {
        const cardTitle = flipCardSingular.querySelector("h2").textContent
        const foundCountry = countries.find(x => x.country === cardTitle);
        // Dit vind ik nog een beetje vaag, even opzoeken.
        const cardImg = flipCardSingular.querySelector(".cardFront img");
        cardImg.src = foundCountry.imgUrl
        // van stackoverflow https://stackoverflow.com/questions/66702527/creating-alt-tags-for-images-gotten-through-json
        // photo.alt = `${town.name}`;
        cardImg.alt = foundCountry.imgAlt
        console.log(cardImg.alt)
        const stars = flipCardSingular.querySelectorAll(".ratingStars img") 
        const starsDiv = flipCardSingular.querySelector(".ratingStars")
        if (foundCountry.rating){
            for (let i = 0; i < foundCountry.rating; i++){
                stars[i].src="images/star-solid.svg"
            } 
        }
        else {
            starsDiv.classList.add("no-rating");
            console.log(starsDiv)
        }

    })
} 
ChatGPT
It looks like you have a function dataOphalen that processes some data and updates elements on the page based on that data. Overall, it seems well-structured. If there's a specific aspect you'd like help with or if you have any questions about the code, feel free to ask!

One thing to note: when working with the alt attribute for images, it's typically used to provide alternative text for users who cannot view the image. In your code, you're setting cardImg.alt to foundCountry.imgAlt, which seems correct. Just make sure that the imgAlt property of your foundCountry object contains appropriate alternative text for the image.

If you have any specific questions or if there's a particular part you're unsure about, let me know!

User
Dit stuk code werkt goed inderdaad. Alleen wil ik er nu een stuk aan toevoegen om de button in de flipCardSingular klikbaar te maken. Wanneer je op de button zou klikken, moet er een popup verschijnen.
ChatGPT
Om de button in de flipCardSingular klikbaar te maken en een popup te laten verschijnen wanneer erop wordt geklikt, kun je het volgende toevoegen aan je code:

Voeg een button-element toe aan je HTML-structuur binnen de flipCardSingular. Bijvoorbeeld:
html
Copy code
<div class="flipCard">
    <h2>Card Title</h2>
    <!-- Andere inhoud van flipCard -->

    <!-- Nieuwe button toevoegen -->
    <button class="popupButton">Open Popup</button>
</div>
Update je JavaScript-code om een klikgebeurtenis toe te voegen aan de nieuwe button en om een popup weer te geven. Hier is een eenvoudig voorbeeld:
javascript
Copy code
const dataOphalen = (response) => {
    // ... (huidige code)

    flipCards.forEach((flipCardSingular) => {
        // ... (huidige code)

        // Nieuwe button element selecteren
        const popupButton = flipCardSingular.querySelector(".popupButton");

        // Event listener toevoegen voor de button
        popupButton.addEventListener('click', () => {
            // Hier kun je de logica toevoegen om de popup weer te geven
            alert(`Popup geopend voor ${cardTitle}`);
        });
    })
}
In dit voorbeeld wordt een eenvoudige alert gebruikt om een popup weer te geven wanneer de button wordt geklikt. Je kunt deze logica aanpassen aan jouw specifieke behoeften, bijvoorbeeld door een aangepaste popup-HTML-structuur toe te voegen en die weer te geven wanneer de button wordt geklikt.

Pas de logica binnen de event listener aan op basis van wat je precies wilt bereiken met de popup. Als je meer hulp nodig hebt of specifieke vereisten hebt, laat het me dan weten!

User
oke dankjewel. Ik had dit ervan gemaakt. kan je daar naar kijken? 
ChatGPT
Natuurlijk, ik kijk er graag naar. Als je de code waar je aan hebt gewerkt wilt delen, kan ik je helpen bij het controleren en eventuele suggesties geven.

User
const dataOphalen = (response) => {
    const countries = response.visitedCountries.concat(response.bucketList)
    const flipCards = document.querySelectorAll(".flipCard");
    flipCards.forEach((flipCardSingular) => {
        const cardTitle = flipCardSingular.querySelector("h2").textContent
        const foundCountry = countries.find(x => x.country === cardTitle);
        // Dit vind ik nog een beetje vaag, even opzoeken.
        const cardImg = flipCardSingular.querySelector(".cardFront img");
        cardImg.src = foundCountry.imgUrl
        // van stackoverflow https://stackoverflow.com/questions/66702527/creating-alt-tags-for-images-gotten-through-json
        // photo.alt = `${town.name}`;
        cardImg.alt = foundCountry.imgAlt
        console.log(cardImg.alt)
        const stars = flipCardSingular.querySelectorAll(".ratingStars img") 
        const starsDiv = flipCardSingular.querySelector(".ratingStars")
        if (foundCountry.rating){
            for (let i = 0; i < foundCountry.rating; i++){
                stars[i].src="images/star-solid.svg"
            } 
        }
        else {
            starsDiv.classList.add("no-rating");
            console.log(starsDiv)
        }
        const buttonElement = flipCardSingular.querySelector(".cardback button");
        const popUpElement = flipCardSingular.querySelector(".cardback .popUp");
        buttonElement.addEventListener("click", openPopUp);
        function openPopUp (){
            popUpElement.classList.add("showPopUp")
            console.log("popup komt hier te staan")
        }
    })
}
ChatGPT
Je code ziet er over het algemeen goed uit! Je hebt een button-element toegevoegd aan de .cardback-sectie van je .flipCard, en je hebt een event listener toegevoegd om een popup te tonen wanneer erop wordt geklikt. Hier zijn een paar kleine opmerkingen en suggesties:

Zorg ervoor dat je de DOM volledig hebt geladen voordat je probeert elementen op te halen. Je kunt dit bereiken door de code in een DOMContentLoaded event listener te plaatsen, zoals hieronder:

javascript
Copy code
document.addEventListener('DOMContentLoaded', () => {
    // Hier komt je huidige code
});
Zorg ervoor dat je elementen op een veilige manier selecteert, vooral als je niet zeker weet of de elementen altijd aanwezig zullen zijn. Bijvoorbeeld:

javascript
Copy code
const buttonElement = flipCardSingular.querySelector(".cardback button");
const popUpElement = flipCardSingular.querySelector(".cardback .popUp");

if (buttonElement && popUpElement) {
    buttonElement.addEventListener("click", openPopUp);

    function openPopUp() {
        popUpElement.classList.add("showPopUp");
        console.log("popup komt hier te staan");
    }
}
Dit voorkomt mogelijke fouten als de elementen niet gevonden kunnen worden.

Zorg ervoor dat je stijlen hebt gedefinieerd voor de "showPopUp" klasse, zodat de popup correct wordt weergegeven.

css
Copy code
.showPopUp {
    display: block; /* of flex, afhankelijk van je layout */
}
Met deze aanpassingen zou je code goed moeten werken. Als je verdere vragen hebt of hulp nodig hebt, laat het me dan gerust weten!

User
ik krijg een error melding op mijn code namelijk: Uncaught (in promise) TypeError: Cannot read properties of null (reading 'addEventListener')
    at script.js:68:21
    at NodeList.forEach (<anonymous>)
    at dataOphalen (script.js:55:15)
    at script.js:45:5
(anonymous) @ script.js:68
dataOphalen @ script.js:55
(anonymous) @ script.js:45
Promise.then (async)
(anonymous) @ script.js:43
ChatGPT
De foutmelding geeft aan dat er een probleem is met het lezen van eigenschappen van null, specifiek bij het proberen toe te voegen van een event listener met addEventListener. Dit suggereert dat buttonElement in sommige gevallen null kan zijn, wat betekent dat het bijbehorende element niet is gevonden.

Om deze fout op te lossen, kun je controleren of buttonElement null is voordat je de event listener toevoegt. Hier is een aangepaste versie van het betreffende gedeelte:

javascript
Copy code
const buttonElement = flipCardSingular.querySelector(".cardback button");
const popUpElement = flipCardSingular.querySelector(".cardback .popUp");

if (buttonElement && popUpElement) {
    buttonElement.addEventListener("click", openPopUp);

    function openPopUp() {
        popUpElement.classList.add("showPopUp");
        console.log("popup komt hier te staan");
    }
} else {
    console.error("Button element or popup element not found");
}
Op deze manier vermijd je het toevoegen van een event listener als de elementen niet zijn gevonden, wat hopelijk de genoemde fout oplost. Als je nog steeds problemen hebt of meer hulp nodig hebt, laat het me dan weten!

User
Ik heb deze code geschreven
ChatGPT
Het lijkt erop dat je de code correct hebt aangepast om te controleren of buttonElement en popUpElement null zijn voordat je de event listener toevoegt. Als je nog steeds dezelfde foutmelding krijgt, zou je kunnen proberen de regel waar de fout optreedt (regel 68 in jouw code) te identificeren en specifieker naar het probleem te kijken.

Als de foutmelding blijft optreden, kun je het volgende proberen:

Controleer of de elementen met de klassen "cardback" en "button" echt bestaan in de structuur van je HTML.

Plaats console.log-verklaringen voor en na de regel waar de fout optreedt om de waarden van de variabelen te controleren:

javascript
Copy code
console.log("Voor event listener toevoegen:", buttonElement, popUpElement);

if (buttonElement && popUpElement) {
    buttonElement.addEventListener("click", openPopUp);

    function openPopUp() {
        popUpElement.classList.add("showPopUp");
        console.log("popup komt hier te staan");
    }
} else {
    console.error("Button element or popup element not found");
}

console.log("Na event listener toevoegen:", buttonElement, popUpElement);
Hiermee kun je de waarden in de console bekijken en mogelijk het probleem identificeren.

Als je nog steeds problemen ondervindt, deel dan gerust de relevante delen van je HTML-structuur en JavaScript-code, en ik zal proberen je verder te helpen.

User
const dataOphalen = (response) => {
    const countries = response.visitedCountries.concat(response.bucketList)
    const flipCards = document.querySelectorAll(".flipCard");
    flipCards.forEach((flipCardSingular) => {
        const cardTitle = flipCardSingular.querySelector("h2").textContent
        const foundCountry = countries.find(x => x.country === cardTitle);
        // Dit vind ik nog een beetje vaag, even opzoeken.
        const cardImg = flipCardSingular.querySelector(".cardFront img");
        cardImg.src = foundCountry.imgUrl
        // van stackoverflow https://stackoverflow.com/questions/66702527/creating-alt-tags-for-images-gotten-through-json
        // photo.alt = `${town.name}`;
        cardImg.alt = foundCountry.imgAlt
        console.log(cardImg.alt)

        const popupButton = flipCardSingular.querySelector(".popupButton");
        const popUpElement = document.querySelector(".popUp");
        popupButton.addEventListener("click", () => {
            popUpElement.classList.add("showPopUp")
            console.log("hier komt de popup")
        })

        const stars = flipCardSingular.querySelectorAll(".ratingStars img") 
        const starsDiv = flipCardSingular.querySelector(".ratingStars")
        if (foundCountry.rating){
            for (let i = 0; i < foundCountry.rating; i++){
                stars[i].src="images/star-solid.svg"
            } 
        }
        else {
            starsDiv.classList.add("no-rating");
            console.log(starsDiv)
        }
    })
}
ChatGPT
Je code ziet er goed uit en lijkt de problemen van eerder te hebben aangepakt door te controleren op null-waarden voor popupButton en popUpElement. Er zijn echter nog enkele punten waar je rekening mee kunt houden:

Zorg ervoor dat je pop-up wordt weergegeven voor het specifieke element dat is geklikt:

Momenteel selecteer je alle pop-up elementen op de pagina met document.querySelector(".popUp"). Als je meerdere kaarten hebt en elke kaart zijn eigen pop-up heeft, is het beter om de pop-up binnen de scope van de huidige kaart te selecteren. Je kunt dit doen met behulp van querySelector op het huidige flipCardSingular-element:

javascript
Copy code
const popUpElement = flipCardSingular.querySelector(".popUp");
Hierdoor selecteer je alleen het .popUp-element binnen de huidige kaart.

Zorg ervoor dat je de DOM volledig hebt geladen:

Als je deze code in de <head>-sectie van je HTML plaatst, zorg er dan voor dat je het in een event handler voor het DOMContentLoaded-evenement plaatst:

javascript
Copy code
document.addEventListener('DOMContentLoaded', () => {
    // Hier komt je huidige code
});
Dit zorgt ervoor dat je JavaScript-code pas wordt uitgevoerd nadat de DOM volledig is geladen.

Met deze aanpassingen zou je code goed moeten werken. Als je nog steeds problemen ondervindt, controleer dan de console in de browser voor foutmeldingen en laat me weten wat je ziet.

User
Ik krijg nog steeds dezelfde foutmelding bij deze code: const dataOphalen = (response) => {
    const countries = response.visitedCountries.concat(response.bucketList)
    const flipCards = document.querySelectorAll(".flipCard");
    flipCards.forEach((flipCardSingular) => {
        const cardTitle = flipCardSingular.querySelector("h2").textContent
        const foundCountry = countries.find(x => x.country === cardTitle);
        // Dit vind ik nog een beetje vaag, even opzoeken.
        const cardImg = flipCardSingular.querySelector(".cardFront img");
        cardImg.src = foundCountry.imgUrl
        // van stackoverflow https://stackoverflow.com/questions/66702527/creating-alt-tags-for-images-gotten-through-json
        // photo.alt = `${town.name}`;
        cardImg.alt = foundCountry.imgAlt
        console.log(cardImg.alt)

        const popupButton = flipCardSingular.querySelector(".popupButton");
        const popUpElement = flipCardSingular.querySelector(".popUp");
        popupButton.addEventListener("click", () => {
            popUpElement.classList.add("showPopUp")
            console.log("hier komt de popup")
        })

        const stars = flipCardSingular.querySelectorAll(".ratingStars img") 
        const starsDiv = flipCardSingular.querySelector(".ratingStars")
        if (foundCountry.rating){
            for (let i = 0; i < foundCountry.rating; i++){
                stars[i].src="images/star-solid.svg"
            } 
        }
        else {
            starsDiv.classList.add("no-rating");
            console.log(starsDiv)
        }
    })
}
ChatGPT
De foutmelding kan worden veroorzaakt door verschillende redenen, maar een mogelijke oorzaak is dat sommige van de .popupButton-elementen of .popUp-elementen niet worden gevonden binnen de specifieke .flipCard-elementen.

Om dit te verifiëren en eventuele fouten op te sporen, kun je het volgende doen:

Voeg console.log-verklaringen toe om te controleren of de popupButton en popUpElement correct worden gevonden:

javascript
Copy code
const popupButton = flipCardSingular.querySelector(".popupButton");
const popUpElement = flipCardSingular.querySelector(".popUp");

console.log("popupButton:", popupButton);
console.log("popUpElement:", popUpElement);

popupButton.addEventListener("click", () => {
    popUpElement.classList.add("showPopUp");
    console.log("hier komt de popup");
});
Controleer de console in je browser (F12 of rechtermuisknop > Inspecteren > Console) en bekijk de uitvoer van de console.log-verklaringen. Dit zal je helpen om te zien of de geselecteerde elementen null zijn.

Als de popupButton of popUpElement null is, betekent dit dat het bijbehorende element niet wordt gevonden, en daarom kan er geen event listener aan worden toegevoegd.

Zorg ervoor dat de klassen "popupButton" en "popUp" correct zijn toegevoegd aan de relevante HTML-elementen binnen elke .flipCard. Als er nog steeds problemen zijn, kun je me laten weten wat je in de console ziet, zodat ik je verder kan helpen.

User
in de console staan nu wel popupButton en popUpElement door dit stukje code: .cardBack div:nth-of-type(2). Maar de console geeft verder nog steeds dezelfde foutmelding.
ChatGPT
Als de popupButton en popUpElement correct worden geselecteerd en de foutmelding aanhoudt, kan het zijn dat er iets anders aan de hand is. We kunnen nog wat extra controlepunten toevoegen om het probleem verder te identificeren.

Controleer of de popupButton en popUpElement echt bestaan voordat je de event listener toevoegt:

javascript
Copy code
console.log("popupButton:", popupButton);
console.log("popUpElement:", popUpElement);

if (popupButton && popUpElement) {
    popupButton.addEventListener("click", () => {
        popUpElement.classList.add("showPopUp");
        console.log("hier komt de popup");
    });
} else {
    console.error("popupButton or popUpElement not found");
}
Dit zal ervoor zorgen dat de event listener alleen wordt toegevoegd als beide elementen bestaan. Als een van hen niet wordt gevonden, zal een foutmelding worden weergegeven in de console.

Controleer de console op eventuele andere foutmeldingen:

Bekijk de console voor eventuele andere foutmeldingen die vóór of na de genoemde fout verschijnen. Soms kunnen andere fouten ook van invloed zijn op de werking van je code.

Als je nog steeds problemen ondervindt, zou ik je willen vragen om de relevante delen van je HTML-structuur te delen waar de .popupButton en .popUp elementen zich bevinden, zodat ik een gedetailleerder inzicht kan krijgen in de situatie en je beter kan helpen.




