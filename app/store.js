import { configureStore} from '@reduxjs/toolkit'
import exampleReducer from './exampleReduxSlice'
import {exampleAPI} from './exampleRTKQuery'

const store = configureStore({
		reducer: {
            example : exampleReducer,
            [exampleAPI.reducerPath] : exampleAPI.reducer
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(exampleAPI.middleware)
})


export default store
