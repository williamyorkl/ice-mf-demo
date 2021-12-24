import { runApp, IAppConfig } from 'ice';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
    addProvider: (playload) => {
      return <Provider store={store}>{playload.children}</Provider>;
    },
  },
  router: {
    type: 'browser',
  },
};

runApp(appConfig);
