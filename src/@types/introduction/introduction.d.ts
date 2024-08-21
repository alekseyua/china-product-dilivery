export interface IPropsIntroduction {
    listCards: {
        id: number;
        title: string;
        image: string;
        content: string;
    }[]
}

export interface IStateIntroduction {
    cards: {
        id: number;
        title: string;
        image: string;
        content: string;
    }[]
}

export interface IPropsViewIntroduction {
    children:LReact.ReactNode;
    style?: object;
    
}