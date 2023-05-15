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
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_config] = useState(configuration || "outlined");

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("card")
		.add("stacked-card")
		.add("stacked-card-" + _config)
		.add("stacked-card-" + _theme)
		.add(_className)
		.toString();

	// Return the JSX element for the button
	return (
		<div id={_id} className={_computedComponentClassName}>
			<div className="stacked-card-header">
				<div className="stacked-card-header-content">
					<div className="stacked-card-header-content-monogram">
						<div className="stacked-card-header-content-monogram-initial">
							<Typography variant="text-title-medium">A</Typography>
						</div>
					</div>

					<div className="stacked-card-header-content-text">
						<Typography
							className="stacked-card-header-content-text-header"
							variant="text-title-medium"
						>
							Header
						</Typography>
						<Typography variant="text-body-medium">Subheader</Typography>
					</div>
				</div>
				<div className="stacked-card-header-icon-button">
					<Icon>more_vert</Icon>
				</div>
			</div>
			<div className="stacked-card-media">
				<img src="default-media.png"></img>
			</div>
			<div className="stacked-card-text-content">
				<Typography variant="text-body-large">Title</Typography>
				<Typography variant="text-body-medium">Subhead</Typography>
				<Typography variant="text-body-medium">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor
				</Typography>
				<Button configuration="outlined"></Button>
				<Button></Button>
			</div>
		</div>
	);
};

// Export the button component as default
export default StackedCard;
