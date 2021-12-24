/**
 * 这是是纯粹做 View 视图展示的
 */

import { ActionCreators } from 'redux-undo';

export default function Dashboard(props) {
  console.log('🚀 ~ file: dashBoardView.tsx ~ line 6 ~ Dashboard ~ props', props);
  /** store 里面的 state */
  const { propCount } = props;

  /** store 里面的 dispatch */
  const { increaseHandle, dispatch } = props;

  return (
    <div>
      <h2>Dashboard page</h2>
      <div>
        <button onClick={() => increaseHandle(3)}>点击 + 1</button>
      </div>

      <hr />
      <button onClick={() => dispatch(ActionCreators.undo())}>撤销 Undo </button>
      <button onClick={() => dispatch(ActionCreators.redo())}>重做 Redo </button>

      <h3>{`这是结果值:${propCount}`}</h3>
    </div>
  );
}
