const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActive = 1;

next.addEventListener("click", () => {
	currentActive++;
	if (currentActive > circles.length) {
		currentActive = circles.length;
	}
	update();
});

prev.addEventListener("click", () => {
	currentActive--;
	if (currentActive < 1) {
		currentActive = 1;
	}
	update();
});

function update() {
	circles.forEach((c, idx) => {
		if (idx < currentActive) {
			c.classList.add("active");
		} else {
			c.classList.remove("active");
		}
	});
	progress.style.width = ((currentActive - 1) / (circles.length - 1)) * 100 + "%";
	if (currentActive === 1) {
		prev.disabled = true;
	} else if (currentActive === circles.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
}
