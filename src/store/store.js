import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    namespaced: true,
    state,
    getters,
    actions,
    mutations
})

export default store
