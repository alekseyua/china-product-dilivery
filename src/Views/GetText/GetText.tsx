import React from 'react'

const GetText = (text: string | JSX.Element): string | JSX.Element => {
  if (text === '<p>&nbsp;</p>') return '';
  if (typeof text === 'object' && Array.isArray(text)) {
    let str: string[] = [];
    text.forEach((item: string) => {
      if (typeof item === 'string') {
        str.push(item.replace(/^<p>/g, '').replace(/<\/p>$/g, ''))
      }
    });
    return <div dangerouslySetInnerHTML={{
      __html: str.join(' ')
    }} />
  }
  if (typeof text === "string") {
    return (
      <div dangerouslySetInnerHTML={{ __html: text }} />
    )
  }
  return text;
}

export default GetText