import React, { useState, useRef, useEffect } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { ICarouselProps } from "./ICarouselProps";
import { StringBuilder } from "../Gizmos/StringBuilder";

export const Carousel: React.FC<ICarouselProps> = ({
	id,
	className,
	imgSrcs = [
		"1.png",
		"2.png",
		"3.png",
		"4.png",
		"5.png",
		"6.png",
		"7.png",
		"8.png",
	],
	width = 41.2,
	uniformWidths = false,
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");

	const [currentIndex, setCurrentIndex] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const handleDecrementIndex = () => {
		const newIndex = (currentIndex - 1 + imgSrcs.length) % imgSrcs.length;
		setCurrentIndex(newIndex);
		ref.current?.children[newIndex].scrollIntoView({
			behavior: "smooth",
		});
	};

	const handleIncrementIndex = () => {
		const newIndex = (currentIndex + 1) % imgSrcs.length;
		setCurrentIndex(newIndex);
		ref.current?.children[newIndex].scrollIntoView({
			behavior: "smooth",
		});
	};

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const carouselRect = ref.current?.getBoundingClientRect();
		if (carouselRect) {
			const clickX = e.clientX - carouselRect.left;
			const carouselWidth = carouselRect.width;
			const isLeftHalf = clickX < carouselWidth / 2;
			const clickedSide = isLeftHalf ? "left" : "right";
			if (clickedSide === "left") {
				handleDecrementIndex();
			} else {
				handleIncrementIndex();
			}
		}
	};

	const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
		const carouselRect = ref.current?.getBoundingClientRect();
		if (carouselRect) {
			const touchX = e.touches[0].clientX - carouselRect.left;
			const carouselWidth = carouselRect.width;
			const isLeftHalf = touchX < carouselWidth / 2;
			const clickedSide = isLeftHalf ? "left" : "right";
			if (clickedSide === "left") {
				handleDecrementIndex();
			} else {
				handleIncrementIndex();
			}
		}
	};

	window.addEventListener("load", () => {
		const carousel = document.querySelector(".carousel");
		if (carousel) {
			carousel.scrollLeft = 0;
		}
	});

	let _computedComponentClassName = new StringBuilder()
		.add("carousel")
		.add("btn-" + _theme)
		.add(_className)
		.toString();

	return (
		<div className="carousel-container">
			<div
				id={_id}
				className={_computedComponentClassName}
				ref={ref}
				style={{ width: `${width}rem`, position: "relative" }}
				onClick={handleClick}
				onTouchEnd={handleTouch}
			>
				{imgSrcs.map((item, index) => {
					const distance = Math.abs(currentIndex - index);
					const isExtraSmall = distance >= 2;
					let className = "carousel-item";
					if (index === currentIndex) {
						className += " carousel-item-regular";
					} else {
						if (isExtraSmall) {
							className += " carousel-item-extra-small";
						} else {
							className += uniformWidths
								? " carousel-item-regular"
								: " carousel-item-small";
						}
					}
					return (
						<img
							key={index}
							src={item}
							className={className}
							draggable={false}
						/>
					);
				})}
			</div>
		</div>
	);
};
