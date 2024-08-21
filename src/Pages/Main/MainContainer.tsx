import React from "react";
import Main from "./Main";
import { connectStoreon } from "storeon/react";
import { IPropsDataPage } from "../../@types/common";

interface IProps {
    dataPage: {
        main: {
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

class MainContainer extends React.Component<IProps>{
    componentDidMount(): void {
        // this.props.dispathe(getDataPage());
        // this.props.test()
        this.props.dispatch('getPage',{
             url: '/page/get_page/',
            slug: 'main'
        })
    }
    render(): React.ReactNode{
        return (
            <Main 
                listSection = {this.props.dataPage?.main?.sections}
                image={this.props.dataPage?.main?.image}
            />
        )
    }
}

// export default connect(()=>{},{test : () => (getDataPage()) })(MainContainer);
export default connectStoreon(
    'dataPage',
    MainContainer)