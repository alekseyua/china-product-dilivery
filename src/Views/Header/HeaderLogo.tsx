import React from 'react'
import { IBurgerLogo, IPropsHeader } from '../../@types/header/header';
import styles from './styles/header.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { logo } from '../../Images';

const  HeaderLogo: React.FC<IBurgerLogo> = ({
  isBurger
}:IBurgerLogo) => {
  const className = classNames({
    [styles['header__logo']]:true,
    [styles['header__logo-burger']]:isBurger,
  })
  return (
    <div
        className={className}
    >
    <Link to="/">
      <Icon src={logo} alt="Artraz" />
    </Link>
    </div>
  )
}

export default HeaderLogo