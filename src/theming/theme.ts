const theme = {
  color: {
    others: {
      athensGray: "#E3E5E8",
      coffee: "#0062FF",
      toryBlue: "#104FB3",
      periwinkleGray: "#C8D2E7",
      shadow: "rgba(189,199,222,0.23)",
    },
    text: {
      primary: "#000000",
      haiti: "#0F1436",
      regentGray: "#818FA3",
      navyBlue: "#243C56",
      coffee: "#0062FF",
    },
    background: {
      primary: "hotpink",
      haiti: "#0F1436",
      lightBlue: "rgba(39, 124, 220, 0.04)",
      regentGray: "#818FA3",
    },
  },
  fontFamily: {
    quicksand: "'Quicksand', sans-serif",
  },
  layout: {
    width: "1155px",
  },
  breakpoint: {
    mobile: "769px",
    tablet: "993px",
    desktop: "1201px",
  },
}

export type Theme = typeof theme

export default theme
