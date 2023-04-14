import VerticalDivider from "../VerticalDivider";

/*
  Dividers have an inset prop that determines how much space is left on the left and right sides of the divider. The inset prop can be either
  “none”, “top”, “bottom”, or “center”. The dividers also have a showInsets prop that controls whether
  or not to show the inset spaces with a different color.
*/

function VerticalDividersFrame() {
	const _theme = localStorage.getItem("theme") || "light-theme";

	return (
		<div
			className={
				"flex-trmd3 flex-row-trmd3 vertical-dividers-frame-trmd3 vertical-dividers-frame-" +
				_theme +
				"-trmd3"
			}
		>
			{/* VERTICAL DIVIDERS */}
			<div className="text text-label text-label-small">Inset None</div>
			<VerticalDivider inset={"none"} />
			<div className="text text-label text-label-small">Inset Top</div>
			<VerticalDivider inset={"top"} showInsets={true} insetTopHeight={50} />
			<div className="text text-label text-label-small">Inset Bottom</div>
			<VerticalDivider
				inset={"bottom"}
				insetBottomHeight={50}
				showInsets={true}
			/>
			<div className="text text-label text-label-small">Inset Center</div>
			<VerticalDivider
				inset={"center"}
				insetBottomHeight={50}
				insetTopHeight={50}
				showInsets={true}
			/>
		</div>
	);
}

export default VerticalDividersFrame;
