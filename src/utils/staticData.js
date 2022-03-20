import {
  App1,
  App2,
  App3,
  App4,
  Audience,
  Dut,
  Eng,
  Facebook,
  Fre,
  Instagram,
  Ita,
  Por,
  Sale,
  Satisfaction,
  Spa,
  Twitter,
} from "./imgImport"

export const header_menus = [
  {
    name: "Product",
    to: "/",
  },
  {
    name: "Pricing",
    to: "/",
  },
  {
    name: "Blog",
    to: "/",
  },
  {
    name: "Login",
    to: "/",
  },
]

export const langs = [
  { value: "eng", label: "English", icon: Eng },
  { value: "spa", label: "Spanish", icon: Spa },
  { value: "por", label: "Portuguese", icon: Por },
  { value: "fre", label: "French", icon: Fre },
  { value: "ita", label: "Italian", icon: Ita },
  { value: "dut", label: "Dutch", icon: Dut },
]

export const benefits = [
  {
    icon: Sale,
    caption: "Convert more sales",
    content:
      "Lorem ipsum dolor sit consectetur adipiscing sit amet dui sed velit fringilla tincidunt.",
  },
  {
    icon: Satisfaction,
    caption: "Increase satisfaction",
    content:
      "Lorem ipsum dolor sit consectetur adipiscing sit amet dui sed velit fringilla tincidunt.",
  },
  {
    icon: Audience,
    caption: "Build audience",
    content:
      "Lorem ipsum dolor sit consectetur adipiscing sit amet dui sed velit fringilla tincidunt.",
  },
]

export const appImgs = [App1, App2, App3, App4]

export const footer_menus = [
  {
    menu_type: "Company",
    items: [
      {
        name: "Product",
        to: "/",
      },
      {
        name: "Pricing",
        to: "/",
      },
      {
        name: "Blog",
        to: "/",
      },
      {
        name: "Login",
        to: "/",
      },
    ],
  },
  {
    menu_type: "Resource",
    items: [
      {
        name: "Download",
        to: "/",
      },
      {
        name: "Help Center",
        to: "/",
      },
      {
        name: "Guide",
        to: "/",
      },
      {
        name: "Blog",
        to: "/",
      },
    ],
  },
]

export const socials = [
  {
    icon: Facebook,
    to: "/",
  },
  {
    icon: Twitter,
    to: "/",
  },
  {
    icon: Instagram,
    to: "/",
  },
]
