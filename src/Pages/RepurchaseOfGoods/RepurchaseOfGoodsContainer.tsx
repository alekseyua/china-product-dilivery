import React from "react";
import RepurchaseOfGoods from "./RepurchaseOfGoods";
import { connectStoreon } from "storeon/react";
import { IPropsDataPage } from "../../@types/common";

interface IProps {
    dataPage: {
        repurchase_of_goods: {
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
class RepurchaseOfGoodsContainer extends React.Component<IProps>{
    //order-tailoring
    componentDidMount(): void {
        this.props.dispatch('getPage', {
            url: '/page/get_page/',
            slug: 'repurchase_of_goods'
        })
    }

    render(): React.ReactNode{
        return (
            <RepurchaseOfGoods 
                listSection={this.props.dataPage?.repurchase_of_goods?.sections}
                image={this.props.dataPage?.repurchase_of_goods?.image}
            />
        )
    }
}

export default connectStoreon(
    'dataPage', 
    RepurchaseOfGoodsContainer);