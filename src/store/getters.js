import * as types from './types'
export default {
    [types.GETTERS_GET_SHOWS]: state => {
        return state.shows
    },
    [types.GETTERS_GET_AUTH]: state => {
        return state.auth
    },
    [types.GETTERS_GET_USER]: state => {
        return state.user
    },
    [types.GETTERS_CURRENT_SHOW_ITEM]: state => {
        return state.currentShowItem
    }
}