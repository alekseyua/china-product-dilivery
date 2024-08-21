export interface IPropsExpertMain extends IStateExpertMain {}
export interface IStateExpertMain {
    infoBlock: {
        title: {
          name: {
            main: string;
            slogan: string;
          }
        },
        cards:{
                id: nummber,
                image: string,
                title: {
                  name: string;
                  profetion: string;
                },
                socialmedia: {
                  name:string;
                  icon:string;
                  locationPath: string
                }[];
              }[]
      }
  }