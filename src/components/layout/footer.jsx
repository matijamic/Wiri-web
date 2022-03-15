import React from "react"
import { Link } from "gatsby"

import NavLink from "../NavLink"
import {
  captions,
  caption_left,
  caption_right,
  footer_menu,
  social_links,
} from "../../utils/staticData"

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <nav className="navbar">
        <ul className="nav-items">
          {footer_menu.map((item, idx) => (
            <NavLink link={item} key={idx} />
          ))}
        </ul>
        <ul className="social-items">
          {social_links.map((item, idx) => (
            <li key={idx} className="social-item">
              <Link to={item.url}>
                <img src={item.icon} alt="social icon" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="caption-section">
        {captions.map((item, idx) => (
          <p className="caption" key={idx} style={{ paddingBottom: "20px" }}>
            {item}
          </p>
        ))}
        <div className="caption-detail">
          <p className="caption">{caption_left}</p>
          <p className="caption">{caption_right}</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
