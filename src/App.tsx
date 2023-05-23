import { useEffect, useState, useRef } from "react";

import Hero from "./TRMD3/Hero/Hero";
import ButtonsFrame from "./Button/Frame/ButtonsFrame";
import HorizontalDividersFrame from "./Dividers/HorizontalDivider/Frame/HorizontalDividersFrame";
import VerticalDividersFrame from "./Dividers/VerticalDivider/Frame/VerticalDividersFrame";
import RadioButtonsFrame from "./Radio Button/Frame/RadioButtonsFrame";
import BadgesFrame from "./Badge/Frame/BadgesFrame";
import CheckboxesFrame from "./Checkbox/Frame/CheckboxesFrame";
import SwitchesFrame from "./Switch/Frame/SwitchesFrame";
import TypographiesFrame from "./Typography/Frame/TypographiesFrame";
import IconsFrame from "./Icon/Frame/IconsFrame";
import StickyToolbar from "./TRMD3/StickyToolbar/StickyToolbar";

import hljs from "highlight.js";
import "highlight.js/styles/base16/material-lighter.css";
import Cookietrail from "./TRMD3/Cookietrail/Cookietrail";
import TourGuide from "./TRMD3/TourGuide/TourGuide";
import { getPreferredScheme, toggleTheme } from "./Gizmos/Themeing";
import { scrollToSection } from "./Gizmos/Scrolling";
import InputChipsFrame from "./Chips/InputChip/Frame/InputChipsFrame";
import AssistChipsFrame from "./Chips/AssistChip/Frame/AssistChipsFrame";
import StackedCardsFrame from "./Cards/StackedCard/Frame/StackedCardsFrame";
import BottomNavBar from "./TRMD3/BottomNavBar/BottomNavBar";
import HorizontalCardsFrame from "./Cards/HorizontalCard/Frame/HorizontalCardsFrame";

function App() {
	console.log(`	👋 Welcome to TRMD3! 👋	`);

	const [_theme, setTheme] = useState(
		localStorage.getItem("theme") || getPreferredScheme() + "-theme"
	);

	const handleToggleTheme = (): void => {
		toggleTheme(_theme, setTheme);
	};

	const handleScrollToTop = (): void => {
		scrollToSection("tourguide-section", -60);
	};

	useEffect(() => {
		localStorage.setItem("theme", _theme);
		document.body.className = "body-" + _theme;
	}, [_theme]);

	useEffect(() => {
		hljs.highlightAll();
	}, []);

	const boxRef = useRef<HTMLDivElement>(null);
  	const innerCircleRef = useRef<HTMLSpanElement>(null);

	  const DEFAULT_OFFSET_SIZE = 6;

	  function calculateOffset(mousePos: number, boxSize: number, circleSize: number, offsetSize = DEFAULT_OFFSET_SIZE): number {
		const maxOffset = (boxSize - circleSize) / 2;
		const offsetRatio = mousePos / boxSize;
		const offset = offsetRatio * maxOffset * offsetSize;
		return offset;
	  }
	  

useEffect(() => {
  const box = boxRef.current;
  const innerCircle = innerCircleRef.current;

  if (box && innerCircle) {
    const circleSize = innerCircle.offsetWidth;

    box.addEventListener('mousemove', (e) => {
      const boxRect = box.getBoundingClientRect();
      const boxCenterX = boxRect.left + (boxRect.width / 2);
      const boxCenterY = boxRect.top + (boxRect.height / 2);
      const mouseX = e.clientX - boxCenterX;
      const mouseY = e.clientY - boxCenterY;

      const offsetX = calculateOffset(mouseX, boxRect.width, circleSize);
      const offsetY = calculateOffset(mouseY, boxRect.height, circleSize);

      innerCircle.style.left = `${boxCenterX + mouseX + offsetX}px`;
      innerCircle.style.top = `${boxCenterY + mouseY + offsetY}px`;
    });
  }

  return () => {
    if (box && innerCircle) {
      box.removeEventListener('mousemove', (e) => {
      });
    }
  };
}, [boxRef, innerCircleRef]);
	

	return (
		<div className={"App"}>
			<StickyToolbar
				toggleTheme={handleToggleTheme}
				scrollToTop={handleScrollToTop}
			/>
				
			<div id="section-0-trmd3" className="section-trmd3">
				<Hero hasLogo={false} />
				<Cookietrail />
				<TourGuide />
			</div>
			<div id="section-1-trmd3" className="section-trmd3">
			<div className="box" ref={boxRef}>
     		 <span className="inner-circle" ref={innerCircleRef}></span>
   				 </div>  
				<StackedCardsFrame />
				<HorizontalCardsFrame />
			</div>
			<div id="section-2-trmd3" className="section-trmd3">
				<InputChipsFrame />
				<AssistChipsFrame />
			</div>
			<div id="section-3-trmd3" className="section-trmd3">
				<HorizontalDividersFrame />
				<VerticalDividersFrame />
			</div>
			<div id="section-4-trmd3" className="section-trmd3">
				<RadioButtonsFrame />
				<BadgesFrame />
				<CheckboxesFrame />
			</div>
			<div id="section-5-trmd3" className="section-trmd3">
				<SwitchesFrame />
				<ButtonsFrame />
			</div>
			<div id="section-6-trmd3" className="section-trmd3">
				<TypographiesFrame />
				<IconsFrame />
			</div>


			<BottomNavBar scrollToTop={handleScrollToTop} />
		</div>
	);
}

export default App;
