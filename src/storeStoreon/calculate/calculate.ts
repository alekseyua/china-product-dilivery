import { StoreonStore } from "storeon";
import api from "../../api/api";

export const GET_LIST_DELIVERIES = 'getListDeliverys';
export const SET_LIST_DELIVERIES = "setListDeliveries";
export const GET_LIST_PRODUCTS = 'getListProducts';
export const SET_LIST_PRODUCTS = 'setListProducts';
export const GET_LIST_PRICE = 'getListPrprice';
export const SET_LIST_PRICE = 'setListPrprice';
export const calculate = (store:StoreonStore) => {

    const initListDeliveries: [] = [];
    store.on('@init', ()=>({listDeliveries: initListDeliveries}));
    store.on(SET_LIST_DELIVERIES, (_, data: []) => ({ listDeliveries: data }));
    store.on(GET_LIST_DELIVERIES, async (_,data: {url: string},{dispatch})=> {
        const response: Response = await api.get({
          url: data.url,
        });
        dispatch(SET_LIST_DELIVERIES,response)
    });
    
    const initListProducts: [] = [];
    store.on('@init', ()=>({listProducts: initListProducts}));
    store.on(SET_LIST_PRODUCTS, (_, data: []) => ({ listProducts: data }));
    store.on(GET_LIST_PRODUCTS, async (_,data: {url: string},{dispatch})=> {
        const response: Response = await api.get({
          url: data.url,
        });
        dispatch(SET_LIST_PRODUCTS, response);
    });
    
    const initPriceDelivery: [] = [];
    store.on("@init", () => ({ priceDelivery: initPriceDelivery }));
    store.on(SET_LIST_PRICE, (_, data: []) => ({ priceDelivery: data }));
    store.on(GET_LIST_PRICE, async (_,data: {url: string},{dispatch})=> {
        const response: Response = await api.get({
          ...data,
        });
        dispatch(SET_LIST_PRICE, response);
    });
}