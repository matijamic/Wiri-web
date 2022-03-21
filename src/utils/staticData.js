import {
  App1,
  App2,
  App3,
  App4,
  Audience,
  Deals,
  Dut,
  Eng,
  Facebook,
  Fre,
  Gallery,
  Hours,
  Instagram,
  Ita,
  Links,
  LiveChat,
  LocationMap,
  OnlineMenu,
  Por,
  Presence,
  Reserve,
  Reviews,
  Sale,
  Satisfaction,
  Spa,
  Twitter,
  Widget1,
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

export const widgets = [
  {
    icon: LiveChat,
    name: `Automated 
    & live chat`,
    img: Widget1,
  },
  {
    icon: Reserve,
    name: `Instant online reservations 
    and appointments`,
    img: Widget1,
  },
  {
    icon: OnlineMenu,
    name: `Online 
    menu`,
    img: Widget1,
  },
  {
    icon: Deals,
    name: `Deals & 
    Promitions`,
    img: Widget1,
  },
  {
    icon: Gallery,
    name: `Photo & 
    video gallery`,
    img: Widget1,
  },
  {
    icon: Reviews,
    name: `Business 
    reviews`,
    img: Widget1,
  },
  {
    icon: Presence,
    name: `Social media 
    presence`,
    img: Widget1,
  },
  {
    icon: Hours,
    name: `Openning 
    hours`,
    img: Widget1,
  },
  {
    icon: LocationMap,
    name: `Location map 
    & Navigation`,
    img: Widget1,
  },
  {
    icon: Links,
    name: `Useful 
    links`,
    img: Widget1,
  },
]
