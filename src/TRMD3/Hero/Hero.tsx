import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import Typography from "../../Typography/Typography";

const firebaseConfig = {
	storageBucket: "gs://tiny-react-md3.appspot.com",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const logoRef = ref(storage, "tiny-react-md3-logo.png");

interface IHeroProps {
	hasLogo?: boolean;
}

const Hero: React.FC<IHeroProps> = ({ hasLogo }) => {
	const [_hasLogo] = useState(hasLogo || false);
	const [logoUrl, setLogoUrl] = useState("");

	useEffect(() => {
		getDownloadURL(logoRef).then((url) => {
			setLogoUrl(url);
		});
	}, []);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	return (
		<div className={"hero-section-trmd3 hero-section-" + _theme + "-trmd3"}>
			<div className="flex-trmd3">
				{_hasLogo ? (
					<img loading="lazy" src={logoUrl} className="logo-trmd3" />
				) : (
					""
				)}
			</div>
			<Typography
				className={"main-title-trmd3 main-title-" + _theme + "-trmd3"}
				variant="text-display-large"
			>
				TRMD3
			</Typography>
			<Typography
				variant="text-headline-large"
				className={"main-subtitle-trmd3 main-subtitle-" + _theme + "-trmd3"}
			>
				Tiny React Material Design 3
			</Typography>
			<ul
				className=" 
			text text-title text-title-large hero-features-trmd3"
			>
				<li>
					<a
						className={
							"hero-link-trmd3 hero-link-text-trmd3 hero-link-text-" +
							_theme +
							"-trmd3"
						}
						href="https://react.dev/"
					>
						React
					</a>
					<a
						className="hero-link-trmd3 hero-handshake-trmd3"
						href="https://github.com/highnet/Tiny-React-MD3"
					>
						🤝
					</a>
					<a
						className={
							"hero-link-trmd3 hero-link-text-trmd3 hero-link-text-" +
							_theme +
							"-trmd3"
						}
						href="https://www.figma.com/community/file/1035203688168086460"
					>
						MD3
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Hero;
