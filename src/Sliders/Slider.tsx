import React, { useEffect, useRef, useState } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { StringBuilder } from "../Gizmos/StringBuilder";
import { ISliderProps } from "./ISliderProps";
import Typography from "../Typography/Typography";

const Slider: React.FC<ISliderProps> = ({
	className,
	id,
	onMouseEnter,
	onMouseLeave,
	onMouseMove,
	onClick,
	min,
	max,
	value,
	step,
	onValueChange,
}) => {
	const [_className] = useState(className || "");
	const [_id] = useState(id || undefined);
	const [_min] = useState(min || 0);
	const [_max] = useState(max || 100);
	const [_value, setValue] = useState(value || 50);
	const [isOverTrack, setIsOverTrack] = useState(false);
	const [isOverKnob, setIsOverKnob] = useState<boolean>(false);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder()
		.add("slider")
		.add("slider-" + _theme)
		.add(_className)
		.toString();

	const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onValueChange && onValueChange(parseInt(event.target.value));
		setValue(parseInt(event.target.value));
	};

	const gradient = `linear-gradient(to right, var(--m3-sys-light-primary) ${_value}%, var(--m3-sys-light-surface-container-highest) 0%)`;
	const sliderContainerRef = useRef<HTMLDivElement>(null);

	const thumbPosition = `${((_value - _min) / (_max - _min)) * 16}rem`;

	const thumbRef = useRef<HTMLDivElement>(null);
	const thumbOverlayRef = useRef<HTMLDivElement>(null);
	const thumbTooltipRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		sliderContainerRef.current?.addEventListener(
			"mouseenter",
			handleMouseEnter
		);
		sliderContainerRef.current?.addEventListener(
			"mouseleave",
			handleMouseLeave
		);
		return () => {
			sliderContainerRef.current?.removeEventListener(
				"mouseenter",
				handleMouseEnter
			);
			sliderContainerRef.current?.removeEventListener(
				"mouseleave",
				handleMouseLeave
			);
		};
	}, []);

	const handleMouseEnter = (event: MouseEvent) => {
		thumbRef.current?.classList.add("slider-thumb-active");
		thumbOverlayRef.current?.classList.add("slider-thumb-overlay-active");
		thumbTooltipRef.current?.classList.add("slider-thumb-tooltip-active");
	};

	const handleMouseLeave = (event: MouseEvent) => {
		thumbRef.current?.classList.remove("slider-thumb-active");
		thumbOverlayRef.current?.classList.remove("slider-thumb-overlay-active");
		thumbTooltipRef.current?.classList.remove("slider-thumb-tooltip-active");
	};

	return (
		<div
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onMouseMove={onMouseMove}
			onClick={onClick}
			className="slider-container"
			ref={sliderContainerRef}
		>
			<div
				className="slider-thumb"
				ref={thumbRef}
				style={{
					position: "relative",
					width: "2em",
					height: "2rem",
					top: "1.7rem",
					transform: `translateX(${thumbPosition})`,
					borderRadius: "50%",
					zIndex: 1,
				}}
			>
				<div ref={thumbTooltipRef} className="slider-thumb-tooltip">
					<div className="slider-teardrop"></div>
					<Typography variant="text-label-medium" className="slider-value">
						{_value}
					</Typography>
				</div>

				<div ref={thumbOverlayRef} className="slider-thumb-overlay"></div>
			</div>
			<input
				className={_computedComponentClassName}
				id={_id}
				type="range"
				min={_min}
				max={_max}
				value={_value}
				step={step || "0.1"}
				onChange={handleValueChange}
				style={{ background: gradient }}
			></input>
		</div>
	);
};

export default Slider;
