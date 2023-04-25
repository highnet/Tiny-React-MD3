/* 
1
1682423199

This code defines an interface called IComponentProps that has four optional properties.
disabled: a boolean that represents whether or not the component is disabled.
children: a React node that represents the child elements of the component.
id: a string that represents the ID of the component.
className: a string that represents the class name of the component.
*/

export interface IComponentProps {
	disabled?: boolean; // Whether or not the component is disabled
	children?: React.ReactNode; // Child elements of the component
	id?: string; // ID of the component
	className?: string; // Class name of the component
}
