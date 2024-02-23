import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'

const courseMenu: Array<Navigation> = [
  {
    label: 'UBND Huyện Cầu Kè',
    path: 'https://cauke.travinh.gov.vn',
  },
  {
    label: 'Tuổi trẻ huyện Cầu Kè',
    path: 'https://cauke.tinhdoantravinh.vn',
  },
  {
    label: 'Facebook Huyện đoàn Cầu Kè',
    path: 'https://www.facebook.com/profile.php?id=100014766810397',
  },
]

const pageMenu = headerNavigations

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link style={{textDecoration:'none'}} href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <FooterSectionTitle title="Liên kết" />
        {courseMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        <FooterSectionTitle title="Bản đồ trang" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
