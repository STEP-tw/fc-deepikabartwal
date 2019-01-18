const hideImageForAsec = function() {
	const target = event.target;
	target.style.visibility = 'hidden';
	setTimeout(() => {
		target.style.visibility = 'visible';
	}, 1000);
};

const setEventListner = function() {
	const image = document.getElementById('wateringJar');
	image.onclick = hideImageForAsec;
};

window.onload = setEventListner;
