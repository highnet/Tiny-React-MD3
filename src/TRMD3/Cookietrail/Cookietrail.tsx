// TODO: needs documentation

import Button from "../../Button/Button";
import { getPreferredScheme } from "../Gizmos/Themeing";

interface ICookietrailProps {}

function openLinkInNewTab(url: string) {
	window.open(url, "_blank");
}

const Cookietrail: React.FC<ICookietrailProps> = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div
			className={
				"cookietrail-section-trmd3 cookietrail-section-" + _theme + "-trmd3"
			}
		>
			<div className={"flex-trmd3 flex-row-trmd3 cookietrail-buttons-trmd3"}>
				<Button
					configuration="tonal"
					disabled={false}
					icon={true}
					iconName={"bookmark"}
					onClick={() =>
						openLinkInNewTab(
							"https://github.com/highnet/Tiny-React-MD3#-tiny-react-md3----"
						)
					}
					className="cookietrail-button-trmd3"
				>
					<div className="text text-label text-label-small">Read Me</div>
				</Button>
				<Button
					configuration="tonal"
					disabled={false}
					icon={true}
					iconName={"menu_book"}
					onClick={() =>
						openLinkInNewTab(
							"https://github.com/highnet/Tiny-React-MD3/tree/master/src#-tiny-react-md-3-documentation"
						)
					}
					className="cookietrail-button-trmd3"
				>
					<div className="text text-label text-label-small">Documentation</div>
				</Button>
			</div>
		</div>
	);
};

export default Cookietrail;