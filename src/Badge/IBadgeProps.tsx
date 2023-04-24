import { IComponentProps } from "../Component/IComponentProps";

/*  
    1
    1682360238

    This code defines an interface called "IBadgeProps" which extends another interface
    called "IComponentProps".

    The "IBadgeProps" interface includes four optional props: "configuration" is a
    string prop that specifies the configuration of the badge. "xOffset" is a number
    prop that specifies the X offset of the badge. "yOffset" is a number prop that
    specifies the Y offset of the badge. "label" is a string prop that specifies the
    label of the badge.

    These props are used in the "Badge" component to customize the appearance and
    positioning of the badge element.
*/

// Define an interface for the badge props
export interface IBadgeProps extends IComponentProps {
	configuration?: string; // Configuration of the badge
	xOffset?: number; // X offset of the badge
	yOffset?: number; // Y offset of the badge
	label?: string; // Label of the badge
}
