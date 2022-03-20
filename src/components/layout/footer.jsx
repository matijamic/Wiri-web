import { Link } from "gatsby"
import React from "react"
import { down } from "styled-breakpoints"
import styled from "styled-components"
import { Logo2 } from "../../utils/imgImport"
import { footer_menus, socials } from "../../utils/staticData"

const Wiri = styled.div`
  ${down("lg")} {
    text-align: center;
    margin-bottom: 40px;
  }
`
const Socials = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  ${down("lg")} {
    margin-top: 15px;
    justify-content: center;
  }
`

const Social = styled.a`
  display: block;
  position: relative;
  width: 65px;
  height: 65px;
  background-color: white;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.04);
  border-radius: 50%;
  margin-right: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.green};
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const FooterMenu = ({ data }) => (
  <div className="col-4">
    <h4>{data.menu_type}</h4>
    <ul>
      {data?.items.map((item, idx) => (
        <li key={idx}>
          <Link className="footer-link" to={item.to}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => (
  <footer className="container">
    <div className="footer-wrapper">
      <div className="footer-menu">
        <div className="row">
          <div className="col-12 col-lg-3">
            <Wiri>
              <img src={Logo2} alt="logo" />
              <Socials className="d-flex align-items-center">
                {socials.map((item, idx) => (
                  <Social href={item.to} key={idx}>
                    <img src={item.icon} alt="social icon" />
                  </Social>
                ))}
              </Socials>
            </Wiri>
          </div>
          <div className="col-12 col-lg-9">
            <div className="row">
              {footer_menus.map((item, idx) => (
                <FooterMenu data={item} key={idx} />
              ))}
              <div className="col-4">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <p className="contact-address">
                      Address Line Here Lorem Ipsum Dolor Sit 123456
                    </p>
                  </li>
                  <li className="my-2 my-sm-3">
                    <a className="contact-tel" href="tel:+919876543210">
                      +91 (9876) 543-210
                    </a>
                  </li>
                  <li>
                    <a
                      className="contact-mail"
                      href="mailto:info@wirigmail.com"
                    >
                      info@wirigmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <p>
          © {new Date().getFullYear()} <strong>Wiri</strong>. All rights
          reserved.
        </p>
        <p>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </p>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
