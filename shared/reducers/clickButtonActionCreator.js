import { createAction, handleActions } from 'redux-actions';

const CLICK = 'CLICK';
const CLICK_BUTTON = `${CLICK}_BUTTON`;

export function clickButton() {
  return createAction(CLICK_BUTTON)({data:{}});
}
const initState = {
  app:{}
};
export default handleActions({
  [CLICK_BUTTON]: (state, {payload:{data}}) => ({
    ...state,
    ...data
  }),
});