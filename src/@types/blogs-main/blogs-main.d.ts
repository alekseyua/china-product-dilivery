export interface IPropsBlogsMain extends IStateBlogsMain {
  handlerChangeScreen: any;
}


export interface IStateBlogsMain {
  infoBlock: {
      title: {
        name: {
          main: string;
          slogan: string;
        }
      },
      button: {
        title: string
        locationPath: string
      },        
      cards:{
        id: nummber,
        image: string,
        title: {
          name: string;
          locationPath: string;
        },
        desc: string;
        button: {
          title: string
          locationPath: string
        },        
      }[]
    }
}