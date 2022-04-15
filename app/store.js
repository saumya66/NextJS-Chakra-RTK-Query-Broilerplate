import { configureStore} from '@reduxjs/toolkit'
import { authAPI } from '../pages/auth/authApi'
import exampleReducer from './exampleReduxSlice'

const store = configureStore({
		reducer: {
            example : exampleReducer,
            [authAPI.reducerPath] : authAPI.reducer
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(authAPI.middleware)
})


export default store
