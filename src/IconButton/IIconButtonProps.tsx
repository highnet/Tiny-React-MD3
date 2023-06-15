import { IComponentProps } from "../Component/IComponentProps";

export interface IIconButtonProps extends IComponentProps { 
    configuration?: string;
    toggleAble?: boolean;
    selected?: boolean;
}