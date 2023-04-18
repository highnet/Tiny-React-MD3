/*
    Typography styles are defined using CSS classes to style text elements inside of div elements. The CSS classes specify the font family,
    size, weight, line height, and letter spacing of the text elements. There are four typography variants: display, headline, title, and body.
    Each variant has three subvariants: large, medium, and small.
*/

function TypographiesFrame() {
	const getPreferredScheme = () => {
		window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches
			? "dark"
			: "light";
	};

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div
			className={
				"flex-trmd3 flex-column-trmd3 frame-trmd3 typographies-frame-trmd3 typographies-frame-" +
				_theme +
				"-trmd3"
			}
		>
			{/* TYPOGRAPHY */}

			<div className="typographies-subframe-trmd3">
				<div className="text text-display text-display-large">
					Display Large - Roboto 57/54 . 0
				</div>
				<div className="text text-display text-display-medium">
					Display Medium - Roboto 45/52 . 0
				</div>
				<div className="text text-display text-display-small">
					Display Small - Roboto 36/44 . 0
				</div>
			</div>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<div className="text text-display text-display-large">lorem</div>'
					}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<div className="text text-display text-display-medium">ipsum</div>'
					}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<div className="text text-display text-display-small">dolor</div>'
					}{" "}
				</code>
			</pre>
			<div className="typographies-subframe-trmd3">
				<div className="text text-headline text-headline-large">
					Headline Large - Roboto 32/40 . 0
				</div>
				<div className="text text-headline text-headline-medium">
					Headline Medium - Roboto 28/36 . 0
				</div>
				<div className="text text-headline text-headline-small">
					Headline Small - Roboto 24/32 . 0
				</div>
			</div>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<div className="text text-display text-display-large">lorem</div>'
					}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<div className="text text-display text-display-medium">ipsum</div>'
					}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<div className="text text-display text-display-small">dolor</div>'
					}{" "}
				</code>
			</pre>
			<div className="typographies-subframe-trmd3">
				<div className="text text-title text-title-large">
					Title Large - Roboto Regular 22/28 . 0
				</div>
				<div className="text text-title text-title-medium">
					Title Medium - Roboto Medium 16/24 . +0.15
				</div>
				<div className="text text-title text-title-small">
					Title Small - Roboto Medium 14/20 . +0.1
				</div>
			</div>
			<pre>
				<code className="language-html">
					{" "}
					{'<div className="text text-title text-title-large">lorem</div>'}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<div className="text text-title text-title-medium">ipsum</div>'
					}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{'<div className="text text-title text-title-small">dolor</div>'}{" "}
				</code>
			</pre>
			<div className="typographies-subframe-trmd3">
				<div className="text text-label text-label-large">
					Label Large - Roboto Medium 14/20 . +0.1
				</div>
				<div className="text text-label text-label-medium">
					Label Medium - Roboto Medium 12/16 . +0.5
				</div>
				<div className="text text-label text-label-small">
					Label Small - Roboto Medium 11/16 . +0.5
				</div>
			</div>
			<pre>
				<code className="language-html">
					{" "}
					{'<div className="text text-label text-label-large">lorem</div>'}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{
						'<div className="text text-label text-label-medium">ipsum</div>'
					}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{'<div className="text text-label text-label-small">dolor</div>'}{" "}
				</code>
			</pre>
			<div className="typographies-subframe-trmd3">
				<div className="text text-body text-body-large">
					Body Large - Roboto 16/24 . +0.5
				</div>
				<div className="text text-body text-body-medium">
					Body Large - Roboto 16/24 . +0.5
				</div>
				<div className="text text-body text-body-small">
					Body Large - Roboto 16/24 . +0.5
				</div>
			</div>
			<pre>
				<code className="language-html">
					{" "}
					{'<div className="text text-body text-body-large">lorem</div>'}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{'<div className="text text-body text-body-medium">ipsum</div>'}{" "}
				</code>
			</pre>
			<pre>
				<code className="language-html">
					{" "}
					{'<div className="text text-body text-body-small">dolor</div>'}{" "}
				</code>
			</pre>
		</div>
	);
}

export default TypographiesFrame;
