import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick} sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 1 }}>
      <img width={30} height={30} src='/images/logo-doan-tncs-hcm.png' />
      <Typography
        variant="h5"
        textTransform='uppercase'
        sx={{ fontWeight: 800, '& span': { color: variant === 'primary' ? 'primary.contrastText' : 'unset' } }}
      >
        <span>Du lịch văn hóa huyện Cầu Kè</span>
      </Typography>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
