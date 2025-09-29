const panels = document.querySelectorAll(".panel");

for (let panel of panels) {
	panel.addEventListener("click", () => {
		removeActiveClasses();
		panel.classList.add("active");
	});
}

function removeActiveClasses() {
	for (let panel of panels) {
		panel.classList.remove("active");
	}
}
