import React from 'react'
import Container from '../../../Views/Block/Container'
import BlockTwoSection from '../../../Views/Block/BlockTwoSection/BlockTwoSection'
import { IPropsContactFormMain } from '../../../@types/contact-form/contact-form'
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap'
import Image from '../../../Views/Image/Image'
import TextTitle from '../../../Views/Text/TextTitle'
import Text from '../../../Views/Text/Text'
import IconSvg from '../../../Views/Icon/IconSvg'
import Offset from '../../../Views/Offset/Offset'
import Input from '../../../Views/Input/Input'
import { IPropsDataPage } from '../../../@types/common'
import Button from '../../../Views/Button/Button'
import { line } from '../../../Images'
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull'

interface IProps {
    infoBlock: IPropsDataPage
    dataForm: IPropsContactFormMain;
    handlerInputform: (e: React.FormEvent<HTMLFormElement>) => void;
}   

const ContactFormMain: React.FC<IProps> = ({
    infoBlock,
    dataForm,
    handlerInputform
}: IProps) => {
  return (
    <Container size={1400} style={{overflow: 'unset'}}>
        <HeaderSectionFull 
              title={infoBlock?.title_1}
              location='center'
        />
          <BlockTwoSection addClass='block__about-main-conrainer'>
            <BlockWrap col addClass='block__contact-container-left'>
                  {
                  infoBlock.images.length && <Image src={infoBlock.images[0].url}/>
                  }
                <BlockWrap addClass='block__contact-container-contact'>
                    {/* <BlockWrap addClass='block__contact-wrap-contact'>
                        <BlockWrap>
                            <IconSvg src={infoBlock.contactData.call.icon} style={{width: 30}} />
                        </BlockWrap>
                        <BlockWrap col>
                            <TextTitle sub >{infoBlock.contactData.call.title}</TextTitle>
                            <TextTitle type='h5'>{infoBlock.contactData.call.phone}</TextTitle>
                        </BlockWrap>
                    </BlockWrap>
                    <BlockWrap addClass='block__contact-wrap-contact'>
                        <BlockWrap>
                            <IconSvg src={infoBlock.contactData.mail.icon} style={{width: 30}} />
                        </BlockWrap>
                        <BlockWrap col>
                            <TextTitle sub >{infoBlock.contactData.mail.title}</TextTitle>
                            <TextTitle type='h5'>{infoBlock.contactData.mail.mail}</TextTitle>
                        </BlockWrap>
                    </BlockWrap> */}
                </BlockWrap>
            </BlockWrap>

            <BlockWrap col addClass='block__contact-container-right'>                                        
                    <TextTitle sub >{infoBlock.title_2}</TextTitle>
                    {/* <Offset mt={30}/> */}
                    <BlockWrap col>
                        <Input 
                            placeholder={'Имя'}
                            addClass='input__contact-form'
                            formInput='input'
                            name='name'
                            value={dataForm.aplication.name}
                            onChange={handlerInputform}
                            />
                        <Offset mt={40} />
                        <BlockTwoSection style={{
                            gap: '30px'
                        }}>
                            <Input 
                                placeholder={'Телефон'}
                                addClass='input__contact-form'
                                formInput='input'
                                name='phone'
                                value={dataForm.aplication.phone}
                                onChange={handlerInputform}
                                />
                            <Input 
                                placeholder={'Предмет обращения '}
                                addClass='input__contact-form'
                                formInput='input'
                                name='subject'
                                value={dataForm.aplication.subject}
                                onChange={handlerInputform}
                                />
                        </BlockTwoSection>
                        <Offset mt={40} />
                        <Input 
                            placeholder={'EMAIL'}
                            addClass='input__contact-form'
                            formInput='input'
                            name='email'
                            value={dataForm.aplication.email}
                            onChange={handlerInputform}
                            />
                        <Offset mt={40} />
                        <Input 
                            placeholder={'Сообщение'}
                            addClass='input__contact-form-textarea'
                            formInput='textarea'
                            name='message'
                            value={dataForm.aplication.message}
                            onChange={handlerInputform}
                        />
                    </BlockWrap>
                    <Offset mt={40} />
                  <Button addClass={'button__about-us'} href={''} onClick={()=>{}} iconSvgLeft={line} iconSvgRight={line} btnYellow>
                      <Text>{'Отправить'}</Text>
                  </Button>
            </BlockWrap>
        </BlockTwoSection>
    </Container>
  )
}

export default ContactFormMain