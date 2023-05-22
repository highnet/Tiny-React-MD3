import { useState } from "react";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { IStackedCardsProps } from "./IStackedCardsProps";
import Icon from "../../Icon/Icon";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";

const StackedCard: React.FC<IStackedCardsProps> = ({
	id,
	className,
	configuration,
	initial,
	header,
	subheader,
	iconButtonIconName,
	title,
	subhead,
	text,
	onPrimaryButtonClick,
	primaryButtonLabel,
	onSecondaryButtonClick,
	secondaryButtonLabel,
	imageSrc,
	onHeaderIconButtonClick,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_config] = useState(configuration || "outlined");
	const [_initial] = useState(initial?.charAt(0) || "A");
	const [_header] = useState(header || "Header");
	const [_subheader] = useState(subheader || "Subheader");
	const [_iconButtonIconName] = useState(iconButtonIconName || "more_vert");
	const [_title] = useState(title || "Title");
	const [_subhead] = useState(subhead || "Subhead");
	const [_text] = useState(
		text ||
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
	);
	const [_primaryButtonLabel] = useState(primaryButtonLabel || "");
	const [_secondaryButtonLabel] = useState(secondaryButtonLabel || "");
	const [_imageSrc] = useState(imageSrc || "default-media.png");

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("card")
		.add("stacked-card")
		.add("stacked-card-" + _config)
		.add("stacked-card-" + _theme)
		.add(_className)
		.toString();

	const handlePrimaryButtonClick = () => {
		if (onPrimaryButtonClick) {
			onPrimaryButtonClick();
			console.log("Stacked Card Primary button clicked");
		}
	};

	const handleSecondaryButtonClick = () => {
		if (onSecondaryButtonClick) {
			onSecondaryButtonClick();
			console.log("Stacked Card Secondary button clicked");
		}
	};

	const handleHeaderIconButtonClick = () => {
		if (onHeaderIconButtonClick) {
			onHeaderIconButtonClick();
			console.log("Stacked Card Header Icon Button clicked");
		}
	};

	return (
		<div id={_id} className={_computedComponentClassName}>
			<div className="stacked-card-header">
				<div className="stacked-card-header-content">
					<div className="stacked-card-header-content-monogram ">
						<div className={"stacked-card-header-content-monogram-initial stacked-card-header-content-monogram-initial-" + _theme }>
							<Typography variant="text-title-medium">{_initial}</Typography>
						</div>
					</div>

					<div className="stacked-card-header-content-text">
						<Typography
							className="stacked-card-header-content-text-header"
							variant="text-title-medium"
						>
							{_header}
						</Typography>
						<Typography
							className="stacked-card-header-content-text-subheader"
							variant="text-body-medium"
						>
							{_subheader}
						</Typography>
					</div>
				</div>
				<div onClick={handleHeaderIconButtonClick} className="stacked-card-header-icon-button">
					<Icon>{_iconButtonIconName}</Icon>
				</div>
			</div>
			<div className="stacked-card-media">
				<img src={_imageSrc}></img>
			</div>
			<div className="stacked-card-text-content">
				<div className="stacked-card-text-content-headline">
					<Typography
						variant="text-body-large"
						className="stacked-card-text-content-headline-title"
					>
						{_title}
					</Typography>
					<Typography
						variant="text-body-medium"
						className="stacked-card-text-content-headline-subhead"
					>
						{_subhead}
					</Typography>
				</div>
				<div className="stacked-card-text-content-supporting-text">
					<Typography
						className={"stacked-card-text-content-supporting-text-text stacked-card-text-content-supporting-text-text-" + _theme }
						variant="text-body-medium"
					>
						{_text}
					</Typography>
				</div>
				<div className="stacked-card-text-content-actions">
					<Button onClick={handleSecondaryButtonClick} configuration="outlined">
						{_secondaryButtonLabel}
					</Button>
					<Button onClick={handlePrimaryButtonClick}>
						{_primaryButtonLabel}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default StackedCard;
