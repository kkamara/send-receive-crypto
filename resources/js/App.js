import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from "./Routes"

function App() {
  return (
   <BrowserRouter>
      <div className="App container">
        <Routes/>
      </div>
   </BrowserRouter>
  )
}

export default App
