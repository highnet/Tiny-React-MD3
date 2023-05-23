/*
    Typography styles are defined using CSS classes to style text elements inside of div elements. The CSS classes specify the font family,
    size, weight, line height, and letter spacing of the text elements. There are four typography variants: display, headline, title, and body.
    Each variant has three subvariants: large, medium, and small.
*/

import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import CodeSnippet from "../../TRMD3/CodeSnippet/CodeSnippet";
import ComponentFrameTitle from "../../TRMD3/ComponentFrameTitle/ComponentFrameTitle";
import Typography from "../Typography";

const TypographiesFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("typographies-frame-trmd3")
		.add("typographies-frame-" + _theme + "-trmd3")
		.toString();

	let _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* TYPOGRAPHY */}
			<Typography
				id="typography-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
				>
				🔤
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-typography">Typography</ComponentFrameTitle>
			<div className="typographies-subframe-trmd3">
				<Typography variant="text-display-large">
					Display Large - Roboto 57/54 . 0
				</Typography>
				<Typography variant="text-display-medium">
					Display Medium - Roboto 45/52 . 0
				</Typography>
				<Typography variant="text-display-small">
					Display Small - Roboto 36/44 . 0
				</Typography>
			</div>
			<CodeSnippet>
				{
					'<Typography variant="text-display-large">Display Large - Roboto 57/54 . 0</Typography>'
				}
			</CodeSnippet>
			<CodeSnippet>
				{
					'<Typography variant="text-display-medium">Display Medium - Roboto 45/52 . 0</Typography>'
				}
			</CodeSnippet>
			<CodeSnippet>
				{
					'<Typography variant="text-display-small">Display Small - Roboto 36/44 . 0</Typography>'
				}
			</CodeSnippet>
			<div className="typographies-subframe-trmd3">
				<Typography variant="text-headline-large">
					Headline Large - Roboto 32/40 . 0
				</Typography>
				<Typography variant="text-headline-medium">
					Headline Medium - Roboto 28/36 . 0
				</Typography>
				<Typography variant="text-headline-small">
					Headline Small - Roboto 24/32 . 0
				</Typography>
			</div>
			<CodeSnippet>
				{
					'<Typography variant="text-headline-large">Headline Large - Roboto 32/40 . 0</Typography>'
				}
			</CodeSnippet>
			<CodeSnippet>
				{
					'<Typography variant="text-headline-medium">Headline Medium - Roboto 28/36 . 0</Typography>'
				}
			</CodeSnippet>
			<CodeSnippet>
				{
					'<Typography variant="text-headline-small">Headline Small - Roboto 24/32 . 0</Typography>'
				}
			</CodeSnippet>
			<div className="typographies-subframe-trmd3">
				<Typography variant="text-title-large">
					Title Large - Roboto Regular 22/28 . 0
				</Typography>
				<Typography variant="text-title-medium">
					Title Medium - Roboto Medium 16/24 . +0.15
				</Typography>
				<Typography variant="text-title-small">
					Title Small - Roboto Medium 14/20 . +0.1
				</Typography>
			</div>
			<CodeSnippet>
				{
					'<Typography variant="text-title-large">Title Large - Roboto Regular 22/28 . 0</Typography>'
				}
			</CodeSnippet>
			<CodeSnippet>
				{
					'<Typography variant="text-title-medium">Title Medium - Roboto Medium 16/24 . +0.15</Typography>'
				}
			</CodeSnippet>
			<CodeSnippet>
				{
					'<Typography variant="text-title-small">Title Small - Roboto Medium 14/20 . +0.1</Typography>'
				}
			</CodeSnippet>
			<div className="typographies-subframe-trmd3">
				<Typography variant="text-label-large">
					Label Large - Roboto Medium 14/20 . +0.1
				</Typography>
				<Typography variant="text-label-medium">
					Label Medium - Roboto Medium 12/16 . +0.5
				</Typography>
				<Typography variant="text-label-small">
					Label Small - Roboto Medium 11/16 . +0.5
				</Typography>
			</div>
			<CodeSnippet>
				{
					'<Typography variant="text-label-large">Label Large - Roboto Medium 14/20 . +0.1</Typography>'
				}
			</CodeSnippet>
			<CodeSnippet>
				{
					'<Typography variant="text-label-medium">Label Medium - Roboto Medium 12/16 . +0.5</Typography>'
				}
			</CodeSnippet>
			<CodeSnippet>
				{
					'<Typography variant="text-label-small">Label Small - Roboto Medium 11/16 . +0.5</Typography>'
				}
			</CodeSnippet>
			<div className="typographies-subframe-trmd3">
				<Typography variant="text-body-large">
					Body Large - Roboto 16/24 . +0.5
				</Typography>
				<Typography variant="text-body-medium">
					Body Medium - Roboto 16/24 . +0.5
				</Typography>
				<Typography variant="text-body-small">
					Body Small - Roboto 16/24 . +0.5
				</Typography>
			</div>
			<CodeSnippet>
				{
					'<Typography variant="text-body-large">Body Large - Roboto 16/24 . +0.5</Typography>'
				}
			</CodeSnippet>
			<CodeSnippet>
				{
					'<Typography variant="text-body-medium">Body Medium - Roboto 16/24 . +0.5</Typography>'
				}
			</CodeSnippet>
			<CodeSnippet>
				{
					'<Typography variant="text-body-small">Body Small - Roboto 16/24 . +0.5</Typography>'
				}
			</CodeSnippet>
		</div>
	);
};
export default TypographiesFrame;
