import * as types from './types'
import { setInitialStore, saveToLocalStorage } from '../utils/localStorageUtils'
import { saveToSessionStorage } from '../utils/sessionStorageUtils'

export default {
    [types.ACTION_GET_SHOWS]: ({ commit }, payload) => {
        payload.map(item => {
            item.show.comments = ['first comment', 'second comment'];
        })
        commit(types.MUTATION_GET_SHOWS, payload)
    },
    [types.ACTION_ADD_COMMENT]: ({ commit }, payload) => {
        commit(types.MUTATION_ADD_COMMENT, payload);
    },
    [types.ACTION_CHANGE_AUTH]: ({ commit }, payload) => {
        saveToSessionStorage("auth", payload);
        commit(types.MUTATION_CHANGE_AUTH, payload);
    },
    [types.ACTION_CHANGE_CURRENT_SHOW_ITEM]: ({ commit }, payload) => {
        saveToLocalStorage("currentShowItem", payload);
        commit(types.MUTATION_CHANGE_CURRENT_SHOW_ITEM, payload);
    }
}