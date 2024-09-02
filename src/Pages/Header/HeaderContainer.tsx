import React from "react";
import Header from "./Header";
import { IStateHeader } from "../../@types/header/header";
import withRouter from "../../HOC/withRouter/withRouter";
import { WithRouterProps } from "../../@types/hoc/hoc";
import { connectStoreon } from "storeon/react";
import { IPropsDataPage } from "../../@types/common";

interface IProps{
    dispatch: any;
    handlerChangeOpenFAQ: any;
    dataHeaderFooter: {
        footer: {
            "id": number,
            "slug": string
            "name": string
            "title": string
            "description": string
            "image": string
            "sections": IPropsDataPage[]
        }
    };
}

class HeaderContainer extends React.Component<WithRouterProps & IProps,IStateHeader>{

    state:IStateHeader = {
        isFixed: false,
        isBurger: false,
    }

    listenToScroll = ( e: any )=>{
        const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = winScroll / height;
        // console.log({winScroll,height,scrolled})
        document.documentElement.style.setProperty('--fill-scrolling',`${36*(scrolled*10)}deg`);
        // console.log({scrolled: scrolled * 100})
        // if(scrolled * 100 > 8 && scrolled * 100 < 35){
        //     document.documentElement.style.setProperty('--animation-main-about-right',`fadeInRight`);
        //     document.documentElement.style.setProperty('--animation-main-about-left',`fadeInLeft`);
        // }else{
        //     document.documentElement.style.setProperty('--animation-main-about-right',``);
        //     document.documentElement.style.setProperty('--animation-main-about-left',``);
        // }
        // if(scrolled * 100 > 18 && scrolled * 100 < 35){
        //     document.documentElement.style.setProperty('--animation-main-feature',`fadeInUp`);
        // }else{
        //     document.documentElement.style.setProperty('--animation-main-feature',``);
        // }
        // if(scrolled * 100 > 35 && scrolled * 100 < 55){
        //     document.documentElement.style.setProperty('--animation-main-counter',`fadeInUp`);
        // }else{
        //     document.documentElement.style.setProperty('--animation-main-counter',``);
        // }
        // if(scrolled * 100 > 45 && scrolled * 100 < 65){
        //     document.documentElement.style.setProperty('--animation-main-hight',`fadeInUp`);
        // }else{
        //     document.documentElement.style.setProperty('--animation-main-hight',``);
        // }
        // if(scrolled * 100 > 55 && scrolled * 100 < 75){
        //     document.documentElement.style.setProperty('--animation-main-expert',`fadeInUp`);
        // }else{
        //     // document.documentElement.style.setProperty('--animation-main-expert',``);
        // }
        // if(scrolled * 100 > 65 && scrolled * 100 < 95){
        //     document.documentElement.style.setProperty('--animation-main-contact-left',`fadeInLeft`);
        //     document.documentElement.style.setProperty('--animation-main-contact-right',`fadeInRight`);
        // }else{
        //     // document.documentElement.style.setProperty('--animation-main-contact-left',``);
        //     // document.documentElement.style.setProperty('--animation-main-contact-right',``);
        // }
        
        this.setState(state =>({
            ...state,
            isFixed: winScroll > 100,
        }))
    }

    listenWidth: any = () => {
        const sizeX = window.innerWidth;
        if(sizeX < 992){
            this.setState(state => ({
                ...this.state,
                isBurger: true
            }))
        }else{
            this.setState(state => ({
                ...this.state,
                isBurger: false
            }))
        }
        return window.removeEventListener('reset', this.listenWidth)
    }
    
    componentDidMount(): void {
        this.listenWidth()
        window.addEventListener('scroll', this.listenToScroll)   
        window.addEventListener('resize', this.listenWidth)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
        window.removeEventListener('reset', this.listenWidth)
      }
      handlerClickButtonUp=()=>{
        console.log('click up')
        document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
      }
    render(): React.ReactNode{
        return (
            <Header 

                phoneNumber={this.props?.dataHeaderFooter?.footer.sections[2].blocks[1].description}
                socialNetwork={this.props?.dataHeaderFooter?.footer.sections[0].blocks[0].social_networks}

                isMainPage={this.props.location && this.props.location.pathname === '/'}
                isFixed={this.state.isFixed}
                isBurger={this.state.isBurger}
                handlerClickButtonUp={this.handlerClickButtonUp}

                handlerChangeOpenFAQ={this.props.handlerChangeOpenFAQ}
            />
        )
    }
}

export default connectStoreon( 
    'dataHeaderFooter',
    withRouter (HeaderContainer)
);