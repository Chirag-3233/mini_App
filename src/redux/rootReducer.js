import { combineReducers } from 'redux';
import favouriteReducer from './favouriteReducer';

export default combineReducers({
    getList: favouriteReducer
});
