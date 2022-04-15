import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authAPI = createApi({
	reducerPath: 'authAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4000',
	}),
	endpoints: (builder) => ({
		registerUser: builder.mutation({
			query: (user) => ({
				url: '/v1/auth/register',
				method: 'POST',
				body: user,
			}),
			// transformResponse: (response) => response.data
		}),
        loginUser: builder.mutation({
			query: (user) => ({
				url: '/v1/auth/login',
				method: 'POST',
				body: user,
			}),
		}),
	}),
})

export const {
	useRegisterUserMutation,useLoginUserMutation
} = authAPI
