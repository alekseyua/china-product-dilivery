
export interface IProps {
    children?: React.ReactNode | JSX.Element | Element.outerHTML,
    style?: object,
}
export interface IPropsArrow {
    right?: boolean;
    left?: boolean;
    down?: boolean;
    up?: boolean;
    style?: object;
    addClass?: string;
}
export interface IPropsWrap extends IProps {
    col?: boolean;
    addClass?: string;
}

export interface IPropsMenu extends IProps {
    submenu?: boolean; 
    isMobile?: boolean;
    isIcon?: boolean;
}

export interface IPropsMenuContainer extends IProps {
    isMobile?: boolean;
    isFooter?: boolean;
}

export interface IPropsTagH extends IProps {
    type?: string;
    addClass?: string;
    className?: string
}
export interface IPropsTagTitleText extends IPropsTagH {
    sub?:boolean;
    center?:boolean;
}
export interface IPropsTagText extends IProps {
    tag?: string;
    addClass?: string;
}
export interface IPropsTagP extends IProps { 
    addClass?: string;
    className?: string;
}
export interface IPropsContainer extends IProps { 
    addClass?: string;
    size?: number;
    row?: boolean;
    center?: boolean;
}
export interface IPropsBlockFlex extends IProps { 
    addClass?: string;
    start?: boolean;
    end?: boolean;
    sb?: boolean | 'space-between';
    ab?: boolean | 'around-between';
    eb?: boolean | 'evently-between';
    row?:boolean;
    
}
export interface IPropsBlockGrid extends IProps { 
    addClass?: string;
    col?: number;
    row?: number;
}

export interface IPropsOffset extends IProps {
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
    pt?: number;
    pb?: number;
    pl?: number;
    pr?: number;
    sectionTop?: boolean;
    sectionBottom?: boolean;
}

export interface IPropsInput{
    placeholder?: string;
    value: string | number;
    autocomplete?: HTMLInputAutoCompleteAttribute | undefined;
    name?: string;
    onChange?: any;
    onClick?: any;
    addClass?: string;
    onClickInside?:any;
    onClickOutside?:any;
    formInput: 'input' | 'textarea';
}

export interface IPropsBreadcrumbs {
    title: string;
    onClick: any;
}


export interface IPropsDataPage {
  id: number;
  page: number;
  name: string;
  title_1: string;
  title_2: string;
  description: string;
  short_description: string;
  images: {
    "id": number;
    section: number;
    url: string;
  }[];
  videos: {
    "id": number;
    "section": number;
    "url": string
  }[];
  blocks: IPropsBloks[];
}

export interface IPropsMain {
    listSection: IPropsDataPage[]
}

export interface IPropsBloks {
  id: number;
  section: number;
  title_1: string;
  title_2: string;
  description: string;
  short_description: string;
  images: {
    id: number;
    block: number;
    url: string;
  }[];
  videos: {
    "id": number;
    "section": number;
    "url": string
  }[];
  social_networks: IPropsBloksSocial[];
}

export interface IPropsBloksSocial {
  id: number;
  name: string;
  url: string;
}