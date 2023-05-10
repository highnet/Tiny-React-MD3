/*
    Typography styles are defined using CSS classes to style text elements inside of div elements. The CSS classes specify the font family,
    size, weight, line height, and letter spacing of the text elements. There are four typography variants: display, headline, title, and body.
    Each variant has three subvariants: large, medium, and small.
*/

import { StringBuilder } from "../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import Typography from "../Typography";

const TypographiesFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme)
		.add("typographies-frame-trmd3")
		.add("typographies-frame-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* TYPOGRAPHY */}

			<div className="typographies-subframe-trmd3">
				<Typography
					variant="text-display-large"
					content="Display Large - Roboto 57/54 . 0"
				/>
				<Typography
					variant="text-display-medium"
					content="Display Medium - Roboto 45/52 . 0"
				/>
				<Typography
					variant="text-display-small"
					content="Display Small - Roboto 36/44 . 0"
				/>
			</div>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Typography variant="text-display-large" content="Display Large - Roboto 57/54 . 0" />'
					}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Typography variant="text-display-medium" content="Display Medium - Roboto 45/52 . 0" />'
					}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Typography variant="text-display-small" content="Display Small - Roboto 36/44 . 0" />'
					}{" "}
				</code>
			</pre>
			<div className="typographies-subframe-trmd3">
				<Typography
					variant="text-headline-large"
					content="Headline Large - Roboto 32/40 . 0"
				/>
				<Typography
					variant="text-headline-medium"
					content="Headline Medium - Roboto 28/36 . 0"
				/>
				<Typography
					variant="text-headline-small"
					content="Headline Small - Roboto 24/32 . 0"
				/>
			</div>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Typography variant="text-headline-large" content="Headline Large - Roboto 32/40 . 0" />'
					}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Typography variant="text-headline-medium" content="Headline Medium - Roboto 28/36 . 0" />'
					}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Typography variant="text-headline-small" content="Headline Small - Roboto 24/32 . 0" />'
					}{" "}
				</code>
			</pre>
			<div className="typographies-subframe-trmd3">
				<Typography
					variant="text-title-large"
					content="Title Large - Roboto Regular 22/28 . 0"
				/>
				<Typography
					variant="text-title-medium"
					content="Title Medium - Roboto Medium 16/24 . +0.15"
				/>
				<Typography
					variant="text-title-small"
					content="Title Small - Roboto Medium 14/20 . +0.1"
				/>
			</div>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Typography variant="text-title-large" content="Title Large - Roboto Regular 22/28 . 0" />'
					}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Typography variant="text-title-medium" content="Title Medium - Roboto Medium 16/24 . +0.15" />'
					}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Typography variant="text-title-small" content="Title Small - Roboto Medium 14/20 . +0.1" />'
					}{" "}
				</code>
			</pre>
			<div className="typographies-subframe-trmd3">
				<Typography
					variant="text-label-large"
					content="Label Large - Roboto Medium 14/20 . +0.1"
				/>
				<Typography
					variant="text-label-medium"
					content="Label Medium - Roboto Medium 12/16 . +0.5"
				/>
				<Typography
					variant="text-label-small"
					content="Label Small - Roboto Medium 11/16 . +0.5"
				/>
			</div>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Typography variant="text-label-large" content="Label Large - Roboto Medium 14/20 . +0.1" />'
					}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Typography variant="text-label-medium" content="Label Medium - Roboto Medium 12/16 . +0.5" />'
					}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Typography variant="text-label-small" content="Label Small - Roboto Medium 11/16 . +0.5" />'
					}{" "}
				</code>
			</pre>
			<div className="typographies-subframe-trmd3">
				<Typography
					content="Body Large - Roboto 16/24 . +0.5"
					variant="text-body-large"
				/>
				<Typography
					content="Body Medium - Roboto 16/24 . +0.5"
					variant="text-body-medium"
				/>
				<Typography
					content="Body Small - Roboto 16/24 . +0.5"
					variant="text-body-small"
				/>
			</div>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Typography content="Body Large - Roboto 16/24 . +0.5" variant="text-body-large" />'
					}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Typography content="Body Medium - Roboto 16/24 . +0.5" variant="text-body-medium" />'
					}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<Typography content="Body Small - Roboto 16/24 . +0.5" variant="text-body-small" />'
					}{" "}
				</code>
			</pre>
		</div>
	);
};

export default TypographiesFrame;
