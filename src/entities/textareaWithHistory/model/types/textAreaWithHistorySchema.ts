export interface ITextStyles {
  bold: boolean;
  italic: boolean;
}

interface IHistoryItem {
  text: string;
  styles: ITextStyles;
}

export interface IHistory {
  items: IHistoryItem[];
  index: number;
}

export interface ITextAreaWithHistory {
  isInitialized?: boolean;
  text: string;
  styles: ITextStyles;
  history: IHistory;
}

export interface IChangeStylePayload {
  styleName: keyof ITextStyles;
  styleState: boolean
}
