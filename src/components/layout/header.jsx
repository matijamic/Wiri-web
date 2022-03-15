import React, { useState } from "react"
import { Link } from "gatsby"

import NavLink from "../NavLink"
import { Logo, RightArrow } from "../../utils/imgImport"
import { header_menu } from "../../utils/staticData"

const Header = () => {
  const [showMenu, handleToggle] = useState(false)
  return (
    <>
      <div className="topbar">
        <div className="topbar-wrapper">
          <span>Get no-fee trading for life when you sign up today</span>
          <RightArrow />
        </div>
      </div>
      <header>
        <div className="container">
          <nav className="navbar">
            <Link to="/">
              <Logo />
            </Link>
            <div
              className={`hamburger ${showMenu ? "active" : ""}`}
              onClick={() => handleToggle(!showMenu)}
              onKeyDown={() => handleToggle(!showMenu)}
              role="button"
              tabIndex={0}
            >
              <span></span>
              <span></span>
            </div>
            <ul className={`nav-items ${showMenu ? "active" : ""}`}>
              {header_menu.map((item, idx) => (
                <NavLink link={item} key={idx} />
              ))}
              <li className="nav-item mt-auto">
                <Link className="btn-primary" to="/">
                  Get the app
                </Link>
              </li>
            </ul>
            <div className="action-btns">
              <Link to="/sign-up" className="signup">
                Sign up
              </Link>
              <Link className="btn-primary" to="/">
                Get the app
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
