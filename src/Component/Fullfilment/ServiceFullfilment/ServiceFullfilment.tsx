import React from 'react'
import Container from '../../../Views/Block/Container'
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap';
import { IPropsDataPage } from '../../../@types/common';
import HeaderSectionFull from '../../Chunks/HeaderSectionFull/HeaderSectionFull';
import CheckBox from '../../../Views/CheckBox/CheckBox';
import GetText from '../../../Views/GetText/GetText';

interface IProps {
  infoBlock: IPropsDataPage
  listSelectItems: never | number[];
  handlerSelectItem: any;
}

const ServiceFullfilment: React.FC<IProps> = ({
  infoBlock,
  listSelectItems,
  handlerSelectItem,
}: IProps) => {
  return (
    <Container row addClass='container__delivery-info-section' center size={1400}>
      <HeaderSectionFull
        title={infoBlock?.title_1}
        slogan={infoBlock?.title_2}
      />
      <BlockWrap col>
        {
          infoBlock?.blocks && infoBlock.blocks.map((item: any) => {
            return <BlockWrap key={item.id} style={{ marginBottom: 15 }}>
              <CheckBox
                id={item.id}
                onChange={(el: any) => {
                  handlerSelectItem(+el.id)
                }}
                checked={listSelectItems.includes(item.id)}
                label={GetText(item.title_1)}
              />
            </BlockWrap>
          })
        }
      </BlockWrap>
    </Container>

  )
}

export default ServiceFullfilment;