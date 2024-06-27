import { ITextStyles, IHistory } from '../types/textAreaWithHistorySchema';

export const LOCALSTORAGE_TEXT_HISTORY_KEY = 'history';

export const defaultStyles: ITextStyles = {
  bold: false,
  italic: false,
};

export const defaultHistory: IHistory = {
  items: [{
    text: '',
    styles: defaultStyles,
  }],
  index: 0,
};
