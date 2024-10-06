import React, { Component } from 'react'
import withRouter from '../../../HOC/withRouter/withRouter';
import { WithRouterProps } from '../../../@types/hoc/hoc';
import { IPropsDataPage } from '../../../@types/common';
import ServiceFullfilment from './ServiceFullfilment';

interface IProps {
  dataSection: IPropsDataPage
}
interface IState {
  listItems: number[] | never[],
}

export class ServiceFullfilmentComponent extends Component<WithRouterProps & IProps, IState> {
  state = {
    listItems: [] // add your list items here
  }

  handlerSelectItem = (id: number) => {
    // todo: добавить обработку выбора услуги
    const list: never | number[] = this.state.listItems;
    if (list.includes(id)) {
      this.setState(state => ({
        ...state,
        listItems: state.listItems.filter(item => item !== id)
      }))
    } else {
      this.setState(state => ({
        ...state,
        listItems: [...state.listItems, id]  // добавляем новый id в список
      }))
    }
  }
  render() {
    return (
      <ServiceFullfilment
        listSelectItems={this.state.listItems}
        infoBlock={this.props.dataSection}
        handlerSelectItem={this.handlerSelectItem}
      />
    )
  }
}

export default withRouter(ServiceFullfilmentComponent)