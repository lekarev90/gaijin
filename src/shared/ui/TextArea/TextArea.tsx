import {
  ChangeEvent, memo, TextareaHTMLAttributes, useEffect, useState,
} from 'react';

import classNames from 'classnames/bind';

import styles from './TextArea.module.scss';

interface ITextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  className?: string;
  onChange?: (value: string) => void;
}

const cx = classNames.bind(styles);

export const TextArea = memo(({
  value, onChange, className, ...props
}: ITextAreaProps) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const onChangeHandler = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(target.value);
    onChange?.(target.value);
  };

  return <textarea value={inputValue} onChange={onChangeHandler} className={cx(styles.textarea, className)} {...props} />;
});
