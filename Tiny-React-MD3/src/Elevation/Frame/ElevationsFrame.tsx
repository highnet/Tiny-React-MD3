/* 
  The elevation styles are defined by the class names of the div elements, such as
  “elevation-light-1” or “elevation-light-5”. The elevation styles create a visual effect
  of depth and shadow for the div elements.
*/

function ElevationsFrame() {
	return (
		<div className="elevation-display-section-trmd3">
			{/* ELEVATION */}
			<div className="elevation-light-1 elevation-box-trmd3 elevation-box-1-trmd3"></div>
			<div className="elevation-light-2 elevation-box-trmd3 elevation-box-2-trmd3"></div>
			<div className="elevation-light-3 elevation-box-trmd3 elevation-box-3-trmd3"></div>
			<div className="elevation-light-4 elevation-box-trmd3 elevation-box-4-trmd3"></div>
			<div className="elevation-light-5 elevation-box-trmd3 elevation-box-5-trmd3"></div>
		</div>
	);
}

export default ElevationsFrame;
