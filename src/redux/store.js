import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootreducer from './rootReducer';
import thunk from 'redux-thunk';


export const store = createStore(rootreducer, applyMiddleware(thunk, logger));