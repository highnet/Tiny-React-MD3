import Button from "../../Button/Button";

interface IThemeSwitcherProps {
	toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({ toggleTheme }) => {
	return (
		<Button
			configuration="elevated"
			label="Toggle Theme"
			disabled={false}
			onClick={toggleTheme}
			className="theme-toggler-trmd3"
		></Button>
	);
};

export default ThemeSwitcher;
