import Button from "../../Button/Button";

interface IThemeSwitcherProps {
	toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({ toggleTheme }) => {
	return (
		<Button
			configuration="filled"
			disabled={false}
			onClick={toggleTheme}
			className="theme-toggler-trmd3"
		>
			Toggle Theme
		</Button>
	);
};

export default ThemeSwitcher;
