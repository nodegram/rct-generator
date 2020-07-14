import {
  REQUEST_GET___NAME__,
  SUCCESS_GET___NAME__,
  FAILURE_GET___NAME__,
} from '../types/__name__';

import get__Name__API from '../../api/__name__';

const requestGet__Name__ = () => ({ type: REQUEST_GET___NAME__ });

const successGet__Name__ = (__name__) => ({
  type: SUCCESS_GET___NAME__,
  payload: { __name__ },
});

const failureGet__Name__ = (err) => ({
  type: FAILURE_GET___NAME__,
  payload: { err },
});

export const get__Name__ = (id) => async (dispatch) => {
  dispatch(requestGet__Name__());

  try {
    const { data } = await get__Name__API(id);

    dispatch(successGet__Name__(data));
  } catch (error) {
    dispatch(failureGet__Name__(error));
  }
};
