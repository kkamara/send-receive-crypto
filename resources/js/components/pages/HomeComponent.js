import React, { useEffect, } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import ContactForm from '../ContactForm'
import Footer from '../layouts/Footer'

export default function HomeComponent() {
  
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="row"> 
          <div className="col-md-6">
            <h1 className="display-5 fw-bold">Buy and sell cryptocurrency</h1>
            <p className="col-md-8 fs-4">Fast and secure way to purchase or exchange 150+ cryptocurrencies.</p>
            <form>
              <div className="row g-2 align-items-left">
                <div className="col-md-10">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Subscribe Now'
                    name='subscribe_now'
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="subscribe_now">icon</label>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body align-items-left">
                <form>
                  <div className="row g-2 align-items-left">
                    Send
                  </div>
                  <div className="row g-2 align-items-center">
                    <div className="col-auto">
                      <select 
                        name="base_characters" 
                        id="" 
                        className="form-control"
                      >
                        <option selected value="">USD</option>
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
                        name="base_characters" 
                        id="" 
                        className="form-control"
                      >
                        <option selected value="">USD</option>
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
                    <button className="btn btn-primary btn-lg" type="button">Buy Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  )
}
