const links = document.querySelectorAll("a, button");
const manual = document.getElementById("handleiding");
const voorleesBtn = document.querySelector(".voorlees-btn");

const welcomeMsg =
    "Hallo Roger! Welkom op deze website. Hier een korte toelichting. Maak gebruik van de TAB toets om door de website heen te navigeren. Mocht er uitleg nodig zijn, dan wordt deze gegeven bij de desbetreffende elementen. Met behulp van de ESCAPE toets, kun je lange stukken tekst, zoals dit, overslaan. Met SPATIE kun je meer uitleg krijgen, zodat je precies weet wat je kunt doen. Veel plezier met het gebruik van deze website. Gebruik de TAB toets om verder te gaan.";

links.forEach((item) => {
    item.addEventListener("focus", () => {
        enableSpeech(item.innerText);
    });

    item.addEventListener("keydown", (e) => {
        if (e.code === "Space" && e.target.ariaDescribedByElements) {
            const ariaLabel = e.target.ariaDescribedByElements[0].innerText;
            enableSpeech(ariaLabel);

            return;
        }

        if ((e.code = "Escape")) {
            window.speechSynthesis.cancel();

            return;
        }
    });
});

manual.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        enableSpeech(welcomeMsg, true);
    }
});

manual.addEventListener("click", () => {
    enableSpeech(welcomeMsg, true);
});

voorleesBtn.addEventListener("keydown", (e) => {
    const article = document.querySelector("article").textContent;
    if (e.key === "Enter") {
        enableSpeech(article, true);
    }
});

/**
 *
 * @param {string} msg - Message that will be spoken
 * @param {boolean} isSlow - Check whether the string is an article
 */
function enableSpeech(msg, isSlow) {
    let utterance = new SpeechSynthesisUtterance(msg);
    utterance.lang = "nl-NL";
    utterance.rate = isSlow ? 0.1 : 1;
    utterance.volume = 0.9;
    utterance.pitch = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}
