import { IComponentProps } from "../Component/IComponentProps";

/*  
    This code defines an IBadgeProps interface that extends the IComponentProps interface and specifies the types of 
    the props for the Badge component. The props include configuration, xOffset, yOffset and label. The configuration 
    prop determines the size of the badge (small, single-digit or multiple-digits). The xOffset and yOffset props adjust
    the position of the badge relative to its parent element. The label prop displays a number on the badge if provided. 
    The interface also inherits the id and className props from the IComponentProps interface.
*/

// Define an interface for the badge props
export interface IBadgeProps extends IComponentProps {
	configuration?: string; // Configuration of the badge
	xOffset?: number; // X offset of the badge
	yOffset?: number; // Y offset of the badge
	label?: string; // Label of the badge
}
