import React from 'react'
import BlockWrap from '../../../Views/Block/BlolckWrap/BlockWrap'
interface IProps {
  list: []
}

const FAQ: React.FC<IProps> = ({
  list
}: IProps) => {
  return (
    <BlockWrap addClass='block__FAQ-container'>
        <BlockWrap>1</BlockWrap>
        <BlockWrap>2</BlockWrap>
        <BlockWrap>3</BlockWrap>
        <BlockWrap>4</BlockWrap>
        <BlockWrap>5</BlockWrap>
        <BlockWrap>6</BlockWrap>
    </BlockWrap>
  )
}

export default FAQ