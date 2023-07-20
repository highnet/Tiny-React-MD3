/*
React component interface for the CodeSnippet component.
Props: children: React nodes representing the content of the CodeSnippet.
className: Additional CSS class to customize the CodeSnippet's appearance.
This interface defines the expected props for the CodeSnippet component,
which is a reusable React component. It can receive children as its content
and an optional className to apply custom styling.
*/

export interface ICodeSnippetProps {
	children?: React.ReactNode;
	className?: string;
}
