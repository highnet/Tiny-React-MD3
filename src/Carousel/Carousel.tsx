import React, { useState, useRef, useEffect } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { ICarouselProps } from "./ICarouselProps";
import { StringBuilder } from "../Gizmos/StringBuilder";
import Typography from "../Typography/Typography";

export const Carousel: React.FC<ICarouselProps> = ({
	id,
	className,
	images = [
		{
			imageSource: "1.png",
			label: "test1",
			supportingText: "test2",
		},
		{
			imageSource: "2.png",
			label: "test3",
			supportingText: "test4",
		},
		{
			imageSource: "3.png",
			label: "test5",
			supportingText: "test6",
		},
		{
			imageSource: "4.png",
			label: "test7",
			supportingText: "test8",
		},
		{
			imageSource: "5.png",
			label: "test9",
			supportingText: "test10",
		},
		{
			imageSource: "6.png",
			label: "test11",
			supportingText: "test12",
		},
		{
			imageSource: "7.png",
			label: "test13",
			supportingText: "test14",
		},
		{
			imageSource: "8.png",
			label: "test15",
			supportingText: "test16",
		},
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
		const newIndex = (currentIndex - 1 + images.length) % images.length;
		setCurrentIndex(newIndex);
		ref.current?.children[newIndex].scrollIntoView({
			behavior: "smooth",
			block: "nearest",
		});
	};

	const handleIncrementIndex = () => {
		const newIndex = (currentIndex + 1) % images.length;
		setCurrentIndex(newIndex);
		ref.current?.children[newIndex].scrollIntoView({
			behavior: "smooth",
			block: "nearest",
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
				{images.map((image, index) => {
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
						<div className={className}>
							<img key={index} src={image.imageSource} draggable={false} />
							{className === "carousel-item carousel-item-regular" ? (
								<>
									<Typography
										variant="text-title-large"
										className="element-on-carousel-item upper-label-on-carousel-item"
									>
										{image.label}
									</Typography>
									<Typography
										variant="text-label-small"
										className="element-on-carousel-item lower-label-on-carousel-item"
									>
										{image.supportingText}
									</Typography>
								</>
							) : null}
						</div>
					);
				})}
			</div>
		</div>
	);
};
