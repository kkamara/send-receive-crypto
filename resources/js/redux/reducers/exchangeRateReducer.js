import { exchangeRate, } from '../types'

const initState = {
  symbols: null,
  baseCharacters: null,
  data: null,
  error: null,
  loading: false,
}

export default function exchangeRateReducer (state = initState, action) {
  switch (action.type) {
    
    case exchangeRate.GET_EXCHANGE_RATE_ERROR:
    case exchangeRate.GET_SYMBOLS_ERROR:
    case exchangeRate.GET_BASE_CHARACTERS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    
    case exchangeRate.GET_EXCHANGE_RATE_PENDING:
    case exchangeRate.GET_SYMBOLS_PENDING:
    case exchangeRate.GET_BASE_CHARACTERS_PENDING:
      return {
        ...state,
        loading: true,
      }
    
    case exchangeRate.GET_EXCHANGE_RATE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }

    case exchangeRate.GET_SYMBOLS_SUCCESS:
      return {
        ...state,
        symbols: action.payload,
        loading: false,
      }

    case exchangeRate.GET_BASE_CHARACTERS_SUCCESS:
      return {
        ...state,
        baseCharacters: action.payload,
        loading: false,
      }

    default:
      return state
  }
}
