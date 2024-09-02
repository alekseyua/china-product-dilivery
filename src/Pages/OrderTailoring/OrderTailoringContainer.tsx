import React from "react";
import OrderTailoring from "./OrderTailoring";
import { IPropsDataPage } from "../../@types/common";
import { connectStoreon } from "storeon/react";

interface IProps {
    dataPage: {
        order_tailoring: {
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
class OrderTailoringContainer extends React.Component<IProps>{
    //order-tailoring
    componentDidMount(): void {
        this.props.dispatch('getPage', {
            url: '/content/page/get_page/',
            slug: 'order_tailoring'
        })
    }
    render(): React.ReactNode{
        return (
            <OrderTailoring 
                listSection={this.props.dataPage?.order_tailoring?.sections}
                image={this.props.dataPage?.order_tailoring?.image}
            />
        )
    }
}

export default connectStoreon(
    'dataPage',
    OrderTailoringContainer
);