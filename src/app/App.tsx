import React, { memo } from 'react';

import { ControlledTextareaWithButtons } from '@/widgets/textareaWithHistory';

export const App = memo(() => (
  <div className="app">
    <ControlledTextareaWithButtons />
  </div>
));
