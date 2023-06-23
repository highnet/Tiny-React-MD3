import React, { useState } from "react";

import { IFilterChipProps } from "./IFilterChipProps";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";

const FilterChip: React.FC<IFilterChipProps> = ({}) => {
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";

	let _computedComponentClassName = new StringBuilder().toString();

	return <button></button>;
};

export default FilterChip;
