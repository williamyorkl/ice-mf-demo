import { Models } from '@rematch/core';
import { editor } from './editor';

export interface RootModel extends Models<RootModel> {
  editor: typeof editor;
}
export const models: RootModel = {
  editor,
};
