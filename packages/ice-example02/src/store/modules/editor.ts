import { createModel } from '@rematch/core';


export const editor = createModel()({
  state: {
    mycount: 0
  },
  reducers: {
    increaceCount(state, payload) {
        console.log('🚀 ~ file: editor.ts ~ line 10 ~ increaceCount ~ payload', payload);
        const result = state.mycount + Number(payload);

        // NOTE - 这里返回出去的值, 要符合回 state 对应的映射的值的类型形状 (,即 state 对应的是一个对象, return 出去的, 要对应回这个对象的形状)  这辈称为 ---> 纯函数
        return {
          mycount: result
        };
    },

    /** 撤销 */
    // (不需要在这里声明, 直接使用 react-undo 提供的方法即可)

    /** 重做 */
    // (不需要在这里声明, 直接使用 react-undo 提供的方法即可)
  }
});
