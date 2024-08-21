export interface IStateContactFormMain {
  aplication: {
    name: string;
    phone: string;
    subject: string;
    email: string;
    message: string;
  }
}

export interface IPropsContactFormMain extends IStateContactFormMain {}