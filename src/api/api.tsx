import axios from "axios";

class Api {
    
    async get(params: {
        url: string | undefined;
        [key:string]: any
    }){
        try {
            
            const url = 'https://back.cargo8652.com/api/v1' + params.url;
            delete params['url']
            const response = await axios.get(url,{params})
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default new Api();