
export interface IStateAboutSection {
  infoBlock: {
    id: number
    title: {
      name: string
      slogan: string
    },
    subTitle: string
    image1: string
    image2: string
    image_fone: string
    desc_part_1: string
    desc_part_2: string
    button: {
      title: string
      locationPath: string
    }
  };
}



export interface IPropsAboutSection extends IStateAboutSection {
  handlerChangeScreen: any;
}

export interface IStateVideoClientSay {
  isActivePlay: boolean;
  infoBlock: {
    id: number
    title: {
      name: string
      slogan: string
    },
    video: {
      preview: string[],
      listVideo: string[]
    },
    cards: {
      id: number,
      desc: string;
      icon: string;
      infoClient: {
        image: string;
        name: string;
        profetion: string;
      }
    }[]
  };
}



export interface IPropsVideoClientSay extends IStateVideoClientSay {
  handlerChangePlayVideo: any;
}

export interface IStateAboutExpert {
  refSlider?: RefObject;
  infoBlock: {
    title: {
      name: string;
      slogan: string;
    }
    cards: {
      id: nummber,
      image: string,
      title: {
        name: string;
        profetion: string;
      },
      socialmedia: {
        name: string;
        icon: string;
        locationPath: string
      }[];
    }[]
  }
}


export interface IPropsAboutExpert extends IStateAboutExpert {
  sliderNext: any;
  sliderPrev: any;
  setRefSlider: any
}

export interface IStateAboutCounter {
  infoBlock: {
    id: number,
    counters: {
      id: number,
      amount: number,
      desc: string,
    }[]
  }
}

export interface IPropsAboutCounter extends IStateAboutCounter {

}