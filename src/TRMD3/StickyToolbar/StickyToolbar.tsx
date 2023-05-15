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
				disabled={false}
				onClick={toggleTheme}
				className="theme-toggler-trmd3"
			>
				Toggle Theme
			</Button>
			<Button
				configuration="elevated"
				icon={true}
				iconName="arrow_upward"
				disabled={false}
				onClick={scrollToTop}
				className="top-scroller-trmd3"
			>
				Up
			</Button>
		</div>
	);
};

export default StickyToolbar;
