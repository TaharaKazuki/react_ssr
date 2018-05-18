import { createAction, handleActions } from 'redux-actions';

const CLICK = 'CLICK';
const CLICK_BUTTON = `${CLICK}_BUTTON`;

export const clickButton = () => async (api) => {
  const res = await api.get('/users');
  return createAction(CLICK_BUTTON)({data:{'sample':res}});
};

// export const clickAcync = () => (dispatch, getState) => setTimeout(()=>{dispatch(clickButton())},1000);

const initState = {
  app:{}
};
export default handleActions({
  [CLICK_BUTTON]: (state, {payload:{data}}) => ({
    ...state,
    ...data
  }),
},initState);