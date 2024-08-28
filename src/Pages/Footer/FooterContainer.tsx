import React from "react";
import Footer from "./Footer";
import { connectStoreon } from "storeon/react";
import { IPropsDataPage } from "../../@types/common";
import { delay } from "../../helpers/helpers";


interface IProps {
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
    dispatch: any;
}

class FooterContainer extends React.Component<IProps>{
    componentDidMount(): void {
        const getData = async () => {
            this.props.dispatch('getFooter', {
                url: '/page/get_page/',
                slug: 'footer'
            })
        }
        getData();
    }
    render(): React.ReactNode{
        if (
            !this.props.dataHeaderFooter?.footer && !this.props.dataHeaderFooter?.footer?.sections) return <></>
        return (
            <Footer 
                listSection={this.props.dataHeaderFooter?.footer?.sections}
                image={this.props.dataHeaderFooter?.footer?.image}
            />
        )
    }
}

export default connectStoreon(
    'dataHeaderFooter', FooterContainer);