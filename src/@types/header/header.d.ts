export interface IPropsHeader {
    children?: React.ReactNode | JSX.Element
    isFixed?: boolean;
    isBurger?: boolean;
    handlerClickButtonUp?: any;
    isMainPage?: boolean;
    style?:{};
}

export interface IStateHeader {
    isFixed:boolean;
    isBurger: boolean;
}

export interface IStateBurger {
    isOpen: boolean
}

export interface INavBurger {
    isOpen: boolean;
    handlerOpenBurger?: () => void;
    children?: React.ReactNode;
    listMenu?:  {
        id: number,
        title: string,
        path: string,
        submenu: [],
        color: string
    } | any;
    
}

export interface IBurger {
    onClick?: () => void
}

export interface IBurgerLogo {
    isBurger?: boolean
}

export interface IHeaderMenu {
    listMenu:  {
        id: number,
        title: string,
        path: string,
        submenu: [],
        color: string
    } | any;
    isMobile?: boolean
    isFooter?: boolean
    isIcon?: boolean
}

export interface IPropsMobileContainer {
    isBurger?: boolean
}