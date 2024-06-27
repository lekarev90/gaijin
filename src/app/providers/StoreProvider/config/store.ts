import { configureStore } from '@reduxjs/toolkit';

import { textAreaWithHistoryReducer } from '@/entities/textareaWithHistory';

export const store = configureStore({
  reducer: {
    textAreaWithHistory: textAreaWithHistoryReducer,
  },
  devTools: true,
});

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
