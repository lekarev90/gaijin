import { memo, useCallback } from 'react';

import classNames from 'classnames/bind';

import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/useStoreHooks';
import { TextArea } from '@/shared/ui/TextArea';

import { getTextareaDataStyles, getTextareaDataText } from '../model/selectors/textareaWithHistory.selectors';
import { textAreaWithHistoryActions } from '../model/slices/textareaWithHistorySlice';

import styles from './TextareaWithHistory.module.scss';

const cx = classNames.bind(styles);

export const TextareaWithHistory = memo(() => {
  const dispatch = useAppDispatch();
  const { setText } = textAreaWithHistoryActions;
  const text = useAppSelector(getTextareaDataText);
  const { italic, bold } = useAppSelector(getTextareaDataStyles);

  const onChangeText = useCallback(
    (text: string) => {
      dispatch(setText(text));
    },
    [dispatch, setText],
  );

  return <TextArea onChange={onChangeText} value={text} className={cx({ isItalic: italic, isBold: bold })} />;
});
