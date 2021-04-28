// const tabbableItems = document.querySelectorAll("a, button, .tabbable");
// const manual = document.getElementById("handleiding");
// const voorleesBtn = document.querySelector(".voorlees-btn");
// const articleHeadings = document.querySelectorAll(
//     ".article-list article h2, .article-list article h3"
// );
// const articleSubHeadings = document.querySelectorAll(".subheading-article");

// const handleidingMsg = "../assets/mp3/handleiding.mp3";

// const navItems = document.querySelectorAll("nav ul li a");
// navItems.forEach((navItem) => {
//     if (navItem.href === window.location.href) {
//         if (navItem.innerHTML !== "Handleiding") {
//             navItem.classList.add("active");
//         }
//     }
// });

// tabbableItems.forEach((item) => {
//     item.addEventListener("focus", () => {
//         enableSpeech(item.innerText);
//     });

//     item.addEventListener("keydown", (e) => {
//         if (e.key === "i" && e.target.ariaDescribedByElements) {
//             const ariaLabel = e.target.ariaDescribedByElements[0].innerText;
//             enableSpeech(ariaLabel);

//             return;
//         }

//         if ((e.code = "Escape")) {
//             window.speechSynthesis.cancel();

//             return;
//         }
//     });
// });

// manual.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         const audio = new Audio(handleidingMsg);
//         audio.play();
//     }
// });

// manual.addEventListener("click", () => {
//     const audio = new Audio(handleidingMsg);
//     audio.play();
// });

// localStorage.setItem("isPlaying", false);

// // Keyboard events
// document.addEventListener("keydown", (e) => {
//     // Mop
//     if (e.key === "m") {
//         const mop = getRandomMop();
//         enableSpeech(mop, true);
//     }

//     // U2
//     if (e.key === "p") {
//         const isPlaying = localStorage.getItem("isPlaying") === "true";

//         if (isPlaying) {
//             return;
//         }

//         const song = getRandomSong();
//         new Audio(song).play();
//         localStorage.setItem("isPlaying", true);
//     }
// });

// function getRandomMop() {
//     const moppenArray = [
//         "Ik heb laatst ook nog waterpolo gedaan. Was best leuk, totdat m’n paard verdronk",
//         "Een kampeerwinkel die de tent moet sluiten is nooit grappig",
//         "Waar koopt een koe zijn kleren? In de boe-tiek",
//         "Waarom is alle honing uit Belgische supermarkten gehaald? Er zat een bijsmaak aan",
//         "Hoe noem je de kipfastfoodketen uit Oekraïne? De Kiev Sie",
//         "Wat krijg je als je een bulldog en een shitzu kruist? Bullshit!",
//         "Waarom vliegen vogels altijd naar het zuiden? Omdat lopen te ver is.",
//         "Een man belt naar Easyjet om een vlucht te boeken. De vrouw vraagt: “Met hoeveel mensen vliegt u?” Waarop de man zegt: “Weet ik veel, het is toch jullie vliegtuig!",
//     ];

//     let mop = moppenArray[Math.floor(Math.random() * moppenArray.length)];

//     return mop;
// }

// function getRandomSong() {
//     const path = "../assets/mp3/u2/";
//     const extension = ".mp3";
//     const songArray = [
//         "i-still-havent-found-what-im-looking-for",
//         "one",
//         "where-the-streets-have-no-name",
//         "with-or-without-you",
//     ];

//     let song = songArray[Math.floor(Math.random() * songArray.length)];
//     song = `${path}${song}${extension}`;

//     return song;
// }

// // voorleesBtn.addEventListener("keydown", (e) => {
// //     const article = document.querySelector("article").textContent;
// //     if (e.key === "Enter") {
// //         enableSpeech(article, true);
// //     }
// // });

// articleHeadings.forEach((header) => {
//     header.addEventListener("keydown", (e) => {
//         if (e.key === "i") {
//             const article = e.target.parentNode;

//             const articleChilds = article.childNodes;

//             let paragraphs = [];
//             let msg;

//             articleChilds.forEach((child) => {
//                 if (child.computedRole === "paragraph") {
//                     paragraphs.push(child.innerHTML);
//                 }
//             });

//             if (paragraphs.length > 0) {
//                 msg = paragraphs.join();
//             } else {
//                 msg =
//                     "Helaas kun dit hier niet gebruiken. Probeer de tab toets om door te gaan.";
//             }

//             enableSpeech(msg);
//         }
//     });
// });

// /**
//  *
//  * @param {string} msg - Message that will be spoken
//  * @param {boolean} isSlow - Check whether the string is an article
//  */
// function enableSpeech(msg, isSlow) {
//     let utterance = new SpeechSynthesisUtterance(msg);
//     const synth = window.speechSynthesis;
//     const voicesArr = synth.getVoices();

//     utterance.lang = "nl-NL";
//     utterance.rate = isSlow ? 0.75 : 1;
//     utterance.volume = 0.9;
//     utterance.voice = voicesArr[61];

//     synth.cancel();
//     synth.speak(utterance);
// }

// // BLOG LOGICA
// articleSubHeadings.forEach((header) => {
//     header.addEventListener("keydown", (e) => {
//         if (e.key === "i") {
//             const article = e.target.parentNode;

//             const articleChilds = article.childNodes;

//             let paragraphs = [];

//             articleChilds.forEach((child) => {
//                 if (child.computedRole === "paragraph") {
//                     paragraphs.push(child.innerHTML);
//                 }
//             });

//             const msg = paragraphs.join();

//             // enableSpeech(testMsg);
//             enableSpeech(msg);
//         }
//     });
// });
