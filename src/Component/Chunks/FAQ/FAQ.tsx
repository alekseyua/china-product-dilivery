import React from 'react'
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap'
import { IFAQ } from '../../../@types/common'
import TextTitle from '../../../Views/Text/TextTitle'
import Text from '../../../Views/Text/Text'
import IconSvg from '../../../Views/Icon/IconSvg'
import Button from '../../../Views/Button/Button'
import Line from '../../../Views/Line/Line'
import Offset from '../../../Views/Offset/Offset'
import { line, lineGray, plus } from '../../../Images'
interface IProps {
  list: IFAQ[];
  isOpenItemFAQ: number[];
  handlerOpenAnswer: any;
}

const FAQ: React.FC<IProps> = ({
  list,
  isOpenItemFAQ,
  handlerOpenAnswer,
}: IProps) => {
  console.log({ dataFAQ:list })

  return (
    <BlockWrap addClass='block__faq-container'>
      {
        list.map((faq: IFAQ, index: number) => (
            <Button
              style={{width: '100%'}}
              onClick={()=>handlerOpenAnswer(faq.id)}
            >
          <BlockWrap key={faq.id} addClass='block__faq-item-wrap' col>
              <BlockWrap addClass='block__faq-item-question'>
                <TextTitle style={{marginRight: 20}}>
                  {faq.text} 
                </TextTitle>
                <IconSvg src={isOpenItemFAQ.includes(faq.id) ? lineGray : plus}/>
              </BlockWrap>
              {
                isOpenItemFAQ.includes(faq.id) && 
                <BlockWrap addClass='block__faq-item-answer' col>
                  <Offset mt={10} />
                  <Line />
                  <Offset mt={10} />
                  <Text>
                    {faq.answer.text}
                  </Text>
                </BlockWrap>
              }
          </BlockWrap>
                </Button>
        ))
      }
    </BlockWrap>
  )
}

export default FAQ