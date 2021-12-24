import DashboardView from './dashBoardView';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    /**
     * // NOTE - 这里的 state 对象, 含有 editor
     *      - 同时被 react-undo 包裹后, 还有历史状态对象, 
     *          - future:[], present:{}, pass:[]
     */
console.log('🚀 ~ file: index.ts ~ line 5 ~ mapStateToProps ~ state', state);
    return {
        propCount: state.editor.present.mycount // 把 present 的状态传递出去
    };
};


/** 其实这是一个可选的选项, 如果不需要为其重命名的话, 可以忽略对 dispatch 的处理 */
const mapDispatchToProps = (dispatch) => {
console.log('🚀 ~ file: index.ts ~ line 18 ~ mapDispatchToProps ~ dispatch', dispatch);
    return {
        increaseHandle: (param) => dispatch({
            type: 'editor/increaceCount',
            payload: param
        }),
        dispatch // 如果用了mapDispatch 的话, 记得把原来的也要传出去, 不然后面没法原装的
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);