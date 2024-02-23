import { createReducer } from '@reduxjs/toolkit'
import { Sites } from '@/interfaces/site'
import { SAVE_SITE, SAVE_SITES } from './action'


export interface ListSites {
    sites: Sites[]
}
export const initialState: ListSites = {
    sites: []
}
export default createReducer(initialState, (builder) =>
    builder
        .addCase(SAVE_SITES, (state, action) => {
            state.sites = action.payload.sites
        })
        .addCase(SAVE_SITE, (state, action) => {
            state.sites[action.payload.id] = action.payload.site
        })
)