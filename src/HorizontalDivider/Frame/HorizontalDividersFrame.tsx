import HorizontalDivider from "../HorizontalDivider";

/* 
  Dividers have an inset prop that determines how much space is left on the left and right sides of the divider. The inset prop can be either
  “none”, “right”, “left”, or “center”. The dividers also have a showInsets prop that controls whether
  or not to show the inset spaces with a different color.
*/

function HorizontalDividersFrame() {
	const _theme = localStorage.getItem("theme") || "light-theme";

	return (
		<div
			className={
				"flex-trmd3 frame-trmd3 flex-column-trmd3 horizontal-dividers-frame-trmd3 horizontal-dividers-frame-" +
				_theme +
				"-trmd3"
			}
		>
			{/* HORIZONTAL DIVIDERS */}
			<div className="text text-label text-label-small frame-label-trmd3">
				Inset None
			</div>
			<HorizontalDivider inset={"none"} />
			<pre>
				<code className="language-html">
					{" "}
					{'<HorizontalDivider inset={"none"} />'}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small frame-label-trmd3">
				Inset Right
			</div>
			<HorizontalDivider inset={"right"} showInsets={true} />
			<pre>
				<code className="language-html">
					{" "}
					{'<HorizontalDivider inset={"right"} showInsets={true} />'}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small frame-label-trmd3">
				Inset Left
			</div>
			<HorizontalDivider inset={"left"} showInsets={true} />
			<pre>
				<code className="language-html">
					{" "}
					{'<HorizontalDivider inset={"left"} showInsets={true} />'}{" "}
				</code>
			</pre>
			<div className="text text-label text-label-small frame-label-trmd3">
				Inset Center
			</div>
			<HorizontalDivider inset={"center"} showInsets={true} />
			<pre>
				<code className="language-html">
					{" "}
					{'<HorizontalDivider inset={"center"} showInsets={true} />'}{" "}
				</code>
			</pre>
		</div>
	);
}

export default HorizontalDividersFrame;
