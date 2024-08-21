import React from 'react'
import SocialBox from '../../../Views/Header/SocialBox'
import SocialWrap from '../../../Views/Header/SocialWrap'
import { Link } from 'react-router-dom'
import IconSvg from '../../../Views/Icon/IconSvg'
import { insta, telega } from '../../../Images'
import Text from '../../../Views/Text/Text'
import { IPropsBloks, IPropsBloksSocial } from '../../../@types/common'
import { getIconFromName } from '../../../helpers/helpers'

interface IProps{
  listMedia: IPropsBloks['social_networks'];
  isIcon?: boolean; // default false
}

const SocialMedia: React.FC<IProps> = ({ listMedia, isIcon }: IProps) => {
  return (
    <SocialWrap>
      {
        isIcon?
        <>
        {
              listMedia && listMedia.map( (social: IPropsBloksSocial) => {
                return (
                  <Link key={social.id} target="_blank" to={social.url}>
                    <IconSvg src={getIconFromName(social.name)} addClass='icon__link-header' alt={social.name} />
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
                    <Text addClass='text__social-media-title'>{social.name}</Text>
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