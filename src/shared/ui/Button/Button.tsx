import { ButtonHTMLAttributes, memo } from 'react';

import classNames from 'classnames/bind';

import styles from './Button.module.scss';

export type TButtonVariants = 'outline' | 'filled';
export type TButtonOutlineColor = 'normal' | 'success';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: TButtonVariants;
  outlineColor?: TButtonOutlineColor;
  isWide?: boolean;
}

const cx = classNames.bind(styles);

export const Button = memo(({
  className, variant = 'filled', outlineColor = 'normal', isWide, ...props
}: IButtonProps) => {
  const mods = {
    [variant]: variant,
    [outlineColor]: outlineColor,
    isWide,
  };
  const buttonClassNames = cx(styles.button, className, mods);

  return <button type="button" className={buttonClassNames} {...props} />;
});
