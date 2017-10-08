import {createStore, applyMiddleware } from 'redux';
import getRootReducer from './src/reducers';
import logger from 'redux-logger';

import thunk from 'redux-thunk'


export default function getStore(navReducer) {
    return createStore(getRootReducer(navReducer), undefined, applyMiddleware(thunk, logger));
}
