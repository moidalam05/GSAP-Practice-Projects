const main = document.querySelector('#main');
const cursor = document.querySelector('#cursor');
const image = document.querySelector('#image');

main.addEventListener('mousemove', (e) => {
	gsap.to(cursor, {
		x: e.x,
		y: e.y,
		duration: 0.5,
	});
});

image.addEventListener('mouseenter', () => {
	cursor.innerHTML = 'view more';
	gsap.to(cursor, {
		scale: 3,
		duration: 0.5,
        backgroundColor: '#ffffff8a',
	});
});

image.addEventListener('mouseleave', () => {
	cursor.innerHTML = '';
	gsap.to(cursor, {
		scale: 1,
		duration: 0.5,
		backgroundColor: '#fff',
	});
});
