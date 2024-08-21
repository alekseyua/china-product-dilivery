interface IPropsCard {
    card: {
        title: {
            name: string;
            profetion: string;

        }
        image: string;
    }
    titleandcocial?: boolean
}

export interface IPropsClientSayCard extends IPropsCard {
    card: {
        id: number;
        title: {
            name: string;
            slogan: string;
        }
        desc: string;
        infoClient:{
            name: string;
            profetion: string;
            image: string;
        }
        icon: string;
        
    }
}