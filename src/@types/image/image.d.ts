export interface IPropsIcon {
    src: string;
    width?: number;
    height?: number;
    style?: object;
    alt?: string;
    addClass?:string;
}
export interface IPropsImage {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    style?: object;
    children?: React.ReactNode;
    addClass?: string;
}

