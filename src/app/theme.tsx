// 1. Import `extendTheme`
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import '@fontsource/plus-jakarta-sans/700.css'
import "@fontsource/inter"

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        textAlign: 'center'
      }
    }
  },
  colors: {
    purple: {
      100: "#7E74F1",
    },
  },
  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`,
    body: `'Inter', sans-serif`,
    Card: {
      
    }
  },
  config
})

export default theme