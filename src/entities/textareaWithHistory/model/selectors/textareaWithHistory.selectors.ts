import { createSelector } from 'reselect';

import { IStateSchema } from '@/app/providers/StoreProvider';
import { ITextStyles } from '@/entities/textareaWithHistory';

export const getTextareaDataStyles = (state: IStateSchema) => state.textAreaWithHistory.styles;
export const getTextareaDataText = (state: IStateSchema) => state.textAreaWithHistory.text;
export const getTextareaDataIsInitialized = (state: IStateSchema) => state.textAreaWithHistory.isInitialized;
export const getTextareaDataHistory = (state: IStateSchema) => state.textAreaWithHistory.history;

export const getTextStyleByName = (styleName: keyof ITextStyles) => createSelector(
  getTextareaDataStyles,
  (styles) => styles[styleName],
);

export const getTextStyleHistoryAvailable = createSelector(
  getTextareaDataHistory,
  (textAreaHistory) => {
    const isUndoAvailable = textAreaHistory.index !== 0 && textAreaHistory.items.length > 0;
    const isRedoAvailable = textAreaHistory.index !== textAreaHistory.items.length - 1;

    return {
      isUndoAvailable,
      isRedoAvailable,
    };
  },
);
