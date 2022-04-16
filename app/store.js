import { configureStore} from '@reduxjs/toolkit'
import { authAPI } from '../pages/auth/authApi'
import exampleReducer from './exampleReduxSlice'
import authReducer from '../pages/auth/authSlice'

const store = configureStore({
		reducer: {
            auth : authReducer,
            [authAPI.reducerPath] : authAPI.reducer
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(authAPI.middleware)
})


export default store
