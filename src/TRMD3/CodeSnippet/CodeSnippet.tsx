import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Icon from "../../Icon/Icon";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";
import { ICodeSnippetProps } from "./ICodeSnippetProps";

const CodeSnippet: React.FC<ICodeSnippetProps> = ({ children, className }) => {
	const [_children] = useState(children || "");
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";
	const handleCopy = () => {};
	const [_className] = useState(className || "");

	let _computedComponentClassName = new StringBuilder()
		.add("code-snippet-trmd3")
		.add(_className)
		.toString();

	let _computedComponentCopyIconClassName = new StringBuilder()
		.add("code-snippet-copy-icon-trmd3")
		.add("code-snippet-copy-icon-" + _theme + "-trmd3")
		.toString();

	let _computedComponentCodeClassName = new StringBuilder()
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
