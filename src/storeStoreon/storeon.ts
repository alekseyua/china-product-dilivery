import { createStoreon } from "storeon";
import { calculate } from "./calculate/calculate";
import { getDataPage } from "./page/page";


export const storeon = createStoreon([
    getDataPage,
    calculate,
]
)