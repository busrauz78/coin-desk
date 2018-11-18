import {combineReducers} from 'redux';
import currency from './currency';

const rootreducer = combineReducers({
    CurrencyResponse:currency
})

export default rootreducer;