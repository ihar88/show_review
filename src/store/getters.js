import * as types from './types'
export default {
    [types.GETTERS_GET_SHOWS]: ({shows}) => {
        return shows
    },
    [types.GETTERS_GET_AUTH]: ({auth}) => {
        return auth
    },
    [types.GETTERS_GET_USER]: ({user}) => {
        return user
    },
    [types.GETTERS_CURRENT_SHOW_ITEM]: ({currentShowItem}) => {
        return currentShowItem
    }
}