export interface IPropsClientSayMain extends IStateClientSayMain {

}


export interface IStateClientSayMain {
  infoBlock: {
      title: {
        name: {
          main: string;
          slogan: string;
        }
      },
      cards:{
              id: nummber,
              desc: string;
              icon: string;
              infoClient: {
                image: string;
                name: string;
                profetion: string;
              }
            }[]
    }
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
        string;Path: string
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
                  string;Path: string
                },
              }
            }[]
    }
}

export interface IPropsHighQualityMain extends IStateHighQualityMain {

}