import React from 'react'
import { IPropsIntroduction } from '../../../@types/introduction/introduction'
import IntroductionContainer from '../../../Views/Introduction/IntroductionContainer'
import IntroductionWrap from '../../../Views/Introduction/IntroductionWrap'
import IntroductionGrid from '../../../Views/Introduction/IntroductionGrid'
import Container from '../../../Views/Block/Container'
import IntroductionIconContainer from '../../../Views/Introduction/IntroductionIconContainer'
import IconSvg from '../../../Views/Icon/IconSvg'
import TextTitle from '../../../Views/Text/TextTitle'
import Text from '../../../Views/Text/Text'
import { IPropsBloks, IPropsDataPage } from '../../../@types/common'
import Offset from '../../../Views/Offset/Offset'

interface IProps {
    infoBlock: IPropsDataPage
}


const IntroductionCards:React.FC<IPropsIntroduction & IProps> = ({
    listCards,
    infoBlock
}:IPropsIntroduction & IProps) => {
  return (
    <Container
          size={1400}
          center
    >
    <IntroductionContainer>
        {
                  infoBlock?.blocks && infoBlock.blocks.map((item: IPropsBloks) => (
                <IntroductionWrap key={item.id}>
                    <IntroductionGrid>
                        <IntroductionIconContainer>
                        <Text>{item.title_2}</Text>
                        </IntroductionIconContainer>
                        <Offset mb={30} />
                        <TextTitle type='h3' addClass='text__title-introduction'>{item.title_1}</TextTitle>
                        <Text tag='p' addClass="text__text-introduction">{item.description}</Text>
                    </IntroductionGrid>
                </IntroductionWrap>
            ))
        }
    </IntroductionContainer>
    </Container>
  )
}

export default IntroductionCards