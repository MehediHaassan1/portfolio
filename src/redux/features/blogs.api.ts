import { baseApi } from "../api/baseApi";

const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    createBlogs: builder.mutation({
      query: (payload) => {
        return {
          url: '/blogs',
          method: 'POST',
          body: payload
        }
      },
      invalidatesTags: ['blogs'],
    }),

    getBlogs: builder.query({
      query: () => {
          return {
          url: '/blogs',
          method: 'GET',
        };
      },
      providesTags: ['blogs'],
    }),

    getBlog: builder.query({
      query: (payload) => {
          return {
          url: `/blogs/${payload}`,
          method: 'GET',
        };
      },
      providesTags: ['blogs'],
    }),

    updateBlogs: builder.mutation({
      query: (payload) => {
        return {
          url: `/blogs/${payload.id}`,
          method: 'PUT',
          body: payload.data,
        }
      },
      invalidatesTags: ['blogs'],
    }),

    deleteBlogs: builder.mutation({
      query: (id) => {
        return {
          url: `/blogs/${id}`,
          method: "DELETE",
        }
      },
      invalidatesTags: ['blogs'],
    }),

  }),
})

export const {
useCreateBlogsMutation,
useGetBlogsQuery,
useGetBlogQuery,
useUpdateBlogsMutation,
useDeleteBlogsMutation,
} = blogsApi;