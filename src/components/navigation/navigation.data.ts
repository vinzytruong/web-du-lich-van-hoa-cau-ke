import type { Navigation, NavigationHasChildren } from '@/interfaces/navigation'

export const navigations: NavigationHasChildren[] = [
  {
    label: 'Trang chủ',
    path: '/', // '/',
    children: null
  },
  {
    label: 'Hoạt động du lịch',
    path: 'activity',
    children: null
  },
  {
    label: 'Địa điểm',
    path: '',
    children: [
      {
        label: 'Địa điểm du lịch',
        path: 'sightseeing-sites',
      },
      {
        label: 'Di tích lịch sử',
        path: 'historical-sites'
      },
      {
        label: 'Sản phẩm COOP',
        path: 'ocop-product'
      }
    ]
  }
]
