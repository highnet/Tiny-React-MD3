import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Icon from "../../Icon/Icon";
import { getPreferredScheme } from "../../Gizmos/Themeing";
import { StringBuilder } from "../../Gizmos/StringBuilder";

interface ICodeSnippetProps {
	children?: React.ReactNode;
	className?: string;
}

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

	return (
		<CopyToClipboard text={_children.toString()}>
			<div className={_computedComponentClassName} onClick={handleCopy}>
				<Icon
					className={
						"code-snippet-copy-icon-trmd3 code-snippet-copy-icon-" +
						_theme +
						"-trmd3"
					}
				>
					content_copy
				</Icon>
				<pre>
					<code
						className={
							"language-html code-snippet-code-trmd3 code-snippet-code-" +
							_theme +
							"-trmd3"
						}
					>
						{_children + " "}
					</code>
				</pre>
			</div>
		</CopyToClipboard>
	);
};

export default CodeSnippet;
