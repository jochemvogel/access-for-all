const listItems = document.querySelectorAll('a');
const manual = document.getElementById('handleiding');

const welcomeMsg =
	'Hallo Roger! Welkom op deze website. Graag geef ik eerst een korte toelichting. Maak gebruik van de TAB toets om door de website heen te navigeren. Mocht er uitleg nodig zijn, dan wordt deze gegeven bij de desbetreffende elementen. Met behulp van de ESCAPE toets, kun je lange stukken tekst, zoals dit, overslaan. Veel plezier met het gebruik van deze website. Gebruik de TAB toets om verder te gaan.';

listItems.forEach((item) => {
	item.addEventListener('focus', () => {
		let utterThis = new SpeechSynthesisUtterance(item.innerText);
		utterThis.lang = 'nl-NL';
		window.speechSynthesis.cancel();
		window.speechSynthesis.speak(utterThis);
	});
});

manual.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		let utterThis = new SpeechSynthesisUtterance(welcomeMsg);
		utterThis.lang = 'nl-NL';
		window.speechSynthesis.speak(utterThis);
	}
});

manual.addEventListener('click', (e) => {
	{
		let utterThis = new SpeechSynthesisUtterance(welcomeMsg);
		utterThis.lang = 'nl-NL';
		window.speechSynthesis.speak(utterThis);
	}
});
