export default {
    listUser: (state, action) => {
        const users = action.payload
        return {
            ...state,
            users
        }
    }

}