import React from 'react'
import Container from '../../Views/Block/Container'
import BlockWrap from '../../Views/Block/BlolckWrap/BlockWrap'
import HeaderSectionFull from '../Chunks/HeaderSectionFull/HeaderSectionFull'
import Offset from '../../Views/Offset/Offset'
import Input from '../../Views/Input/Input'
import Button from '../../Views/Button/Button'
import { line } from '../../Images'
import Text from '../../Views/Text/Text'

interface IProps{
    values: {
        valueTrack: string;
    }
    handlerTrack: any;
    handlerChangeInput: any;
}

const Track:React.FC<IProps> = ({values, handlerTrack, handlerChangeInput}:IProps) => {
    return (
      <Container size={1400}>

          <BlockWrap col>
              <HeaderSectionFull
                  title={'Отследить груз'}
                  location='center'
              />
              <Offset mb={25} />
              <BlockWrap addClass="block__track-container-input">
                  <Input
                      addClass='input__track'
                      name='valueTrack'
                      placeholder='Введите ТН трек номер'
                      formInput={'input'}
                      value={values.valueTrack}
                      onChange={handlerChangeInput}
                  />
                  <Button addClass={'button__yellow'} iconSvgLeft={line} iconSvgRight={line} btnYellow onClick={handlerTrack}>
                      <Text>Отследить </Text>
                  </Button>
              </BlockWrap>
          </BlockWrap>
      </Container>
  )
}

export default Track