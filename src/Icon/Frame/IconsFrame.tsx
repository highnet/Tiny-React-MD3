/*
  Each icon is a span element with a class name of “material-symbols-outlined”, which uses a custom font to render the icons.
  The icons are specified by the text content of the span elements, such as “search”, “home”, “air”,
  “water”, or “check”. The code demonstrates how to use the material symbols font to create icons with
  different names and styles. 
*/

function IconsFrame() {
	const getPreferredScheme = () => {
		window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches
			? "dark"
			: "light";
	};

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div className="flex-trmd3 flex-row-trmd3">
			{/* ICONS */}
			<span className="material-symbols-outlined">search</span>
			<span className="material-symbols-outlined">home</span>
			<span className="material-symbols-outlined">air</span>
			<span className="material-symbols-outlined">water</span>
			<span className="material-symbols-outlined">check</span>
		</div>
	);
}

export default IconsFrame;
