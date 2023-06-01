import { IComponentProps } from "../Component/IComponentProps";

/*
  1
  1682423199

  This code defines an interface for the properties that can be passed to a
  React functional component called RadioButton. The interface includes several
  props, such as onClick, name, value, and defaultChecked. The onClick prop is a
  function that handles the click event of the radio button. The name and value
  props define the name and value of the radio button, respectively. The
  defaultChecked prop determines whether the radio button is checked by default.
  The interface extends another interface called IComponentProps, which likely
  includes more general properties that are common to all components in the
  application.
*/

export interface IRadioButtonProps extends IComponentProps {
	name?: string;
	value?: string;
	defaultChecked?: boolean;
}
