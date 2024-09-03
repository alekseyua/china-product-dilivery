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
    
    store.on('@init',()=> ({dataPage: initDataPage}));
    store.on('setDataPage', ({}, data:object)=> ({dataPage: data}))
    store.on('dataPageNull', () => ({ dataPage: initDataPage }))
    store.on('getPage', async ({},data:any, {dispatch}:{dispatch:any})=>{
        const response = await api.get({
            url: data.url,
            slug: data.slug
        })
        dispatch('setDataPage', {
            [data.slug]:response
        })
    })
  
    const initdataHeaderFooter: IFooter = {
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
    store.on('@init',()=> ({dataPage: initdataHeaderFooter}));
    store.on('setdataHeaderFooter', ({}, data:object)=> ({dataHeaderFooter: data}))
    store.on('dataHeaderFooterNull', () => ({ dataHeaderFooter: initdataHeaderFooter }))
    store.on('getFooter', async ({},data:any, {dispatch}:{dispatch:any})=>{
        const response = await api.get({
            url: data.url,
            slug: data.slug
        })
        dispatch('setdataHeaderFooter', {
            [data.slug]:response
        })
    })
    
    interface IFAQ {}
    const initdataFAQ:IFAQ = {

    }
    store.on('@init',()=> ({dataFAQ: initdataFAQ}));
    store.on('setdataFAQ', ({}, data:object)=> ({dataFAQ: data}))
    store.on('dataFAQNull', () => ({ dataHeaderFooter: initdataFAQ }))
    store.on('getFAQ', async ({},data:any, {dispatch}:{dispatch:any})=>{
        const response = await api.get({
            url: data.url,
            slug: data.slug
        })
        dispatch('setdataFAQ', {
            [data.slug]:response
        })
    })
}

export const storeon = createStoreon([
    getDataPage
]
)