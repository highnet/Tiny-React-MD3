import Button from "../../Button/Button";

interface IThemeSwitcherProps {
	toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({ toggleTheme }) => {
	return (
		<Button
			configuration="elevated"
			disabled={false}
			onClick={toggleTheme}
			className="theme-toggler-trmd3"
		>
			<div className="text text-label text-label-large">Toggle Theme</div>
		</Button>
	);
};

export default ThemeSwitcher;
