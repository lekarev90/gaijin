import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { defaultHistory, defaultStyles } from '../const';
import { IChangeStylePayload, ITextAreaWithHistory } from '../types/textAreaWithHistorySchema';

const initialState: ITextAreaWithHistory = {
  isInitialized: false,
  text: '',
  styles: defaultStyles,
  history: defaultHistory,
};

export const textAreaWithHistory = createSlice({
  name: 'textAreaWithHistory',
  initialState,
  reducers: {
    init: (state, { payload }: PayloadAction<ITextAreaWithHistory>) => {
      state.isInitialized = true;
      state.text = payload.text;
      state.styles = payload.styles;
      state.history = payload.history;
    },
    setText: (state, { payload }: PayloadAction<string>) => {
      const textWithStyles = {
        text: payload,
        styles: state.styles,
      };

      const history = state.history.items.slice(0, state.history.index + 1);
      history.push(textWithStyles);

      state.text = payload;
      state.history.items = history;
      state.history.index = history.length - 1;
    },
    setStyle: (state, { payload }: PayloadAction<IChangeStylePayload>) => {
      const { styleName, styleState } = payload;
      const lastHistoryText = state.history.items[state.history.index].text;

      const stylesWithText = {
        text: lastHistoryText,
        styles: {
          ...state.styles,
          [styleName]: styleState,
        },
      };

      const history = state.history.items.slice(0, state.history.index + 1);
      history.push(stylesWithText);

      state.styles[styleName] = styleState;
      state.history.items = history;
      state.history.index = history.length - 1;
    },
    historyUndo: (state) => {
      const prevItem = state.history.items[state.history.index - 1];

      state.text = prevItem.text;
      state.styles = prevItem.styles;

      state.history.index -= 1;
    },
    historyRedo: (state) => {
      const nextIndex = state.history.index + 1;
      const item = state.history.items[nextIndex];

      state.text = item.text;
      state.styles = item.styles;
      state.history.index += 1;
    },
  },
});

export const { reducer: textAreaWithHistoryReducer, actions: textAreaWithHistoryActions } = textAreaWithHistory;
