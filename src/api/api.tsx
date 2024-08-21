import axios from "axios";

class Api {
    
    async get(params: {
        url: string;
        [key:string]: any
    }){
        const url = 'https://back.cargo8652.com/api/v1/content' + params.url;
        const response = await axios.get(url,{params})
        return response.data
    }
}

export default new Api();