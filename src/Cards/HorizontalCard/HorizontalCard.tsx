import { useState } from "react";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import Typography from "../../Typography/Typography";
import { IHorizontalCardProps } from "./IHorizontalCardProps";

const HorizontalCard: React.FC<IHorizontalCardProps> = ({
	id,
	className,
	configuration,
	initial,
	header,
	subhead,
	imageSrc,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [_config] = useState(configuration || "outlined");
	const [_initial] = useState(initial?.charAt(0) || "A");
	const [_header] = useState(header || "Header");
	const [_subhead] = useState(subhead || "Subhead");
	const [_imageSrc] = useState(imageSrc || "default-media-small.png");

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("card")
		.add("horizontal-card")
		.add("horizontal-card-" + _config)
		.add("horizontal-card-" + _theme)
		.add(_className)
		.toString();

	return (
		<div id={_id} className={_computedComponentClassName}>
			<div className="horizontal-card-header">
				<div className="horizontal-card-header-content">
					<div className="horizontal-card-header-content-monogram">
						<Typography
							variant="text-title-medium"
							className={
								"horizontal-card-header-content-monogram-initial horizontal-card-header-content-monogram-initial-" +
								_theme
							}
						>
							{_initial}
						</Typography>
					</div>
					<div className="horizontal-card-header-content-text">
						<Typography
							variant="text-title-medium"
							className="horizontal-card-header-content-text-header"
						>
							{_header}
						</Typography>
						<Typography
							variant="text-body-medium"
							className="horizontal-card-header-content-text-subhead"
						>
							{_subhead}
						</Typography>
					</div>
				</div>
				<div className="horizontal-card-header-media">
					<img src={_imageSrc}></img>
				</div>
			</div>
		</div>
	);
};

export default HorizontalCard;
