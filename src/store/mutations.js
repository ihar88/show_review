import * as types from './types'

export default {
    [types.MUTATION_GET_SHOWS]: (state, payload) => {
        state.shows = payload
    },
    [types.MUTATION_ADD_COMMENT]:(state,payload) =>{
        state.shows[payload.indexOfShow].show.comments = [...state.shows[payload.indexOfShow].show.comments,payload.comment]
    },
    [types.MUTATION_CHANGE_AUTH]: (state, payload) => {
        state.auth = payload;
    },
    [types.MUTATION_CHANGE_CURRENT_SHOW_ITEM]: (state, payload) => {
        state.currentShowItem = payload;
    }
}