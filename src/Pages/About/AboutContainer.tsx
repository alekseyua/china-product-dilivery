import React from "react";
import About from "./About";
import { connectStoreon } from "storeon/react";
import { IPropsDataPage } from "../../@types/common";

interface IProps {
    dataPage: {
        about: {
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

class AboutContainer extends React.Component<IProps>{
    componentDidMount(): void {
        this.props.dispatch('getPage', {
            url: '/content/page/get_page/',
            slug: 'about'
        })
    }
    render(): React.ReactNode{
        return (
            <About 
                listSection={this.props.dataPage?.about?.sections}
                image={this.props.dataPage?.about?.image}
            />
        )
    }
}

export default connectStoreon( 
    'dataPage',   
    AboutContainer
);