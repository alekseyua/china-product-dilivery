import React, { Component } from 'react'
import Calculate from './Calculate';
import { IListDeliveries, IListProducts, IPropsDataPage } from '../../../@types/common';
import { connectStoreon } from 'storeon/react';
import { GET_LIST_DELIVERIES, GET_LIST_PRICE, GET_LIST_PRODUCTS } from '../../../storeStoreon/calculate/calculate';
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';


interface IProps {
  dataSection: IPropsDataPage,
  dispatch: any;
  listDeliveries: IListDeliveries[]
  listProducts: IListProducts[]
  priceDelivery: { price: number }
}

interface IState {
  city_out: string;
  city_in: string;
  wheigt: number | undefined;
  volume: number | undefined;
  delivery: {
    label: string;
    value?: string
  };
  type_product: {
    label: string;
    value?: string
  };
}

export class CalculateComponent extends Component<IProps & WithRouterProps, IState> {

  state: IState = {
    city_out: '',
    city_in: '',
    wheigt: undefined,
    volume: undefined,
    delivery: {
      label: 'Выберите ...'
    },
    type_product: {
      label: 'Выберите ...'
    }

  }
  componentDidMount(): void {
    this.props.dispatch(GET_LIST_DELIVERIES, {
      url: '/service/services/get_deliverys/'
    })
    this.props.dispatch(GET_LIST_PRODUCTS, {
      url: '/service/services/get_products/'
    })
  }

  handlerChangeInput = (e: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    this.setState(state => ({
      ...state,
      [name]: value,
    }));
  }

  handlerChangeSelect = ({ values, name }: { values: { label: string, value: string }, name: string }): any => {
    // console.log(values)
    this.setState(state => ({
      ...state,
      [name]: {
        label: values.label,
        value: values.value,
      }
    }));
    const copyState = {
      ...this.state, [name]: {
        label: values.label,
        value: values.value,
      }
    }
    console.log({ copyState })
    if (copyState.volume && copyState.wheigt && copyState.delivery?.value && copyState.type_product?.value) {
      this.props.dispatch(GET_LIST_PRICE, {
        url: '/service/services/get_price/',
        city_out: copyState.city_out,
        city_in: copyState.city_in,
        weight: copyState.wheigt,
        volume: copyState.volume,
        delivery_id: copyState.delivery?.value,
        product_id: copyState.type_product?.value,
      })
    }
  }


  delayLoad(): any {
    setTimeout(() => {
      if (document.querySelector('#expert')) {
        const res = document.querySelector('#expert')?.
          scrollIntoView({ block: "center", behavior: "smooth" })
        console.log({ res })
        // setTimeout(() => window.scrollBy(0, 3468),500);        
      } else {
        console.log('time off repeat')
        this.delayLoad()
      }
    }, 1000)
  }

  handlerChangeScreen = ({ e, href }: { e: Event, href: string }) => {
    if (href) {
      this.delayLoad()
      return this.props.navigate(href);
    }
  }
  render() {
    return (
      <Calculate
        dataForm={this.state}
        infoBlock={this.props.dataSection}
        listProducts={this.props.listProducts}
        priceDelivery={this.props.priceDelivery}
        listDeliveries={this.props.listDeliveries}
        handlerChangeInput={this.handlerChangeInput}
        handlerChangeSelect={this.handlerChangeSelect}
        handlerChangeScreen={this.handlerChangeScreen}
      />
    )
  }
}

export default connectStoreon(
  'listProducts',
  'priceDelivery',
  'listDeliveries',
  withRouter(CalculateComponent))