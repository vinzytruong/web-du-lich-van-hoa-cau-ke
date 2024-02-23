import { Sites } from '@/interfaces/site'
import { createAction } from '@reduxjs/toolkit'

export const SAVE_SITES = createAction<{ sites: Sites[] }>('@sites/SAVE_SITES')
export const SAVE_SITE = createAction<{ site: Sites, id: number }>('@sites/SAVE_SITE')