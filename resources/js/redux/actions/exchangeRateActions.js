
import { 
    ExchangeRateService,
    SymbolService,
    BaseCharactersService,
} from '../../services/ExchangeRateServices'
import { exchangeRate as exchangeRateTypes, } from '../types'

export const exchangeRate = payload => {
    return dispatch => {
        
        dispatch({ type: exchangeRateTypes.GET_EXCHANGE_RATE_PENDING, })

        ExchangeRateService(payload).then(res => {
            dispatch({
                type: exchangeRateTypes.GET_EXCHANGE_RATE_SUCCESS,
                payload: res,
            })
            
        }, error => {
            dispatch({ 
                type : exchangeRateTypes.GET_EXCHANGE_RATE_ERROR, 
                payload: error,
            })
        })
    }
}

export const symbols = () => {
    return dispatch => {
        
        dispatch({ type: exchangeRateTypes.GET_SYMBOLS_PENDING, })

        SymbolService().then(res => {
            dispatch({
                type: exchangeRateTypes.GET_SYMBOLS_SUCCESS,
                payload: res,
            })
            
        }, error => {
            dispatch({ 
                type : exchangeRateTypes.GET_SYMBOLS_ERROR, 
                payload: error,
            })
        })
    }
}

export const basecharacters = () => {
    return dispatch => {
        
        dispatch({ type: exchangeRateTypes.GET_BASE_CHARACTERS_PENDING, })

        BaseCharactersService().then(res => {
            dispatch({
                type: exchangeRateTypes.GET_BASE_CHARACTERS_SUCCESS,
                payload: res,
            })
            
        }, error => {
            dispatch({ 
                type : exchangeRateTypes.GET_BASE_CHARACTERS_ERROR, 
                payload: error,
            })
        })
    }
}
