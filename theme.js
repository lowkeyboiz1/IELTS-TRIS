'use client'

import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// const APP_BAR_HEIGHT = '60px'
// const BOARD_BAR_HEIGHT = '64px'
// const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`

const theme = extendTheme({
  // trello: {
  //   appBarHeight: APP_BAR_HEIGHT,
  //   boardBarHeight: BOARD_BAR_HEIGHT,
  //   boardContentHeight: BOARD_CONTENT_HEIGHT,
  // },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     body: {
    //       '*::-webkit-scrollbar': {
    //         height: '8px',
    //         width: '8px',
    //       },
    //       '*::-webkit-scrollbar-thumb': {
    //         backgroundColor: '#dcdde1',
    //         borderRadius: '8px',
    //       },
    //       '*::-webkit-scrollbar-thumb:hover': {
    //         backgroundColor: 'white',
    //       },
    //     },
    //   },
    // },
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none',
          borderWidth: 0.5,
        },
      },
    },
  },
  colorSchemes: {
    light: {},
    dark: {},
  },
  // ...other properties
})

export default theme
