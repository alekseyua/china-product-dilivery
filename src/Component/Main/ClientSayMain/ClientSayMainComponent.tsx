import React, { Component } from 'react'

import ClientSayMain from './ClientSayMain'
import { client, client1, quota } from '../../../Images';
import { IStateClientSayMain } from '../../../@types/client-say/client-say';
import { IPropsDataPage } from '../../../@types/common';

interface IProps {
  dataSection: IPropsDataPage
}

export class ClientSayMainComponent extends Component<IProps> {
    state: IStateClientSayMain = {
        infoBlock: {
          title: {
            name: {
              main: 'What Client',
              slogan: 'Say?'
            },
          },
          cards: [
            {
              id: 0,
              desc: 'In mattis molestie iaculis. Nullam sit amet sem risus. Vivamus id ligula dignissim, aliquam elit quis, semper justo. Suspendisse lobortis gravida urna, ut luctus ex interdum sed. Aenean sit amet urna eros. Suspendisse quis felis eu nunc aliquet aliquam. Sed fermentum id purus et mollis. Maecenas non turpis ut magna auctor lacinia.',
              icon: quota,
              infoClient: {
                image: client,
                name: 'Ricardo Yosef',
                profetion: 'CEO Founder'
              }
            },           
            {
              id: 1,
              desc: 'Nullam sit molestie iaculis. Nullam sit amet sem risus. Vivamus id ligula dignissim, aliquam elit quis, semper justo. Suspendisse lobortis gravida urna, ut luctus ex interdum sed. Aenean sit amet urna eros. Suspendisse quis felis eu nunc aliquet aliquam. Sed fermentum id purus et mollis. Maecenas non turpis ut magna auctor mollis.',
              icon: quota,
              infoClient: {
                image: client1,
                name: 'Santino Pedro',
                profetion: 'Bank Manager'
              }
            },           
            {
              id: 2,
              desc: 'Id ligula molestie iaculis. Nullam sit amet sem risus. Vivamus id ligula dignissim, aliquam elit quis, semper justo. Suspendisse lobortis gravida urna, ut luctus ex interdum sed. Aenean sit amet urna eros. Suspendisse quis felis eu nunc aliquet aliquam. Sed fermentum id purus et mollis. Maecenas non turpis ut magna auctor turpis.',
              icon: quota,
              infoClient: {
                image: client,
                name: 'Marcos Manuel',
                profetion: 'CEO Founder'
              }
            },           
          ],
        }
    }
  render() {
    console.log(this.props.dataSection)

    return (
      <ClientSayMain
        infoBlock={this.props.dataSection}
      />
    )
  }
}

export default ClientSayMainComponent