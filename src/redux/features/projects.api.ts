import { baseApi } from "../api/baseApi";

const tasksApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    createProjects: builder.mutation({
      query: (payload) => {
        return {
          url: '/projects',
          method: 'POST',
          body: payload
        }
      },
      invalidatesTags: ['projects'],
    }),

    getProjects: builder.query({
      query: () => {
          return {
          url: '/projects',
          method: 'GET',
        };
      },
      providesTags: ['projects'],
    }),

    updateProjects: builder.mutation({
      query: (payload) => {
        return {
          url: `/projects/${payload.id}`,
          method: 'PUT',
          body: payload.data,
        }
      },
      invalidatesTags: ['projects'],
    }),

    deleteProjects: builder.mutation({
      query: (id) => {
        return {
          url: `/projects/${id}`,
          method: "DELETE",
        }
      },
      invalidatesTags: ['projects'],
    }),

  }),
})

export const {
useCreateProjectsMutation,
useGetProjectsQuery,
useUpdateProjectsMutation,
useDeleteProjectsMutation,
} = tasksApi;