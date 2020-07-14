import {
  REQUEST_GET___NAME__,
  SUCCESS_GET___NAME__,
  FAILURE_GET___NAME__,
} from '../types/__name__';

const initialState = {
  errorMessage: '',
  loading: false,
  data: [],
};

const __name__Reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET___NAME__:
      return { ...state, loading: true, data: [] };

    case SUCCESS_GET___NAME__:
      return { ...state, loading: false, data: action.payload.__name__ };

    case FAILURE_GET___NAME__:
      return { ...state, loading: false, errorMessage: action.payload.err };

    default:
      return { ...state };
  }
};

export default __name__Reducer;
