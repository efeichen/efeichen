/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "tailwindcss/dist/base.min.css"

;(() => {
  // May want to change light & dark colors as well (or switch them).
  const COLORS_DB = [
    {
      bgColor: "#FF5D26",
      textColor: {
        R: 34,
        G: 40,
        B: 49,
      },
    },
    {
      bgColor: "#3757F1",
      textColor: {
        R: 256,
        G: 256,
        B: 256,
      },
    },
    {
      bgColor: "#FFF4F3",
      textColor: {
        R: 23,
        G: 28,
        B: 95,
      },
    },
  ]

  const COLOR_COMBO = COLORS_DB[Math.floor(Math.random() * COLORS_DB.length)]

  let [bgColor, textColorR, textColorB, textColorG] = [
    COLOR_COMBO.bgColor,
    COLOR_COMBO.textColor.R,
    COLOR_COMBO.textColor.B,
    COLOR_COMBO.textColor.G,
  ]

  document.documentElement.style.setProperty("--bg-color", bgColor)
  document.documentElement.style.setProperty("--text-color-R", textColorR)
  document.documentElement.style.setProperty("--text-color-B", textColorB)
  document.documentElement.style.setProperty("--text-color-G", textColorG)
})()
