export interface IPropsButton {
    children?: React.ReactNode;
    style?: object;
    title?: string;
    onClick: any;
    type?: "submit" | "reset" | "button" | undefined;
    addClass?: string;
    href?: string;
    iconSvgLeft?: string;
    iconSvgRight?: string;
    iconSvgLeftStyle?: object;
    iconSvgRightStyle?: object;
    
    btnYellow?: boolean;
    btnTransparent?: boolean;
}