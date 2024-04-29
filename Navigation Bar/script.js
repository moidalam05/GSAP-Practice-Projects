const menu = document.querySelector('#nav i');
const cross = document.querySelector('#full i');

let tl = gsap.timeline();

tl.to('#full', {
	right: 0,
	duration: 0.5,
});

tl.from('#full h4', {
	x: 150,
	duration: 0.5,
	stagger: 0.2,
	opacity: 0,
});

tl.from('#full i', {
	opacity: 0,
});

menu.addEventListener('click', () => {
	tl.play();
});
cross.addEventListener('click', () => {
	tl.reverse();
});
tl.pause();

gsap.from('#nav', {
	opacity: 0,
	duration: 1,
	delay: 1,
	y: -100,
});

gsap.from('#center h1', {
	opacity: 0,
	y: -200,
	duration: 1.5,
	delay: 1.5,
});
