import api from "../../api/api";
import { IPropsDataPage } from "../../@types/common";
import { StoreonStore } from "storeon";

export const getDataPage = (store: StoreonStore): any => {
  const initDataPage: object = {};

  store.on("@init", () => ({ dataPage: initDataPage }));
  store.on("setDataPage", (_, data: object) => ({ dataPage: data }));
  store.on("dataPageNull", () => ({ dataPage: initDataPage }));
  store.on("getPage", async (_, data: any, { dispatch }: { dispatch: any }) => {
    const response = await api.get({
      url: data.url,
      slug: data.slug,
    });
    dispatch("setDataPage", {
      [data.slug]: response,
    });
  });

  interface IFooter {
    footer: {
      id: number;
      slug: string;
      name: string;
      title: string;
      description: string;
      image: string;
      sections: IPropsDataPage[];
    };
  }

  const initdataHeaderFooter: IFooter = {
    footer: {
      id: 0,
      slug: "",
      name: "",
      title: "",
      description: "",
      image: "",
      sections: [],
    },
  };
  store.on("@init", () => ({ dataPage: initdataHeaderFooter }));
  store.on("setdataHeaderFooter", (_, data: object) => ({
    dataHeaderFooter: data,
  }));
  store.on("dataHeaderFooterNull", () => ({
    dataHeaderFooter: initdataHeaderFooter,
  }));
  store.on(
    "getFooter",
    async (_, data: any, { dispatch }: { dispatch: any }) => {
      const response = await api.get({
        url: data.url,
        slug: data.slug,
      });
      dispatch("setdataHeaderFooter", {
        [data.slug]: response,
      });
    }
  );

  interface IFAQ {}
  const initdataFAQ: IFAQ = {};
  store.on("@init", () => ({ dataFAQ: initdataFAQ }));
  store.on("setdataFAQ", (_, data: object) => ({ dataFAQ: data }));
  store.on("dataFAQNull", () => ({ dataHeaderFooter: initdataFAQ }));
  store.on("getFAQ", async (_, data: any, { dispatch }: { dispatch: any }) => {
    const response = await api.get({
      url: data.url,
      slug: data.slug,
    });
    dispatch("setdataFAQ", {
      [data.slug]: response,
    });
  });
};
