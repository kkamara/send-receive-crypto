import react from 'react'

import './ContactForm.scss'

export default function ContactForm () {
  return (
    <>
      <div className="row">
        <div className="text-center">
          <h4 className='subheader'>Ask Question</h4>
          <h2 className='header'>Let us hear from you directly!</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h5>Address</h5>
          <ul>
            <li>icon &nbsp; Dartford, Kent</li>
            <li>icon &nbsp; 0203 633 1775</li>
            <li>icon &nbsp; hello@example.com</li>
          </ul>
        </div>
        <div className="col-md-8">
          <form>
            <div className="row g-2 align-items-center">
              <div className="col-auto">
                <label htmlFor="full_name">Full name</label>
                <input 
                  name="full_name" 
                  id="full_name" 
                  className="form-control"
                />
              </div>
              <div className="col-auto">
                <label htmlFor="email">email</label>
                <input 
                  name="email" 
                  id="email" 
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10"
                className='form-control'
                placeholder='Tell us what we can help you with!'
              ></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-lg" type="button">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}