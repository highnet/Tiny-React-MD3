/*
This component represents a hero section on a webpage, typically used for
displaying introductory content. The component takes an optional 'hasLogo'
prop to determine whether to show a logo alongside the hero content. It utilizes
the Firebase SDK to fetch and display the logo image (if available). The hero
section includes a main title, subtitle, and several hyperlinks to external
resources. The 'TRMD3' text serves as the primary title, and 'Tiny React
Material Design 3' as the subtitle. The hyperlinks point to the React
website, the TRMD3 GitHub repository, and an MD3 Figma resource. Additionally,
there is a link to the 'TRMD3 Components' npm module for further information.
A code snippet is displayed, showing how to install the 'trmd3components'
package using npm. The component uses the trmd3components library for Typography
and CodeSnippet components.
*/

import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { IHeroProps } from "./IHeroProps";
import Typography from "trmd3components/Typography";
import CodeSnippet from "../CodeSnippet/CodeSnippet";

const firebaseConfig = {
	storageBucket: "gs://tiny-react-md3.appspot.com",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const logoRef = ref(storage, "tiny-react-md3-logo.png");

const Hero: React.FC<IHeroProps> = ({ hasLogo }) => {
	const [_hasLogo] = useState(hasLogo || false);
	const [logoUrl, setLogoUrl] = useState("");

	useEffect(() => {
		getDownloadURL(logoRef).then((url) => {
			setLogoUrl(url);
		});
	}, []);

	return (
		<div className={"hero-section-trmd3"}>
			<div className="flex-trmd3">
				{_hasLogo && (
					<img loading="lazy" src={logoUrl} className="logo-trmd3" />
				)}
			</div>
			<Typography className={"main-title-trmd3"} variant="text-display-large">
				TRMD3
			</Typography>
			<Typography
				variant="text-headline-large"
				className={"main-subtitle-trmd3"}
			>
				Tiny React Material Design 3
			</Typography>
			<div className="hero-features-trmd3">
				<a href="https://react.dev/" className="hero-link-trmd3">
					<Typography variant="text-headline-medium">React</Typography>
				</a>
				<a
					className="hero-link-trmd3"
					href="https://github.com/highnet/Tiny-React-MD3"
				>
					<Typography variant="text-headline-large">🤝</Typography>
				</a>
				<a
					className={"hero-link-trmd3"}
					href="https://www.figma.com/community/file/1035203688168086460"
				>
					<Typography variant="text-headline-medium">MD3</Typography>
				</a>
			</div>
			<a
				className={"hero-link-trmd3"}
				href="https://www.npmjs.com/package/trmd3components"
			>
				<Typography variant="text-title-medium">
					🔗 TRMD3 Components npm module
				</Typography>
			</a>
			<Typography variant="text-body-medium">
				To get started with the TRMD3, you will need to have Node.js and npm
				installed on your machine. Once you have those installed, you can
				install the package onto your React project using npm by entering the
				following command:
			</Typography>
			<CodeSnippet>npm install trmd3components</CodeSnippet>
		</div>
	);
};

export default Hero;
