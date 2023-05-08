import { getPreferredScheme } from "../../../Gizmos/Themeing";
import VerticalDivider from "../VerticalDivider";

/*
  Dividers have an inset prop that determines how much space is left on the left and right sides of the divider. The inset prop can be either
  “none”, “top”, “bottom”, or “center”. The dividers also have a showInsets prop that controls whether
  or not to show the inset spaces with a different color.
*/

function VerticalDividersFrame() {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div
			className={
				"flex-trmd3 frame-trmd3 flex-column-trmd3 vertical-dividers-frame-trmd3 vertical-dividers-frame-" +
				_theme +
				"-trmd3"
			}
		>
			{/* VERTICAL DIVIDERS */}
			<div className="flex-trmd3 flex-column-trmd3">
				<div className="text text-label text-label-small frame-label-trmd3">
					Inset None
				</div>
				<VerticalDivider inset={"none"} />
				<pre>
					<code className="language-html">
						{" "}
						{'<VerticalDivider inset={"none"} />'}{" "}
					</code>
				</pre>
			</div>
			<div className="flex-trmd3 flex-column-trmd3">
				<div className="text text-label text-label-small frame-label-trmd3">
					Inset Top
				</div>
				<VerticalDivider inset={"top"} showInsets={true} insetTopHeight={50} />
				<pre>
					<code className="language-html">
						{" "}
						{
							'<VerticalDivider inset={"top"} showInsets={true} insetTopHeight={50} />'
						}{" "}
					</code>
				</pre>
			</div>
			<div className="flex-trmd3 flex-column-trmd3">
				<div className="text text-label text-label-small frame-label-trmd3">
					Inset Bottom
				</div>
				<VerticalDivider
					inset={"bottom"}
					insetBottomHeight={50}
					showInsets={true}
				/>
				<pre>
					<code className="language-html">
						{" "}
						{
							'<VerticalDivider inset={"bottom"} insetBottomHeight={50} showInsets={true} />'
						}{" "}
					</code>
				</pre>
			</div>
			<div className="flex-trmd3 flex-column-trmd3">
				<div className="text text-label text-label-small frame-label-trmd3">
					Inset Center
				</div>
				<VerticalDivider
					inset={"center"}
					insetBottomHeight={50}
					insetTopHeight={50}
					showInsets={true}
				/>
				<pre>
					<code className="language-html">
						{" "}
						{
							'<VerticalDivider inset={"center"} insetBottomHeight={50} insetTopHeight={50} showInsets={true} />'
						}{" "}
					</code>
				</pre>
			</div>
		</div>
	);
}

export default VerticalDividersFrame;
