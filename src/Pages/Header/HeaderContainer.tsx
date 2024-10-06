import React from "react";
import Header from "./Header";
import { IStateHeader } from "../../@types/header/header";
import withRouter from "../../HOC/withRouter/withRouter";
import { WithRouterProps } from "../../@types/hoc/hoc";
import { connectStoreon } from "storeon/react";
import { IFooter } from "../../@types/footer/footer";

interface IProps{
    dispatch: any;
    handlerChangeOpenFAQ: any;
    dataHeaderFooter: IFooter;
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
        document.documentElement.style.setProperty('--fill-scrolling',`${36*(scrolled*10)}deg`);
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
        document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
      }
    render(): React.ReactNode{
        return (
            <Header 
                phoneNumber={this.props?.dataHeaderFooter?.footer.sections[2].blocks[1].description}
                listSocialNetwork={this.props?.dataHeaderFooter?.footer.sections[0].blocks[0].social_networks}
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