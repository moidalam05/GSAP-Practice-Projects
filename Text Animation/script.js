const breakTheText = () => {
	const h1 = document.querySelector('h1');
	const text = h1.textContent;
	let clutter = ' ';

	let splitedText = text.split('');

	const halfText = Math.floor(splitedText.length / 2);

	splitedText.forEach((char, index) => {
		if (index < halfText) {
			clutter += `<span class='firstHalf'>${char}</span>`;
		} else if (index === halfText) {
			clutter += `<span'> </span>`;
		} else {
			clutter += `<span class='secondHalf'>${char}</span>`;
		}
	});

	h1.innerHTML = clutter;
};

breakTheText();

gsap.from('.firstHalf', {
	y: 80,
	opacity: 0,
	duration: 0.7,
	delay: 0.5,
	stagger: 0.15,
});

gsap.from('.secondHalf', {
	y: 80,
	opacity: 0,
	duration: 0.7,
	delay: 0.5,
	stagger: -0.15,
});
