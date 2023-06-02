import { apiSlice } from "./apiSlice.js";

const USER_URL = '/api/users'
export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ( {
		login: builder.mutation({
			query: (data) => ( {
				url: `${ USER_URL }/auth`,
				method: 'POST',
				body: data
			} )
		})
	} )
})
export const { useLoginMutation: useLoginMutation } = usersApiSlice