import React, { useRef } from 'react';
import styles from './Default.module.scss';
import addClassStyle from './add-class-checkbox.module.scss';
import classNames from 'classnames';

const variantEnum = {
  default: 'default',
  large: 'large',
  light: 'light',
  switch: 'switch',
  autopayment: 'auto-payment',
};

const getVariantStyleCheckbox = (variant = variantEnum.default) => {
  switch (variant) {
    case variantEnum.large:
      return styles['checkbox__large'];
    case variantEnum.switch:
      return styles['checkbox__switch'];
    case variantEnum.light:
      return styles['checkbox__light'];
    case variantEnum.autopayment:
      return styles['checkbox__auto-payment'];
    default:
      return styles['checkbox__input'];
  }
};

/**
 * 
 * @param {
 *  @!!!!   работает только на -----onChange----- !!!!!!!!
 * classNameLabel - класс для label
 * className - класс для CheckBox
 * 
 * } param0 
 * @returns checked 
 */

interface IProps {
  classNameLabel?: string;
  helpTextStyle?: object;
  colorField?: string;
  className?: string;
  addClass?: string;
  onChange: any;
  disabled?: boolean;
  children?: React.ReactNode;
  helptext?: string;
  variant?: string;
  checked: boolean;
  value?: string;
  label?: string | React.ReactNode;
  style?: object;
  role?: string;
  name?: string;
  id?: string;
}

const CheckBox: React.FC<IProps> = ({
  classNameLabel = '',
  helpTextStyle = {},
  colorField,
  className = '',
  addClass = '',
  onChange,
  disabled = false,
  children,
  helptext,
  variant,
  checked,
  value,
  label,
  style = {},
  role,
  name,
  id,
  ...props
}: IProps) => {
  //todo: чтоб не светился ошибками сделаю мега костыль не бейте пж
  const refCheck = useRef(null);

  const handlerOnChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    e.preventDefault()
    onChange(refCheck.current)
  }

  if (!checked) {
    checked = false
  } else {
    checked = true
  }

  const classNameCustom = classNames({
    [styles['type-checkbox']]: true,
    [getVariantStyleCheckbox(variant)]: true,
  });

  const classNameLabelCheckBox = classNames({
    [styles['checkbox__label']]: true,
    [classNameLabel]: !!classNameLabel
  })

  const styleColorField = {
    backgroundColor: `${colorField}`
  }

  return (
    <div
      className={classNames({
        [styles['checkbox__container']]: true,
        [className]: !!className,
        [addClassStyle[addClass]]: !!addClass
      })
      }
      style={style}
      onClick={handlerOnChange}
    >
      {
        colorField ? (
          <span style={styleColorField as React.CSSProperties} className={styles['color-field__icon']}></span>
        ) : null
      }
      <div className={styles['checkbox__container-trigger']}>
        <input
          key={name}
          onChange={() => { }} //чтобы не ругался реакт
          ref={refCheck}
          type={'checkbox'}
          className={classNameCustom}
          disabled={disabled}
          checked={checked}
          data-label={label}
          role={role}
          name={name}//iAgreeDataProcessing   ----- name="check" 
          id={id}
          style={{
            pointerEvents: disabled ? 'none' : 'all',
          }}
          value={value}
          {...props}
        />
        {
          role ?
            <span className={styles['checkbox__switch-state']}>
              <span className={styles['checkbox__switch-container']}>
                <span className={styles['checkbox__switch-position']}> </span>
              </span>
            </span>
            :
            <label
              htmlFor={id}
              className={classNameLabelCheckBox}
            >
              <span></span>
              <span>
                {label}
              </span>
            </label>
        }

        {
          helptext ?
            <span
              style={{
                paddingLeft: 27,
                left: -10,
                pointerEvents: disabled ? 'none' : 'all',
                color: `var(--text-color)`,
                position: 'relative',
                fontSize: 12,
                fontWeight: 500,
                lineHeight: '18px',
                fontFamily: 'HelveticaNeue',
                ...helpTextStyle
              }}>{helptext}</span>
            : null
        }
      </div>
      {children}

    </div>
  );
};

export default CheckBox;
