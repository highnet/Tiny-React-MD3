import React, { useState, useRef } from "react";
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
}) => {
	const [_id] = useState(id || undefined);
	const [_className] = useState(className || "");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isDragging, setIsDragging] = useState(false);

	const ref = useRef<HTMLDivElement>(null);
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const handleDecrementIndex = () => {
		const newIndex = (currentIndex - 1 + imgSrcs.length) % imgSrcs.length;
		setCurrentIndex(newIndex);
		ref.current?.children[newIndex].scrollIntoView({ behavior: "smooth" });
	};

	const handleIncrementIndex = () => {
		const newIndex = (currentIndex + 1) % imgSrcs.length;
		setCurrentIndex(newIndex);
		ref.current?.children[newIndex].scrollIntoView({
			behavior: "smooth",
		});
	};

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		setIsDragging(true);
	};

	const handleItemClick = (index: number) => {
		if (!isDragging) {
			const distance = index - currentIndex;
			if (distance >= 1) {
				handleIncrementIndex();
			} else if (distance <= -1) {
				handleDecrementIndex();
			}
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		setIsDragging(true);
	};

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {};

	const handleTouchEnd = () => {
		setIsDragging(false);
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
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				style={{ width: `${width}rem` }}
			>
				{imgSrcs.map((item, index) => {
					const distance = Math.abs(currentIndex - index);
					const isExtraSmall = distance >= 2;
					const className = `carousel-item ${
						index === currentIndex
							? "active"
							: isExtraSmall
							? "carousel-item-extra-small"
							: "carousel-item-small"
					}`;
					const style = isExtraSmall ? { width: "5.6rem" } : {};
					return (
						<img
							key={index}
							src={item}
							className={className}
							draggable={false}
							style={style}
							onClick={() => handleItemClick(index)}
						/>
					);
				})}
			</div>
		</div>
	);
};
