import React, { useState } from "react"


const [navbarOpen, setNavbarOpen] = useState(false)
const NavBar = () => {

    return (
        <nav className="navBar">
          <button>{navbarOpen ? "Close" : "Open"}</button>
          <ul>...</ul>
        </nav>
      )
}
