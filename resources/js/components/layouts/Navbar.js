import React, { useEffect } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { useNavigate, } from 'react-router-dom' 

export default function Navbar(props) {
  const navigate = useNavigate()
  
  const dispatch = useDispatch()
  const authResponse = useSelector(state=>state.auth)

  const logOut = () => {
    // dispatch(LogoutAction())
    navigate("/login")
  }

  const login = () => {
    navigate("/login")
  }

  const token = localStorage.getItem('user-token')
  //console.log(token)

  // useEffect(() => {
  //   if(authResponse !== "" && authResponse.success === true){
  //       alert(authResponse.message)
  //       localStorage.removeItem('user-token')
  //       //history.push("/user/login")    
  //   } 
  //   return () => {}
  // }, [authResponse])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Eleventh navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Sell Receive Crypto</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Price</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabindex="-1">App</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabindex="-1">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabindex="-1">Sign in</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
