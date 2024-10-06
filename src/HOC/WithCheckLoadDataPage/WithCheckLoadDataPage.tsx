import { IPropsDataPage } from "../../@types/common";
import Container from "../../Views/Block/Container";
import Preloader from "../../Views/Preloader/Preloader";

interface IProps{
    listSection: IPropsDataPage[];
}

export function WithCheckLoadDataPage<P extends object>(WrapComponent: React.ComponentType<P>){

    return (props: P & IProps)=>{
        if (props.listSection === undefined) return <Container>{<Preloader />}</Container>;
        if (props.listSection && !props.listSection.length) return <Container>{<Preloader />}</Container>;
        return (<WrapComponent
            {...props}
        />
    )
}}