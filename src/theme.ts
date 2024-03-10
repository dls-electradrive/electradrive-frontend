import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";
import { theme as baseTheme } from "@chakra-ui/react";


const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: 'white',
          color: 'black',
        },
        // styles for the `a`
        a: {
          color: 'teal.500',
          _hover: {
            textDecoration: 'underline',
          },
          
        },
      },
    },
    fonts: {
        body: "system-ui, sans-serif",
        heading: "Georgia, serif",
        mono: "Menlo, monospace",
},
  })
  export default theme