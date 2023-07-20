/*
The code defines a React functional component called CodeSnippet. This
component represents a code snippet that can be displayed on the UI and copied
to the clipboard by the user. The component takes two props: 'children',
which represents the code snippet content to be displayed, and 'className',
which can be used to provide additional styling classes. The 'useState' hook
is used to set internal state variables for '_children' and '_className',
which default to an empty string if not provided. The component uses the
'localStorage' API to check for the user's preferred theme and applies
corresponding CSS classes to the code snippet container and copy icon. The
code snippet is wrapped in a 'CopyToClipboard' component from the
'react-copy-to-clipboard' library. This allows users to copy the code snippet
to their clipboard when they click on it. The code snippet's appearance is
determined by several CSS classes, such as '_computedComponentClassName',
'_computedComponentCopyIconClassName', and '_computedComponentCodeClassName'.
These classes are created based on the theme and any additional styling classes
passed through the 'className' prop. The code snippet content is displayed
inside a <pre> element containing a <code> element with the class
'_computedComponentCodeClassName'. The code snippet content is obtained
from the '_children' state variable. The copy icon is represented by the 'Icon'
component imported from "trmd3components/Icon". The icon is displayed as a
clickable element with the class '_computedComponentCopyIconClassName',
which adds styles based on the theme. When the user clicks on the code snippet,
the 'handleCopy' function is called, but it doesn't have any functionality in the current code. It can be extended in the future to provide copy functionality using 'react-copy-to-clipboard'.
The entire code snippet container is wrapped in a div with the class
'_computedComponentClassName'. This class adds styling based on the theme
and any additional styling classes passed via 'className' prop.
*/

import React from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { getPreferredScheme } from "trmd3components/Themeing";
import { StringBuilder } from "trmd3components/StringBuilder";
import { ICodeSnippetProps } from "./ICodeSnippetProps.tsx";
import Icon from "trmd3components/Icon";

const CodeSnippet: React.FC<ICodeSnippetProps> = ({ children, className }) => {
	const [_children] = useState(children || "");
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";
	const handleCopy = () => {};
	const [_className] = useState(className || "");

	const _computedComponentClassName = new StringBuilder()
		.add("code-snippet-trmd3")
		.add(_className)
		.toString();

	const _computedComponentCopyIconClassName = new StringBuilder()
		.add("code-snippet-copy-icon-trmd3")
		.add("code-snippet-copy-icon-" + _theme + "-trmd3")
		.toString();

	const _computedComponentCodeClassName = new StringBuilder()
		.add("language-jsx")
		.add("code-snippet-code-trmd3")
		.add("code-snippet-code-" + _theme + "-trmd3")
		.toString();

	return (
		<CopyToClipboard text={_children.toString()}>
			<div className={_computedComponentClassName} onClick={handleCopy}>
				<Icon className={_computedComponentCopyIconClassName}>
					content_copy
				</Icon>
				<pre>
					<code className={_computedComponentCodeClassName}>
						{_children.toString()}
					</code>
				</pre>
			</div>
		</CopyToClipboard>
	);
};

export default CodeSnippet;
