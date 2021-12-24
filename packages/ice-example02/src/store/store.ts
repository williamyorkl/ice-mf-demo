import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';
// import persistPlugin from '@rematch/persist';
// import storagePlugin from 'redux-persist/lib/storage';
import { models, RootModel } from './modules/index';

/** react-undo */
import { combineReducers } from 'redux';
import undoable from 'redux-undo';

type FullModel = ExtraModelsFromLoading<RootModel, { type: 'full' }>;

// https://rematchjs.org/docs/
export const store = init<RootModel, FullModel>({
  models,
  redux: {
    combineReducers: reducers => {
      return combineReducers({
        ...reducers,
        editor: undoable(reducers.editor),
      });
    },
  },
  plugins: [
    // 省去了必须返回新对象的弊端，由immer处理
    immerPlugin({}),
    // 异步loading
    loadingPlugin({
      type: 'full',
    }),
    // 持久化处理
    // persistPlugin({
    //   key: '__store__',
    //   storage: storagePlugin,
    //   whitelist: ['storage'], // storage模块会被缓存到localstorage中
    // }),
  ],
});

export type Store = typeof store;
export type RootDispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
