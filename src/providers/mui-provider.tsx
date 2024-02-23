import React, { FC, ReactNode } from 'react'
import { ThemeProvider } from '@mui/material'

import theme from '@/config/theme'

interface Props {
  children: ReactNode
}

const MUIProvider: FC<Props> = ({ children }) => {
  // return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  return <>{children}</>
}

export default MUIProvider
