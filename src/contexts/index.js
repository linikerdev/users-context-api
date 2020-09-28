import React, { createContext, useReducer } from 'react'
import userReducer from './modules/users/reducers.js'
import userInitialState from './modules/users/state.js'

import productReducer from './modules/products/reducers.js'
import productInitialState from './modules/products/state.js'

const store = createContext({})

const { Provider } = store;


const GlobalProvider = ({ children }) => {

    const [userState, userDispatch] = useReducer(userReducer, userInitialState)
    const [productState, productDispatch] = useReducer(productReducer, productInitialState)


    return <Provider
        value={{
            user: fnMountContext(userState, userDispatch),
            product: fnMountContext(productState, productDispatch)

        }}
    >
        {children}
    </Provider >
}


const fnMountContext = (state, dispatch) => {
    return {
        ...state,
        dispatch: dispatch
    }
}

export {
    store,
    GlobalProvider
}