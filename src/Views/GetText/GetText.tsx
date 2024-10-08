import React from 'react'

const GetText = (text: string | JSX.Element): string | JSX.Element => {  
  // console.log({text})  
  if (text === '<p>&nbsp;</p>') return '';
  if(typeof text === 'object' && Array.isArray(text)){
    let str: string[] = [];
    text.forEach((item: string) => {
      if(typeof item === 'string' ){
        str.push(item.replace(/^<p>/g, '').replace(/<\/p>$/g, ''))
      }
    });
    // console.log({str})
    return <div dangerouslySetInnerHTML={{
      __html: str.join(' ') }} />
    }
    if (typeof text === "string") {
    // console.log({text1: text})
    return (
      <div dangerouslySetInnerHTML={{ __html: text }} />
    )
  }
  // console.log({text2: text})
  return text;
}

export default GetText