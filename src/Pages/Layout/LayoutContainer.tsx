import React from 'react';
import Layout from "./Layout";
import { connectStoreon } from 'storeon/react';
import { IFAQ } from '../../@types/common';

interface IState {
    isOpenFAQ: boolean;
    isOpenItemFAQ: number [];
}

interface IProps {
    dispatch: any;
    dataFAQ: {
        faq: IFAQ[]
    }
}

class LayoutContainer extends React.Component<IProps, IState> {

    state: IState = {
        isOpenFAQ: false,
        isOpenItemFAQ: [],        
    }

    componentDidMount(): void {
        const getFaq = async () => {
            this.props.dispatch('getFAQ', {
                url: '/info/info/get_faq/',
                slug: 'faq'
            })
        }
        getFaq();
    }
    handlerChangeOpenFAQ = (value: boolean) => {
        this.setState( state => ({...state, isOpenFAQ: value }))
    }

    handlerOpenAnswer = (id: number) => {
        let isOpenItemFAQ: number[] = this.state.isOpenItemFAQ;
        if(isOpenItemFAQ.includes(id)){
            isOpenItemFAQ = isOpenItemFAQ.filter(item=>item!==id)
        } else{
            isOpenItemFAQ = [id]
        }
        this.setState({ isOpenItemFAQ })
    }

    render(): React.ReactNode {
        return <Layout
            dataFAQ={this.props.dataFAQ.faq}
            isOpenItemFAQ = {this.state.isOpenItemFAQ}
            isOpenFAQ={this.state.isOpenFAQ}
            handlerChangeOpenFAQ={this.handlerChangeOpenFAQ}
            handlerOpenAnswer={this.handlerOpenAnswer}
        />
    }
}

export default connectStoreon(
    'dataFAQ',
    LayoutContainer
);