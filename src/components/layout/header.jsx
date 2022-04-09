import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Select, { components } from "react-select"

const Header = () => {
  const { allPrismicHeader, allPrismicNavigation } = useStaticQuery(graphql`
    query {
      allPrismicHeader {
        nodes {
          data {
            menu {
              id
            }
            logo {
              gatsbyImageData
            }
            languages {
              label
              value
              icon {
                url
              }
            }
            button_label
          }
        }
      }
      allPrismicNavigation {
        nodes {
          data {
            menu_type
            items {
              name
              to
            }
          }
          prismicId
        }
      }
    }
  `)
  const headerData = allPrismicHeader.nodes[0].data
  const navData = allPrismicNavigation.nodes.filter(
    item => item.prismicId === headerData.menu.id
  )[0].data

  const [language, setLanguage] = useState(headerData.languages[0])
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

  const customStyles = {
    option: (base, state) => {
      return {
        ...base,
        color: state.data === state.selectProps.value ? "white" : "#303030",
      }
    },
  }

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <img
        src={props.data.icon.url}
        style={{ width: 28, height: 28 }}
        alt={props.data.label}
      />
    </components.SingleValue>
  )
  const Option = props => (
    <components.Option {...props}>
      <img
        src={props.data.icon.url}
        style={{ width: 18, height: 18, marginRight: "14px" }}
        alt={props.data.label}
      />
      <span>{props.data.label}</span>
    </components.Option>
  )

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container">
            <Link to="/">
              <GatsbyImage image={getImage(headerData.logo)} alt="logo" />
            </Link>
            <ul className={navMenuClsName}>
              {navData.items.map((item, idx) => (
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
                options={headerData.languages}
                components={{ SingleValue, Option }}
                styles={customStyles}
              />
            </div>
            <Link className="get-started btn-green" to="/">
              {headerData.button_label}
            </Link>
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
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
