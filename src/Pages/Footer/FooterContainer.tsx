import React from "react";
import Footer from "./Footer";
import { connectStoreon } from "storeon/react";
import { IPropsDataPage } from "../../@types/common";
import { delay } from "../../helpers/helpers";


interface IProps {
    dataFooter: {
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
        getData()
    }
    render(): React.ReactNode{
        if (
            !this.props.dataFooter?.footer && !this.props.dataFooter?.footer?.sections) return <></>
        return (
            <Footer 
                listSection={this.props.dataFooter?.footer?.sections}
                image={this.props.dataFooter?.footer?.image}
            />
        )
    }
}

export default connectStoreon(
    'dataFooter', FooterContainer);