import * as types from './types'
import { saveToLocalStorage } from '../utils/localStorageUtils'
import { saveToSessionStorage } from '../utils/sessionStorageUtils'

export default {
    [types.ACTION_GET_SHOWS]: ({ commit }, payload) => {
        const modifiedPayload = payload.map(item => {
            item.show = { ...item.show, comments: ['first comment', 'second comment'] }
            return item;
        });
        commit(types.MUTATION_GET_SHOWS, modifiedPayload);
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
    },
    [types.ACTION_SING_UP_USER]: ({ commit,getters }, payload) => {
        commit(types.MUTATION_SING_UP_USER, payload);
        saveToLocalStorage("user",getters[types.GETTERS_GET_USER]);
    },
    [types.ACTION_LOAD_USER_DB]:({commit},payload)=>{
        commit(types.MUTATION_LOAD_USER_DB,payload);
    }
}