export interface IPropsButtonGoto {
    onClick: any;
}

export interface IPropsHeaderSectionFull {
    title: string;
    slogan?: string;
    onClick?: any;
    center?: boolean;
    location?: 'flex-start' | 'flex-end' | 'center';
    button?: {
        name: string;
        href: string;
    },
}


export interface IPropsButtonTransparent {
    name: string;
    href: string;
    onClick: any;
}
export interface IPropsHeaderSliderCenter {
    title: string;
    slogan: string;
}
export interface IStateHeaderSliderCreative {
    title: string;
    slogan: string; 
}
export interface IPropsHeaderSliderCreative extends IStateHeaderSliderCreative{
    previous: any
    next: any
}