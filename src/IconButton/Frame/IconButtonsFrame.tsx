import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../../Typography/Typography";
import IconButton from "../IconButton";

const IconButtonsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("component-frame-trmd3")
		.add("component-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="icon-buttons-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🪙
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-icon-buttons">
				Icon Buttons
			</ComponentFrameTitle>
            <div className={"icon-buttons-subframe-trmd3 icon-buttons-subframe-" + _theme + "-trmd3"}>
				<Typography variant={"text-label-small"}>Standard</Typography>
				<IconButton configuration="standard" onClick={undefined}>hive</IconButton>
				<CodeSnippet>{`
<IconButton
    configuration="standard"
    onClick={undefined}
>
    hive
</IconButton>
`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>Filled</Typography>
				<IconButton configuration="filled" onClick={undefined}>hive</IconButton>
				<CodeSnippet>{`
<IconButton 
    configuration="filled"

    onClick={undefined}
>
    hive
</IconButton>
`}</CodeSnippet>
				<Typography variant={"text-label-small"}>Tonal</Typography>
				<IconButton configuration="tonal" onClick={undefined}>hive</IconButton>
				<CodeSnippet>{`
<IconButton 
    configuration="tonal"

    onClick={undefined}
>
    hive
</IconButton>
`}
				</CodeSnippet>
				<Typography variant={"text-label-small"}>Outlined</Typography>
				<IconButton configuration="outlined" onClick={undefined}>hive</IconButton>
				<CodeSnippet>{`
<IconButton 
    configuration="outlined"

    onClick={undefined}
>
    hive
</IconButton>
`}
				</CodeSnippet>
				<IconButton configuration="standard" onClick={undefined} toggleAble={true}>hive</IconButton>
				<IconButton configuration="filled" onClick={undefined} toggleAble={true}>hive</IconButton>
				<IconButton configuration="tonal" onClick={undefined} toggleAble={true}>hive</IconButton>
				<IconButton configuration="outlined" onClick={undefined} toggleAble={true}>hive</IconButton>

        	</div>
		</div>
	);
};
export default IconButtonsFrame;
