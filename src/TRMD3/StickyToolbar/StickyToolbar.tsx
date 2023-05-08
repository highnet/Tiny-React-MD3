import Button from "../../Button/Button";

interface IStickyToolbarProps {
	toggleTheme: () => void;
	scrollToTop: () => void;
}

const StickyToolbar: React.FC<IStickyToolbarProps> = ({
	toggleTheme,
	scrollToTop,
}) => {
	return (
		<div className="sticky-toolbar-trmd3">
			<Button
				configuration="elevated"
				label="Toggle Theme"
				disabled={false}
				onClick={toggleTheme}
				className="theme-toggler-trmd3"
			></Button>
			<Button
				configuration="elevated"
				icon={true}
				iconName="arrow_upward"
				label="Up"
				disabled={false}
				onClick={scrollToTop}
				className="top-scroller-trmd3"
			></Button>
		</div>
	);
};

export default StickyToolbar;
