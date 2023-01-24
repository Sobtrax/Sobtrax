function changeBg() 
{
	const images = [
	'url("img/bg/1.jpg")',
	'url("img/bg/2.jpg")',
	'url("img/bg/3.png")',
	'url("img/bg/4.png")',
	'url("img/bg/5.jpg")',
	'url("img/bg/6.jpg")',
	'url("img/bg/7.jpg")'	
					]

	const section = document.querySelector('section');
	const bg = images[Math.floor(Math.random() * images.length)];
	section.style.backgroundImage = bg;
}
changeBg();