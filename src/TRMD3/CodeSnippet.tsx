import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Icon from "../Icon/Icon";
import { getPreferredScheme } from "../Gizmos/Themeing";

interface ICodeSnippetProps {
	children?: React.ReactNode;
}

const CodeSnippet: React.FC<ICodeSnippetProps> = ({ children }) => {
	const [_children] = useState(children || "");
	const _theme =
		localStorage.getItem("theme") || getPreferredScheme() + "-theme";
	const handleCopy = () => {};

	return (
		<CopyToClipboard text={_children.toString()}>
			<div className={"code-snippet-trmd3"} onClick={handleCopy}>
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
					<code className="language-html code-snippet-code-trmd3">
						{_children + " "}
					</code>
				</pre>
			</div>
		</CopyToClipboard>
	);
};

export default CodeSnippet;
