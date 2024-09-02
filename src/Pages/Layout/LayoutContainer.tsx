import React from 'react';
import Layout from "./Layout";
import { connectStoreon } from 'storeon/react';

interface IState {
    isOpenFAQ: boolean;
}

interface IProps {
    dispatch: any;   
}

class LayoutContainer extends React.Component<IProps, IState> {

    state: IState = {
        isOpenFAQ: false,
    }

    componentDidMount(): void {
        const getFaq = async () => {
            this.props.dispatch('getFAQ', {
                url: '/info/info/get_faq/',
                slug: 'faq'
            })
        }
        // getFaq();
    }
    handlerChangeOpenFAQ = (value: boolean) => {
        this.setState( state => ({...state, isOpenFAQ: value }))
    }

    render(): React.ReactNode {
        return <Layout
            isOpenFAQ={this.state.isOpenFAQ}
            handlerChangeOpenFAQ={this.handlerChangeOpenFAQ}
        />
    }
}

export default connectStoreon(
    
    LayoutContainer
);