import { createStoreon } from "storeon";
import api from "../api/api";


export const getDataPage = (store: any): any => {
    const initDataPage: object = {

    }
    store.on('@init',()=> ({dataPage: initDataPage}));
    store.on('setDataPage', ({}, data:object)=> ({dataPage: data}))
    store.on('dataPageNull', ({ }, data: object) => ({ dataPage: initDataPage }))
    store.on('getPage', async ({},data:any, {dispatch}:{dispatch:any})=>{
        const response = await api.get({
            url: data.url,
            slug: data.slug
        })
        dispatch('setDataPage', {
            [data.slug]:response
        })
        console.log({response})
    })
}

export const storeon = createStoreon([
    getDataPage
]
)