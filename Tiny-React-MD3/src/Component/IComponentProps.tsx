
/* 
    This code is used to define an interface for the common props of all components. It includes four props: disabled, children, id,
    and className. The disabled prop is a boolean that determines whether or not the component is disabled and cannot be interacted
    with. The children prop is a React node that represents the child elements of the component. The id prop is a string that assigns
    a unique identifier to the component. The className prop is a string that assigns a class name to the component for styling purposes.
*/

export interface IComponentProps {
    disabled?: boolean; // Whether or not the component is disabled
    children?: React.ReactNode; // Child elements of the component
    id?: string; // ID of the component
    className?: string; // Class name of the component
}