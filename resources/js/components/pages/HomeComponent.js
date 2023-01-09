import React from 'react'
import ContactForm from '../ContactForm'
import Footer from '../layouts/Footer'
import BuySellForm from '../BuySellForm'

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
                <BuySellForm />
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
