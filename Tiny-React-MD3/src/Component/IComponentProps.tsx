export interface IComponentProps {
    disabled?: boolean; // Whether or not the component is disabled
    children?: React.ReactNode; // Child elements of the component
    id?: string; // ID of the component
    className?: string; // Class name of the component
}