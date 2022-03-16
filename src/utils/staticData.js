import { Dut, Eng, Fre, Ita, Por, Spa } from "./imgImport"

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
