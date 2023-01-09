import React, { useEffect, useState, } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import {
  exchangeRate,
  basecharacters,
  symbols,
} from '../redux/actions/exchangeRateActions'

export default function HomeComponent() {
  const dispatch = useDispatch()
  const exchangeRateResponse = useSelector(state=>state.exchangeRate)
  
  const [baseCharacter, setBaseCharacter] = useState('')
  const [symbol, setSymbol] = useState('')
  const [send, setSend] = useState('')
  const [receive, setReceive] = useState('')

  useEffect(() => {
    dispatch(symbols())
    dispatch(basecharacters())
  }, [])

  if (!exchangeRateResponse.loading) {
    console.log(exchangeRateResponse)
  }

  if (exchangeRateResponse.loading) {
    return 'Loading...'
  }

  const submitForm = (e) => {
    e.preventDefault()
    console.log('in submit form')
  }
  
  return (
    <form onSubmit={submitForm}>
      <div className="row g-2 align-items-left">
        Send
      </div>
      <div className="row g-2 align-items-center">
        <div className="col-auto">
          <select 
            name="base_characters" 
            id="base_characters" 
            className="form-control"
            value={baseCharacter}
            onChange={(e) => { setBaseCharacter(e.target.value) }}
          >
            <option value=""></option>
            {exchangeRateResponse.baseCharacters && exchangeRateResponse.baseCharacters.map((baseCharacter, key) => (
              <option key={key} value={baseCharacter}>{baseCharacter}</option>
            ))}
          </select>
        </div>
        <div className="col-auto">
          <input 
            type="send" 
            id="send" 
            className="form-control" 
            placeholder='0.0214 BTC'
          />
        </div>
      </div>
      <br />
      <div className="row g-2 align-items-left">
        Receive
      </div>
      <div className="row g-2 align-items-center">
        <div className="col-auto">
          <select 
            name="symbols" 
            id="symbols" 
            className="form-control"
            value={symbol}
            onChange={(e) => { setSymbol(e.target.value) }}
          >
            <option value=""></option>
            {exchangeRateResponse.symbols && exchangeRateResponse.symbols.map((symbol, key) => (
              <option key={key} value={symbol}>{symbol}</option>
            ))}
          </select>
        </div>
        <div className="col-auto">
          <input 
            type="receive" 
            id="receive" 
            className="form-control" 
            placeholder='0.0214 BTC'
          />
        </div>
      </div>
      <br />
      <small>
        1 USB = ~ 0.000088 BTC <a href="#">Expected rate</a>
      </small>
      <br />
      <small>
        <a href="#">No extra fees</a>
      </small>
      <br />
      <div className="form-group">
        <button className="btn btn-primary btn-lg" type="submit">Buy Now</button>
      </div>
    </form>
  )
}
