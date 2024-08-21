import React, { Component } from 'react'
import ContactFormMain from './ContactFormMain'
import { IStateContactFormMain } from '../../../@types/contact-form/contact-form'
import { contact, mail, phone } from '../../../Images'
import { IPropsDataPage } from '../../../@types/common'

interface IProps {
  dataSection: IPropsDataPage
}

export class ContactFormMainContainer extends Component<IProps,IStateContactFormMain> {
    state:IStateContactFormMain = {
      aplication: {
        name: '',
        phone: '',
        subject: '',
        email: '',
        message: '',
      }
    }
    handlerInputForm = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const { name, value } = e.target as HTMLInputElement
      this.setState(prevState => ({
        aplication: {
         ...prevState.aplication,
          [name]: value
        }
      }))
    }
  render() {
    return (
      <ContactFormMain
        infoBlock={this.props.dataSection}
        dataForm={this.state}
        handlerInputform={this.handlerInputForm}
      />
    )
  }
}

export default ContactFormMainContainer