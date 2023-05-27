import React, { useState, useRef } from "react";
import { getPreferredScheme } from "../Gizmos/Themeing";
import { ICarouselProps } from "./ICarouselProps";
import { StringBuilder } from "../Gizmos/StringBuilder";
import Typography from "../Typography/Typography";

const Carousel: React.FC<ICarouselProps> = ({
	id,
	className = "",
	images = [
		{
			imageSource: "1.png",
			label: "Lorem Ipsum",
			supportingText: "Lorem ipsum dolor sit amet",
		},
		{
			imageSource: "2.png",
			label: "Lorem Ipsum",
			supportingText: "Lorem ipsum dolor sit amet",
		},
		{
			imageSource: "3.png",
			label: "Lorem Ipsum",
			supportingText: "Lorem ipsum dolor sit amet",
		},
		{
			imageSource: "4.png",
			label: "Lorem Ipsum",
			supportingText: "Lorem ipsum dolor sit amet",
		},
		{
			imageSource: "5.png",
			label: "Lorem Ipsum",
			supportingText: "Lorem ipsum dolor sit amet",
		},
		{
			imageSource: "6.png",
			label: "Lorem Ipsum",
			supportingText: "Lorem ipsum dolor sit amet",
		},
		{
			imageSource: "7.png",
			label: "Lorem Ipsum",
			supportingText: "Lorem ipsum dolor sit amet",
		},
		{
			imageSource: "8.png",
			label: "Lorem Ipsum",
			supportingText: "Lorem ipsum dolor sit amet",
		},
	],
	width = 41.2,
	uniformWidths = false,
}) => {
	const [_id] = useState(id);
	const [_className] = useState(className);

	const [currentIndex, setCurrentIndex] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	const _theme =
		localStorage.getItem("theme") || `${getPreferredScheme()}-theme`;

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

	const computedComponentClassName = new StringBuilder()
		.add("carousel")
		.add(`btn-${_theme}`)
		.add(_className)
		.toString();

	return (
		<div className="carousel-container">
			<div
				id={_id}
				className={computedComponentClassName}
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
					if (image.label && !image.supportingText) {
						className = className.replace(
							"upper-label-on-carousel-item",
							"lower-label-on-carousel-item"
						);
					}
					return (
						<div className={className}>
							<img key={index} src={image.imageSource} draggable={false} />
							{className === "carousel-item carousel-item-regular" ? (
								<>
									<Typography
										variant="text-title-large"
										className={
											image.label && image.supportingText
												? "element-on-carousel-item upper-label-on-carousel-item"
												: "element-on-carousel-item lower-label-on-carousel-item"
										}
									>
										{image.label}
									</Typography>
									{image.supportingText && (
										<Typography
											variant="text-label-small"
											className="element-on-carousel-item lower-label-on-carousel-item"
										>
											{image.supportingText}
										</Typography>
									)}
								</>
							) : null}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Carousel;
