import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/create" element={<CreateUser/>} />
          <Route path="/update" element={<UpdateUser/>} />
        </Routes>
      </BrowserRouter>  
    </div>
    
  )
}

export default App
