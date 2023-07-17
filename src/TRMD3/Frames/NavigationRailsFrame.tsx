import React from "react";
import ComponentFrameTitle from "../ComponentFrameTitle/ComponentFrameTitle";
import CodeSnippet from "../CodeSnippet/CodeSnippet";
import NavigationRail from "trmd3components/NavigationRail";
import { StringBuilder } from "trmd3components/StringBuilder";
import { getPreferredScheme } from "trmd3components/Themeing";
import Typography from "trmd3components/Typography";

const NavigationRailsFrame: React.FC = () => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	const _computedFrameClassName = new StringBuilder()
		.add("flex-trmd3")
		.add("flex-column-trmd3")
		.add("frame-trmd3")
		.add("frame-" + _theme + "-trmd3")
		.add("bottom-app-bars-frame-trmd3")
		.add("bottom-app-bars-frame-" + _theme + "-trmd3")
		.toString();

	const _computedTrmd3SectionTitlesClassName = new StringBuilder()
		.add("section-title-trmd3")
		.add("section-title-" + _theme + "-trmd3")
		.toString();

	return (
		<div className={_computedFrameClassName}>
			<Typography
				id="navigation-rails-section"
				variant="text-title-large"
				className={_computedTrmd3SectionTitlesClassName}
			>
				🚈
			</Typography>
			<ComponentFrameTitle link="https://github.com/highnet/Tiny-React-MD3/blob/master/src/readme.md#-bottom-app-bar">
				Navigation Rails
			</ComponentFrameTitle>
			<NavigationRail
				className={"navigation-rail-on-frame-trmd3"}
				icons={[
					{
						name: "hive",
						onClick: undefined,
					},
					{
						name: "search",
						onClick: undefined,
						label: "Search",
					},
					{
						name: "spa",
						onClick: undefined,
						badge: { configuration: "small" },
					},
					{
						name: "air",
						onClick: undefined,
						badge: { configuration: "small" },
						label: "Air",
					},
					{
						name: "water",
						onClick: undefined,
						badge: { configuration: "single-digit", value: 3 },
					},
					{
						name: "accessibility",
						onClick: undefined,
						badge: { configuration: "single-digit", value: 3 },
						label: "Accessibility",
					},
					{
						name: "favorite",
						onClick: undefined,
						badge: { configuration: "multiple-digits", value: 123 },
					},
					{
						name: "language",
						onClick: undefined,
						badge: { configuration: "multiple-digits", value: 123 },
						label: "Language",
					},
				]}
				fab={{
					onClick: () => {
						alert("FAB clicked!");
					},
					fabIconName: "warning",
				}}
			/>

			<CodeSnippet>
				{`
<NavigationRail
	className={"navigation-rail-on-frame-trmd3"}
		icons={[
		{ name: "hive", onClick: undefined },
		{ name: "search", onClick: undefined, label: "Search" },
		{ name: "spa", onClick: undefined, badge: { configuration: "small" } },
		{ name: "air", onClick: undefined, badge: { configuration: "small" }, label: "Air" },
		{ name: "water", onClick : undefined, badge: { configuration: "single-digit", value: 3 } },
		{ name: "accessibility", onClick: undefined, badge: { configuration: "single-digit", value: 3 }, label: "Accessibility" },
		{ name: "favorite", onClick: undefined, badge: { configuration: "multiple-digits", value: 123 } },
		{ name: "language", onClick: undefined, badge: { configuration: "multiple-digits", value: 123 }, label: "Language" },
		]}
		fab={{
			onClick: () => {
				alert("FAB clicked!");
			},
			fabIconName: "warning",
			}}
			/>
			`}
			</CodeSnippet>
		</div>
	);
};
export default NavigationRailsFrame;
