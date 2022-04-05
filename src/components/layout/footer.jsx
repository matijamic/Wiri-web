import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import { down } from "styled-breakpoints"
import { Logo2 } from "../../utils/imgImport"

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
  flex-shrink: 0;
  background-color: white;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.04);
  border-radius: 50%;
  margin-right: 10px;
  &:hover {
    background-color: "#08b689";
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

const Footer = () => {
  const footer_menus = []
  const { allPrismicFooter, allPrismicNavigation } = useStaticQuery(graphql`
    query {
      allPrismicFooter {
        nodes {
          data {
            socials {
              icon {
                url
              }
              to
            }
            contact_label
            address
            telephone
            mail
            copyright
            cookie_policy
            privacy_policy
            menu {
              id
            }
            menu2 {
              id
            }
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
  const footerData = allPrismicFooter.nodes[0].data
  const navData1 = allPrismicNavigation.nodes.filter(
    item => item.prismicId === footerData.menu.id
  )[0].data
  const navData2 = allPrismicNavigation.nodes.filter(
    item => item.prismicId === footerData.menu2.id
  )[0].data

  footer_menus.push(navData1, navData2)

  return (
    <footer className="container">
      <div className="footer-wrapper">
        <div className="footer-menu">
          <div className="row">
            <div className="col-12 col-lg-3">
              <Wiri>
                <img src={Logo2} alt="logo" />
                <Socials className="d-flex align-items-center">
                  {footerData.socials.map((item, idx) => (
                    <Social href={item.to} key={idx}>
                      <img src={item.icon.url} alt="social icon" />
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
                  <h4>{footerData.contact_label}</h4>
                  <ul>
                    <li>
                      <p className="contact-address">{footerData.address}</p>
                    </li>
                    <li className="my-2 my-sm-3">
                      <a className="contact-tel" href="tel:+919876543210">
                        {footerData.telephone}
                      </a>
                    </li>
                    <li>
                      <a
                        className="contact-mail"
                        href="mailto:info@wirigmail.com"
                      >
                        {footerData.mail}
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
            © {new Date().getFullYear()} <strong>Wiri</strong>.{" "}
            {footerData.copyright}
          </p>
          <p>
            <Link to="/cookie-policy">{footerData.cookie_policy}</Link>
          </p>
          <p>
            <Link to="/privacy-policy">{footerData.privacy_policy}</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
