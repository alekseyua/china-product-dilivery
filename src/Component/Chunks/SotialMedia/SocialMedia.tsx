import React from 'react'
import SocialWrap from '../../../Views/Header/SocialWrap'
import { Link } from 'react-router-dom'
import IconSvg from '../../../Views/Icon/IconSvg'
import Text from '../../../Views/Text/Text'
import { IPropsBloks, IPropsBloksSocial } from '../../../@types/common'
import { getIconFromName } from '../../../helpers/helpers'

interface IProps{
  listMedia: IPropsBloks['social_networks'];
  isIcon?: boolean; // default false
  location?: 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly' | undefined; // default center
}

const SocialMedia: React.FC<IProps> = ({ listMedia, isIcon, location = 'center' }: IProps) => {
  return (
    <SocialWrap
      style={{
        justifyContent: location
      }}
    >
      {
        isIcon?
        <>
        {
              listMedia && listMedia.map( (social: IPropsBloksSocial) => {
                console.log({social})
                return (
                  <Link key={social.id} target="_blank" to={social.url}>
                    <IconSvg src={getIconFromName(social.type)} addClass='icon__link-header' alt={social.name} />
                  </Link>
                )
              })
        }       
        </>
        :<>
            {
              listMedia && listMedia.map((social: IPropsBloksSocial) => {
                return (
                  <Link key={social.id} target="_blank" to={social.url}>
                    <Text addClass='text__social-media-title'>{social.type_name}</Text>
                  </Link>
                )
              })
            }       
        </>
      }
      </SocialWrap>     
  )
}

export default SocialMedia