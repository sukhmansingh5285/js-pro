import { element } from "prop-types"
import React, { Children } from "react"
import {createBrowserRouter, BrowserRouter as Router, Routes, Route} from "react-router-dom"

// simpler way
<Router>
  <Routes>
    <Route path ='/' element = {<Home />} />
    <Route path = '/about' element = {<AboutPage/>}/>
    <Route path = ' /contact' element = {<ContactPage />}/>
  </Routes>
</Router>

// better way
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />
  },
  {
    path: "/contact",
    element: <ContactPage/>,
    children: [{
      path: "number"
     },
   ],
  },
])

/**
 Router, Link to = {"/"}, navigate, 
 useState, useEffect, 
 setInterval , clearInterval, map, slice(2)/slice(0,2), preventDefault.

 react-scroll library
 react-hot-toast library
 react-icons
 axios

*/