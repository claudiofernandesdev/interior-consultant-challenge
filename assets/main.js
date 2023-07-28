const hamburguerIcon = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

const activePage = window.location;
const navLinks = document
	.querySelectorAll('nav a')
	.forEach(link => {
		if (link.href.includes(`${activePage}`)) {
			link.classList.add('active');
		}
	});

hamburguerIcon.addEventListener('click', () => {
	hamburguerIcon.classList.toggle('active');
	navMenu.classList.toggle('active');
});


