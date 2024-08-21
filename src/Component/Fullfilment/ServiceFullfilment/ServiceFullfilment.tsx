import React from 'react'


import Container from '../../../Views/Block/Container'
import { IPropsAboutSection } from '../../../@types/about/about';
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import Image from '../../../Views/Image/Image';
import TextTitle from '../../../Views/Text/TextTitle';
import Offset from '../../../Views/Offset/Offset';
import Text from '../../../Views/Text/Text';
import Button from '../../../Views/Button/Button';
import { line } from '../../../Images';
import { IPropsDataPage } from '../../../@types/common';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import CheckBox from '../../../Views/CheckBox/CheckBox';
import GetText from '../../../Views/GetText/GetText';

interface IProps {
  infoBlock: IPropsDataPage
  listSelectItems: never | number [];
  handlerChangeScreen: any
  handlerSelectItem: any;
}

const ServiceFullfilment: React.FC<IProps> = ({
  infoBlock,
  listSelectItems,
  handlerSelectItem,
  handlerChangeScreen,
}: IProps) => {
  console.log({infoBlock})
  return (
    <Container row addClass='container__delivery-info-section' center size={1400}>
      <HeaderSectionFull
        title={infoBlock?.title_1}
        slogan={infoBlock?.title_2}
      />
      <BlockWrap col>
        {
          infoBlock?.blocks && infoBlock.blocks.map( (item:any)=>{
            console.log(item)
            return<BlockWrap key={item.id} style={{marginBottom: 15}}>
              <CheckBox 
                id={item.id}
                onChange={(el:any)=>{
                  handlerSelectItem(+el.id)
                }}
                checked={listSelectItems.includes(item.id)}
                label={GetText( item.title_1)}
              />
            </BlockWrap>
          }) 
        }
      </BlockWrap>
    </Container>

  )
}

export default ServiceFullfilment;