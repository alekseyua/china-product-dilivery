import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faTwitter, faFacebookF, faSkype, faDAndD} from "@fortawesome/free-brands-svg-icons";


export function WithIconAwesome<P extends object>(WrapComponent: React.ComponentType<P>){
    library.add(fab,faDAndD, faTwitter, faFacebookF, faSkype)
    return (props: P)=>{
        return (<WrapComponent
            {...props}
        />
    )
}}