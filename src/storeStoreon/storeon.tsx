import { createStoreon } from "storeon";
import api from "../api/api";
import { IPropsDataPage } from "../@types/common";

interface IFooter {
    footer: {
        "id": number,
        "slug": string
        "name": string
        "title": string
        "description": string
        "image": string
        "sections": IPropsDataPage[]
    }
}

export const getDataPage = (store: any): any => {
    const initDataPage: object = {

    }
    const initDataFooter: IFooter = {
        footer: {
            "id": 0,
            "slug": '',
            "name": '',
            "title": '',
            "description": '',
            "image": '',
            "sections": [],
        }
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
  
    store.on('@init',()=> ({dataPage: initDataFooter}));
    store.on('setDataFooter', ({}, data:object)=> ({dataFooter: data}))
    store.on('dataFooterNull', ({ }, data: object) => ({ dataFooter: initDataFooter }))
    store.on('getFooter', async ({},data:any, {dispatch}:{dispatch:any})=>{
        const response = await api.get({
            url: data.url,
            slug: data.slug
        })
        dispatch('setDataFooter', {
            [data.slug]:response
        })
        console.log({response})
    })
}

export const storeon = createStoreon([
    getDataPage
]
)