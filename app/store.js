import { configureStore} from '@reduxjs/toolkit'
import { authAPI } from '../pages/auth/authApi'
import exampleReducer from './exampleReduxSlice'
import authReducer from '../pages/auth/authSlice'
import { userAPI } from '../pages/user/userAPI'

const store = configureStore({
		reducer: {
            auth : authReducer,
            [authAPI.reducerPath] : authAPI.reducer,
			[userAPI.reducerPath] : userAPI.reducer
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(
				authAPI.middleware,
				userAPI.middleware
			)
			
})


export default store
