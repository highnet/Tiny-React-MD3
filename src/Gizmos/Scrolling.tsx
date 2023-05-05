export function scrollToSection(sectionId: string, yOffset = 0) {
	const section = document.querySelector(`#${sectionId}`);
	if (section) {
		const y =
			section.getBoundingClientRect().top + window.pageYOffset + yOffset;
		window.scrollTo({ top: y, behavior: "smooth" });
	}
}
