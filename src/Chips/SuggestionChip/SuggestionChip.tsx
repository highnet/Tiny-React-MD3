import React, { useState } from "react";
import { ISuggestionChipProps } from "./ISuggestionChipProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";

const SuggestionChip: React.FC<ISuggestionChipProps> = ({}) => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder().toString();

	return <button></button>;
};

export default SuggestionChip;
