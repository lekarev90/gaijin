import { createRoot } from 'react-dom/client';

import '@/app/styles/index.scss';
import { StoreProvider } from '@/app/providers/StoreProvider';

import { App } from './app/App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
);
