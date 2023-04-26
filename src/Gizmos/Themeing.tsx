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
