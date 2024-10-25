import { baseApi } from "../api/baseApi";

const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    createSkills: builder.mutation({
      query: (payload) => {
        return {
          url: '/skills',
          method: 'POST',
          body: payload
        }
      },
      invalidatesTags: ['skills'],
    }),

    getSkills: builder.query({
      query: () => {
          return {
          url: '/skills',
          method: 'GET',
        };
      },
      providesTags: ['skills'],
    }),

    updateSkills: builder.mutation({
      query: (payload) => {
        return {
          url: `/skills/${payload.id}`,
          method: 'PUT',
          body: payload.data,
        }
      },
      invalidatesTags: ['skills'],
    }),

    deleteSkills: builder.mutation({
      query: (id) => {
        return {
          url: `/skills/${id}`,
          method: "DELETE",
        }
      },
      invalidatesTags: ['skills'],
    }),

  }),
})

export const {
  useCreateSkillsMutation,
  useGetSkillsQuery,
  useUpdateSkillsMutation,
  useDeleteSkillsMutation,
} = skillsApi;