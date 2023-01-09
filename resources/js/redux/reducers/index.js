import { combineReducers, } from 'redux'
import authReducer from './authReducer'
import usersReducer from './usersReducer'
import exchangeRateReducer from './exchangeRateReducer'

export default combineReducers({
   exchangeRate: exchangeRateReducer,
   auth: authReducer,
   users: usersReducer,
})
