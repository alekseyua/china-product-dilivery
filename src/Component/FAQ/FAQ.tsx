import React from 'react'
import TextTitle from '../../Views/Text/TextTitle';
import Button from '../../Views/Button/Button';
import BlockWrap from '../../Views/Block/BlolckWrap/BlockWrap';

interface IProps {
  isOpen: boolean;
  handlerOpenFAQ: () => void;
}

const FAQ:React.FC<IProps> = ({
  isOpen,
  handlerOpenFAQ
}: IProps) => {
  return (
    <React.Fragment>
      <Button
        onClick={handlerOpenFAQ}
      >
        <TextTitle addClass='text__faq-title' 
          >
          FAQ
        </TextTitle>
      </Button>
      <Button
        addClass={isOpen ? 'button__faq-close--active' : 'button__faq-close'}
        onClick={handlerOpenFAQ}
      />
      
    </React.Fragment>
  )
}

export default FAQ