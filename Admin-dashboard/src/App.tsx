 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

 
// import './App.css'

function App() {
  

  return (
    <Router>
    <Routes>
      <Route path="/das" element={<Login/>} />
      <Route path="/" element={<Dashboard/>}/>
    </Routes>
  
  </Router>
       
      
     
     
  )
}

export default App
