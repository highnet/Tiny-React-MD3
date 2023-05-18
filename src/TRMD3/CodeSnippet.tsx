import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface ICodeSnippetProps {
	children?: React.ReactNode;
}

const CodeSnippet: React.FC<ICodeSnippetProps> = ({ children }) => {
	const [_children] = useState(children || "");

	const handleCopy = () => {
		alert("Text copied!");
	};

	return (
		<CopyToClipboard text={_children.toString()} onCopy={handleCopy}>
			<div onClick={handleCopy}>
				<pre>
					<code className="language-html">{_children}</code>
				</pre>
			</div>
		</CopyToClipboard>
	);
};

export default CodeSnippet;
