import { ADHERENT_URL } from "@/src/utils/_constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adherentApi = createApi({
  reducerPath: "api/adherent",
  baseQuery: fetchBaseQuery({ baseUrl: ADHERENT_URL }),
  tagTypes: ["adherent"],

  endpoints: (build) => ({
    getAdherents: build.query<any, void>({
      query: () => "",
      providesTags: (results, error) => {
        return error
          ? []
          : [
              "adherent",
              ...results?.map((adherent: { id: any }) => {
                return { type: "adherent", id: adherent.id };
              }),
            ];
      },
    }),

    getAdherentById: build.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, args) =>
        error ? [] : [{ type: "adherent", id: result?.id }],
    }),

    createAdherent: build.mutation({
      query: (adherent) => ({
        url: "",
        method: "POST",
        body: adherent,
      }),
      invalidatesTags: ["adherent"],
    }),
    updateAdherent: build.mutation({
      query: (adherent) => ({
        url: `/${adherent.id}`,
        method: "PATCH",
        body: adherent,
      }),
      invalidatesTags: (result) => [{ type: "adherent", id: result?.id }],
    }),
  }),
});

export const {
  useGetAdherentsQuery,
  useGetAdherentByIdQuery,
  useCreateAdherentMutation,
  useUpdateAdherentMutation
} = adherentApi;
