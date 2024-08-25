import React, { Component } from 'react'

import ClientSayMain from './ClientSayMain'
import { client, client1, quota } from '../../../Images';
import { IStateClientSayMain } from '../../../@types/client-say/client-say';
import { IPropsDataPage } from '../../../@types/common';

interface IProps {
  dataSection: IPropsDataPage
}

export class ClientSayMainComponent extends Component<IProps> {

  render() {
    return (
      <ClientSayMain
        infoBlock={this.props.dataSection}
      />
    )
  }
}

export default ClientSayMainComponent