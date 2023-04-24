import { getPreferredScheme } from "../../TRMD3/Gizmos/Themeing";
import Badge from "../Badge";

/*  
	1	
	1682360238
	
	This function returns a React component called "BadgesFrame" which displays
	a set of badges of different configurations.

	The component first gets the preferred theme from local storage or the user's
	system preferences and applies it to the class name of the component.

	The component then displays three badges of different configurations: small,
	single-digit, and multiple-digits. The badges are displayed inside a div with
	the class "badge-box-trmd3". Each badge has its own label and offsets for
	positioning.

	The HTML code for each badge is also displayed below each badge using the "pre"
	and "code" elements with the "language-html" class.
*/

function BadgesFrame() {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div
			className={
				"flex-trmd3 flex-column-trmd3 frame-trmd3 badges-frame-trmd3 badges-frame-" +
				_theme +
				"-trmd3"
			}
		>
			{/* BADGES */}
			<div>
				<div>
					<div className="text text-label text-label-small frame-label-trmd3">
						Small
					</div>
					<div className="badge-box-trmd3">
						<Badge configuration={"small"} xOffset={95} yOffset={-2} />
					</div>
				</div>
				<pre>
					<code className="language-html">
						{" "}
						{'<Badge configuration={"small"} xOffset={95} yOffset={-2} />'}{" "}
					</code>
				</pre>
				<div>
					<div className="text text-label text-label-small frame-label-trmd3">
						Single Digit
					</div>
					<div className="badge-box-trmd3">
						<Badge
							configuration={"single-digit"}
							xOffset={93}
							yOffset={-4}
							label={"3"}
						/>
					</div>
				</div>
				<pre>
					<code className="language-html">
						{" "}
						{
							'<Badge configuration={"single-digit"} xOffset={93} yOffset={-4} label={"3"} />'
						}{" "}
					</code>
				</pre>
				<div>
					<div className="text text-label text-label-small frame-label-trmd3">
						Multiple Digits
					</div>
					<div className="badge-box-trmd3">
						<Badge
							configuration={"multiple-digits"}
							xOffset={93}
							yOffset={-4}
							label={"123"}
						/>
					</div>
				</div>
				<pre>
					<code className="language-html">
						{" "}
						{
							'<Badge configuration={"multiple-digits"} xOffset={93} yOffset={-4} label={"123"} />'
						}{" "}
					</code>
				</pre>
			</div>
		</div>
	);
}

export default BadgesFrame;
