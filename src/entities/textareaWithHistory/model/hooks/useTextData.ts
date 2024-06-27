import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/useStoreHooks';

import { defaultHistory, LOCALSTORAGE_TEXT_HISTORY_KEY } from '../const';
import {
  getTextareaDataHistory,
  getTextareaDataIsInitialized,
} from '../selectors/textareaWithHistory.selectors';
import { textAreaWithHistoryActions } from '../slices/textareaWithHistorySlice';
import { IHistory } from '../types/textAreaWithHistorySchema';

export const useTextData = () => {
  const dispatch = useAppDispatch();
  const isInitialized = useAppSelector(getTextareaDataIsInitialized);
  const history = useAppSelector(getTextareaDataHistory);

  const { init } = textAreaWithHistoryActions;

  const setHistory = useCallback(() => {
    const stringifyHistory = JSON.stringify(history);

    localStorage.setItem(LOCALSTORAGE_TEXT_HISTORY_KEY, stringifyHistory);
  }, [history]);

  useEffect(() => {
    const history = localStorage.getItem(LOCALSTORAGE_TEXT_HISTORY_KEY);

    const parsedHistory = history ? (JSON.parse(history) as IHistory) : defaultHistory;

    const { text, styles } = parsedHistory.items[parsedHistory.index];

    if (!isInitialized) {
      dispatch(
        init({
          text,
          styles,
          history: parsedHistory,
        }),
      );
    }
  }, [dispatch, init, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      setHistory();
    }
  }, [isInitialized, setHistory, history]);

  return {
    isInitialized,
  };
};
