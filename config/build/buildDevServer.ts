import { type BuildOptions } from './types/config';

import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = ({ port }: BuildOptions): DevServerConfiguration => ({
  port,
  open: true,
  historyApiFallback: true,
  hot: true,
});
