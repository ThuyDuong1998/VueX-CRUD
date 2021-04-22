import http, {api} from '../api'

export default {
    async getList({commit}) {
        const result = await http.get(api.listTodo.url)
        commit('getList', result.data)
    },
    async addTodo({commit}, payload) {
        const result = await http.post(api.addTodo.url, payload)
        commit('addTodo', result.data)
    },
    async deleteTodo({commit}, payload) {
        const result = await http.delete(`${api.listTodo.url}${payload}`)
        commit('deleteTodo', result.data)
    },
    async editTodo({commit}, payload) {
        const result = await http.get(`${api.listTodo.url}${payload}`)
        commit('editTodo', result.data)
    },
    async updateTodo({commit}, payload) {
        const result = await http.put(`${api.listTodo.url}${payload.id}`, payload)
        commit('updateTodo', result.data)
    }
}