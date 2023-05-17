import { useState } from "react";

interface ICodeSnippetProps {
	children?: React.ReactNode;
}

const CodeSnippet: React.FC<ICodeSnippetProps> = ({ children }) => {
	const [_children] = useState(children || "");
	return (
		<div>
			<pre>
				<code className="language-html">{_children}</code>
			</pre>
		</div>
	);
};

export default CodeSnippet;
