import HorizontalDivider from "../HorizontalDivider";

/* 
  Dividers have an inset prop that determines how much space is left on the left and right sides of the divider. The inset prop can be either
  “none”, “right”, “left”, or “center”. The dividers also have a showInsets prop that controls whether
  or not to show the inset spaces with a different color.
*/

function HorizontalDividersFrame() {
	return (
		<div className="flex-trmd3 flex-column-trmd3">
			{/* HORIZONTAL DIVIDERS */}
			<div className="text text-label text-label-small">Inset None</div>
			<HorizontalDivider inset={"none"} />
			<div className="text text-label text-label-small">Inset Right</div>
			<HorizontalDivider inset={"right"} showInsets={true} />
			<div className="text text-label text-label-small">Inset Left</div>
			<HorizontalDivider inset={"left"} showInsets={true} />
			<div className="text text-label text-label-small">Inset Center</div>
			<HorizontalDivider inset={"center"} showInsets={true} />
		</div>
	);
}

export default HorizontalDividersFrame;
