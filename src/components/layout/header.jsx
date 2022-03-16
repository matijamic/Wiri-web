import React, { useState } from "react"
import { Link } from "gatsby"
import Select, { components } from "react-select"

import { Logo } from "../../utils/imgImport"
import { header_menus, langs } from "../../utils/staticData"

const Header = () => {
  const [language, setLanguage] = useState(langs[0])
  const [hambugerActive, setHambugerActiveState] = useState(false)

  const hamburgerHandler = () => {
    setHambugerActiveState(!hambugerActive)
  }
  const handleLang = selected => setLanguage(selected)

  let humbugerClsName = "hamburger "
  let navMenuClsName = "navbar-nav "

  if (hambugerActive) {
    humbugerClsName += "active"
    navMenuClsName += "active"
  }

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <img
        src={props.data.icon}
        style={{ width: 28, height: 28 }}
        alt={props.data.label}
      />
    </components.SingleValue>
  )
  const Option = props => (
    <components.Option {...props}>
      <img
        src={props.data.icon}
        style={{ width: 18, height: 18, marginRight: "14px" }}
        alt={props.data.label}
      />
      <span>{props.data.label}</span>
    </components.Option>
  )

  return (
    <>
      <header>
        <nav className="container navbar fixed-top">
          <Link to="/">
            <Logo />
          </Link>
          <ul className={navMenuClsName}>
            {header_menus.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <Link
                  className="nav-link"
                  activeClassName="active"
                  to={item.to}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="lang-switcher">
            <Select
              isSearchable={false}
              value={language}
              onChange={handleLang}
              options={langs}
              components={{ SingleValue, Option }}
              styles={{
                valueContainer: base => ({
                  ...base,
                  padding: "0",
                }),
                control: base => ({
                  ...base,
                  outline: "none",
                  border: "none",
                  boxShadow: "none",
                }),
                menu: base => ({
                  ...base,
                  left: "-100px",
                  width: "auto",
                  overflow: "auto",
                  boxShadow: "0 27px 49px rgba(29, 22, 55, 0.36)",
                  borderRadius: "10px",
                }),
                menuList: base => ({
                  ...base,
                  width: "200px",
                  minHeight: "315px",
                }),
                singleValue: base => ({
                  ...base,
                  padding: 0,
                  margin: 0,
                  borderRadius: "50%",
                }),
                dropdownIndicator: () => ({
                  paddingLeft: "4px",
                }),
                indicatorSeparator: () => ({
                  display: "none",
                }),
                option: (base, state) => ({
                  ...base,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "10px 21px",
                  margin: "0",
                  width: "100%",
                  borderBottom: "1px solid rgba(19,19,19,0.1)",
                  fontSize: "20px",
                  color: state.isSelected ? "#4478db" : "#303030",
                }),
              }}
            />
          </div>
          <Link className="get-started btn-green">Get Started</Link>
          <div
            className={humbugerClsName}
            onClick={hamburgerHandler}
            onKeyDown={hamburgerHandler}
            role="button"
            tabIndex="0"
          >
            <div className="hamburger-inner">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
