// TODO: Needs documentation

import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
	storageBucket: "gs://tiny-react-md3.appspot.com",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const logoRef = ref(storage, "tiny-react-md3-logo.png");
const _theme = localStorage.getItem("theme") || "light-theme";

console.log(_theme);

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

	return (
		<div className={"hero-section-trmd3 hero-section-" + _theme + "-trmd3"}>
			<div className="flex-trmd3">
				{_hasLogo ? (
					<img loading="lazy" src={logoUrl} className="logo-trmd3" />
				) : (
					""
				)}
			</div>

			<div className="text text-display text-display-medium">
				🐝Tiny React MD3🐝
			</div>

			<ul className="hero-features-trmd3 text text-title text-title-large">
				<li>
					<a href="https://www.figma.com/community/file/1035203688168086460">
						MD3 🤝
					</a>
					<a href="https://react.dev/">React</a>
				</li>
				<li>
					Tired of bloated React frameworks with thousands of lines of code
					which you will never use?
				</li>
				<li>You like Figma?</li>
				<li>You Like Material Design 3?</li>
				<li>You like React?</li>
				<li>❤️ Then you love Tiny React MD3! ❤️</li>
				<li>
					• Quickly transform your design kit prototypes into stunning and
					modern web applications
				</li>
				<li>
					• A set of easy-to-use, high-peformance, and customizable components
					that follow the Material Design 3 principles and aesthetics
				</li>
				<li>
					• Developer handoffs made easy with ensured parity between the Figma
					material Design 3 Kit and React
				</li>
			</ul>
		</div>
	);
};

export default Hero;
