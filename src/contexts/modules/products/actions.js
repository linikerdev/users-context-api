export default {
    'LIST_PRODUCTS': (state, action) => {
        state.list.push(action.payload)
        return {
            ...state
        }

    }
}