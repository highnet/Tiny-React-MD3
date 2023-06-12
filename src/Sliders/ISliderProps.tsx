import { IComponentProps } from "../Component/IComponentProps";

export interface ISliderProps extends IComponentProps {
    min?: number;
    max?: number;
    value?: number;
    step?: number;
    onValueChange?: (value: number) => void; // define onValueChange as a function that takes a number and returns void

}