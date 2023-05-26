import React, { useState, useRef } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { ICarouselProps } from "./ICarouselProps";
import { StringBuilder } from "../Gizmos/StringBuilder";
import Button from "../Button/Button";

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
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);
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
		setStartX(e.clientX);
		setScrollLeft(ref.current?.scrollLeft || 0);
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.clientX - ref.current!.offsetLeft;
		const walk = (x - startX) * 0.5; // scroll-fast
		ref.current!.scrollLeft = scrollLeft - walk;
		const itemWidth = ref.current!.children[0].clientWidth;
		const currentIndex = Math.round(ref.current!.scrollLeft / itemWidth);
		setCurrentIndex(currentIndex);
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
		if (!isDragging) {
			ref.current?.children[currentIndex].scrollIntoView({
				behavior: "smooth",
			});
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
			<Button onClick={handleDecrementIndex}>Prev</Button>

			<div
				id={_id}
				className={_computedComponentClassName}
				ref={ref}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
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

			<Button onClick={handleIncrementIndex}>Next</Button>
		</div>
	);
};
