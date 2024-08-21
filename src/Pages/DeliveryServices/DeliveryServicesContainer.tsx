import React from "react";
import DeliveryServices from "./DeliveryServices";
import { IPropsDataPage } from "../../@types/common";
import { connectStoreon } from "storeon/react";


interface IProps {
    dataPage: {
        delivery: {
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

class DeliveryServicesContainer extends React.Component<IProps>{
    componentDidMount(): void {
        this.props.dispatch('getPage', {
            url: '/page/get_page/',
            slug: 'delivery'
        })
    }
    //
    render(): React.ReactNode{

        return (
            <DeliveryServices 
                listSection={this.props.dataPage?.delivery?.sections}
                image={this.props.dataPage?.delivery?.image}
            />
        )
    }
}


export default connectStoreon(
    'dataPage',
    DeliveryServicesContainer
);