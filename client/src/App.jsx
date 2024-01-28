import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home  from "./pages/Home";
import About from "./pages/About";
import SignIn  from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/signOut' element={<SignOut/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
  )
}
