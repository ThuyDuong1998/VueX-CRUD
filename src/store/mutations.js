export default {
    getList(state, payload){
        state.listTodo = [...payload]
    },
    addTodo(state, payload){
        state.listTodo.push({...payload})
    },
    deleteTodo(state, payload) {
        const id = state.listTodo.findIndex(item => item.id === payload)
        state.listTodo.splice(id,1)
    },
    editTodo(state, payload) {
        state.itemEdit = {...payload}
    }, 
    updateTodo(state, payload) {
        const id = state.listTodo.findIndex(item => item.id === payload.id)
        const itemUpdate = [...state.listTodo]
        itemUpdate[id] = {...payload}
        state.listTodo = [...itemUpdate]
    }
}