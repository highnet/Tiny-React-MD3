import SideSheet from "trmd3components/SideSheet";
import { StringBuilder } from "trmd3components/StringBuilder";
import { getPreferredScheme } from "trmd3components/Themeing";
import Typography from "trmd3components/Typography";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";

const SideSheetsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("side-sheets-frame-trmd3")
		.add("side-sheets-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="side-sheets-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				⬅️
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#%EF%B8%8F-side-sheets">
				Side Sheets
			</ComponentFrameTitle>
			<SideSheet
				className="side-sheet-on-frame-trmd3"
				title="Tiny React MD3"
				contents={
					<>
						<Typography variant="text-body-medium">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							ultricies pulvinar urna, et euismod dolor gravida in. Morbi at
							varius ipsum. Fusce egestas massa at luctus laoreet. Nulla iaculis
							commodo ligula, et viverra sapien auctor eu.
						</Typography>
					</>
				}
				buttons={[
					{ onClick: () => alert("hi") },
					{ onClick: () => alert("hi") },
				]}
				leadingIcon={{ onClick: undefined, name: "arrow_back" }}
				trailingIcon={{ onClick: undefined, name: "close" }}
			></SideSheet>
			<CodeSnippet>{`
<SideSheet 
    className="side-sheet-on-frame-trmd3"
    title="Tiny React MD3"
    leadingIcon={{onClick: undefined, name:"arrow_back"}} 
    trailingIcon={{onClick: undefined, name:"close"}}
    content={
        <>
            <Typography variant="text-body-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed ultricies pulvinar urna, et euismod dolor gravida in.
                Morbi at varius ipsum. Fusce egestas massa at luctus laoreet.
                Nulla iaculis commodo ligula, et viverra sapien auctor eu.
            </Typography>
        </>
    }
    buttons={[
        { onClick: () => alert("hi") },
        { onClick: () => alert("hi") },
    ]}
>
</SideSheet>
            `}</CodeSnippet>
		</div>
	);
};
export default SideSheetsFrame;
