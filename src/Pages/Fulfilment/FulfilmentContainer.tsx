import React from "react";
import Fulfilment from "./Fulfilment";
import { IPropsDataPage } from "../../@types/common";
import { connectStoreon } from "storeon/react";

interface IProps {
    dataPage: {
        fullfilment: {
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

class FulfilmentContainer extends React.Component<IProps> {
    componentDidMount(): void {
        this.props.dispatch('getPage', {
            url: '/content/page/get_page/',
            slug: 'fullfilment'
        })
    }
    render(): React.ReactNode {
        return (
            <Fulfilment
                listSection={this.props.dataPage?.fullfilment?.sections}
                image={this.props.dataPage?.fullfilment?.image}
            />
        )
    }
}

export default connectStoreon(
    'dataPage',
    FulfilmentContainer
);