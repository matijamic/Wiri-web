import {
  Audience,
  Dut,
  Eng,
  Fre,
  Ita,
  Por,
  Sale,
  Satisfaction,
  Spa,
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

export const provides = [
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
