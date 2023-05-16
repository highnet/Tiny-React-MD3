import { StringBuilder } from "../../../Gizmos/StringBuilder";
import { getPreferredScheme } from "../../../Gizmos/Themeing";
import VerticalDivider from "../VerticalDivider";

/*
  Dividers have an inset prop that determines how much space is left on the left and right sides of the divider. The inset prop can be either
  “none”, “top”, “bottom”, or “center”. The dividers also have a showInsets prop that controls whether
  or not to show the inset spaces with a different color.
*/

const VerticalDividersFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme)
		.add("verticaldividers-frame-trmd3")
		.add("verticaldividers-frame-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			{/* VERTICAL DIVIDERS */}
			<div className="flex-trmd3 flex-column-trmd3">
				<div className="text text-title text-title-large">
					Vertical Dividers
				</div>
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
};

export default VerticalDividersFrame;
