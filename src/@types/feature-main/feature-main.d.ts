export interface IPropsFeatureMain {
  handlerChangeScreen: any;
}


export interface IStateHighQualityMain {
  infoBlock: {
      title: {
        name: {
          main: string;
          slogan: string;
        }
        slogan: string
      },
      button: {
        title: string
        locationPath: string
      },
      cards:{
              id: nummber,
              image: string,
              title: {
                tag: string;
                icon: string;
                name: string;
                desc: string;
                button: {
                  name: string
                  locationPath: string
                },
              }
            }[]
    }
}

export interface IPropsHighQualityMain extends IStateHighQualityMain {
  handlerChangeScreen: any;
}