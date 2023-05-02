/* 
	1
	1683038268
	Havelka

	`getPreferredScheme` determines the user's preferred color scheme by checking if the browser supports the
	`prefers-color-scheme` media query and if it is set to "dark". If so, it returns "dark"; otherwise,
	it returns "light".

	`toggleTheme` takes two inputs, the current theme and a function to set the theme. It checks if the current
	theme is "light-theme" and changes it to "dark-theme" or vice versa. After toggling the theme, it refreshes
	the page to apply the new theme.
	
*/

export const getPreferredScheme = (): string =>
	window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches
		? "dark"
		: "light";

export const toggleTheme = (
	theme: string,
	setTheme: React.Dispatch<React.SetStateAction<string>>
): void => {
	if (theme === "light-theme") {
		setTheme("dark-theme");
	} else {
		setTheme("light-theme");
	}
	window.location.reload();
};
