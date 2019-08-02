import * as types from './types'

export default {
    [types.MUTATION_GET_SHOWS]: (state, payload) => {
        state.shows = payload
    },
    [types.MUTATION_ADD_COMMENT]: (state, { indexOfShow, comment }) => {
        state.shows[indexOfShow].show.comments = [...state.shows[indexOfShow].show.comments, comment]
    },
    [types.MUTATION_CHANGE_AUTH]: (state, payload) => {
        state.auth = payload;
    },
    [types.MUTATION_CHANGE_CURRENT_SHOW_ITEM]: (state, payload) => {
        state.currentShowItem = payload;
    },
    [types.MUTATION_SING_UP_USER]: (state, payload) => {
        state.user = !state.user ? [payload] : [...state.user, payload]
    },
    [types.MUTATION_LOAD_USER_DB]: (state, payload) => {
        state.user = payload;
    }
}