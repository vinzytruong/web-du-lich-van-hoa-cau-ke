// third-party
import { combineReducers } from 'redux';

// project imports
import productReducer from './product/reducer';
import sitesReducer from './sites/reducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    product: productReducer,
    sites: sitesReducer
});
export default reducer;
