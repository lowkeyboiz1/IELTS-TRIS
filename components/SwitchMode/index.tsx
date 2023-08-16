'use client'

import { Box, FormControlLabel, IconButton } from '@mui/material'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

function SwitchMode() {
  const { theme, setTheme } = useTheme()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <>
      <Box>
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          color='inherit'
        >
          {theme === 'dark' ? (
            <>
              <DarkModeIcon />
            </>
          ) : (
            <>
              <LightModeIcon />
            </>
          )}
        </IconButton>
      </Box>
    </>
  )
}

export default SwitchMode
