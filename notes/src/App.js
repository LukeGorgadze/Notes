import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from './Pages/Home';
import Algorithms from './Pages/Algorithms';
import Navbar from './Components/Navbar';
import Nla from './Pages/Nla';
import Simulations from './Pages/Simulations';
const App = () => {
  const [toggle, setToggle] = useState(true)
  const [curPage, setCurPage] = useState("/")
  // useEffect(() => {
  //   console.log(curPage)
  // }, [curPage])
  const setPage = (input) => {
    setCurPage(input)
    setToggle(!toggle)
  }
  return (
    <div className='flex flex-row w-full justify-between'>
      <div className={`${toggle ? 'w-[full]' : 'translate-x-[-100%]'} transition duration-300 ease-in-out h-[100%] fixed z-[9999]`}>
        {<Navbar toggle={toggle} setToggle={setToggle} curPage={curPage} setCurPage={setPage} />}</div>
      <div className={`w-[60%] mx-auto`} key={curPage}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/algorithms' element={<Algorithms />} />
            <Route path='/algorithms/:id' element={<Algorithms />} />
            <Route path='/nla' element={<Nla />} />
            <Route path='/nla/:id' element={<Nla />} />
            <Route path='/simulations' element={<Simulations />} />
          </Routes>
        </Router>
      </div>
    </div>

  )
}

export default App