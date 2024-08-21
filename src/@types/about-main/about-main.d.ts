
export interface IStateAboutMain {
  infoBlock: {
      id: number
      title: {
        name: string
        slogan: string
      },
      subTitle: string
      image: string
      desc_part_1: string
      desc_part_2: string
      button: {
        title: string
        locationPath: string
      }
    };
  }
  
  
  
  export interface IPropsAboutMain extends IStateAboutMain {
  handlerChangeScreen: any;
}

export interface IPropsViewMainAbout {
  children: React.ReactNode;
  style?: object    
}