import { AUTH_URL } from "@/src/utils/_constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "api/auth",
  baseQuery: fetchBaseQuery({ baseUrl: AUTH_URL }),

  endpoints: (build) => ({
    login: build.mutation({
      query: (loginData) => ({
        url: "/authenticate",
        method: "POST",
        body: loginData
      })
    }),
    register: build.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user
      })
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi