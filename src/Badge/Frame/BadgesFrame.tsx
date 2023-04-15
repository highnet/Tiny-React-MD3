import Badge from "../Badge";

/*  
  Badges come in different sizes and numbers, and are small circular indicators that can be used to show counts, statuses, or notifications 
  on other elements. The Badge component takes a configuration prop to specify the size of the badge,
  an xOffset and yOffset prop to adjust the position of the badge relative to its parent element,
  and an optional label prop to display a number on the badge.
*/

function EscapeHTML(htmlStr: string): string {
	return htmlStr
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

function BadgesFrame() {
	const _theme = localStorage.getItem("theme") || "light-theme";

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
						<Badge configuration={"small"} xOffset={95} yOffset={-2}></Badge>
					</div>
				</div>
				<pre>
					<code className="language-html">
						{" "}
						{
							'<Badge configuration={"small"} xOffset={95} yOffset={-2}></Badge>'
						}{" "}
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
						></Badge>
					</div>
				</div>
				<pre>
					<code className="language-html">
						{" "}
						{
							'<Badge configuration={"single-digit"} xOffset={93} yOffset={-4} label={"3"}></Badge>'
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
						></Badge>
					</div>
				</div>
				<pre>
					<code className="language-html">
						{" "}
						{
							'<Badge configuration={"multiple-digits"} xOffset={93} yOffset={-4} label={"123"}></Badge>'
						}{" "}
					</code>
				</pre>
			</div>
		</div>
	);
}

export default BadgesFrame;