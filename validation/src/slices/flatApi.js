import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const flatApi = createApi({
  reducerPath: 'flatApi',
  tagTypes: ['Flats'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api/',
  }),
  endpoints: (build) => ({
    getFlats: build.query({
      query: ({ build_id, room_id, resale_id, area, price_from, price_to }) => ({
        url: `flats`,
        params: {
          build_id: build_id,
          room_id: room_id,
          resale_id: resale_id,
          area: area,
          price_from: price_from,
          price_to: price_to,
        },
      }),
    
  }),
  getFlat:build.query({
      query:(id) =>({
        url: `flats/${id}`
      })
  }),
  // providesTags: (result) =>
  // result
  //   ? [...result.map(({ id }) => ({ type: 'Flats', id })), { type: 'Flats', id: 'LIST' }]
  //   : [{ type: 'Flats', id: 'LIST' }],

 
    }),

});

export const { useGetFlatsQuery , useGetFlatQuery} = flatApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const flatApi = createApi({
//   reducerPath: 'flatApi',
//   tagTypes: ['Flats'],
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://127.0.0.1:8000/api/',
//   }),
//   endpoints: (builder) => ({
//     getFlats: builder.query({
//       query: ({build_id,room_id,resale_id ,area,price_from, price_to}) => `flats?${build_id && `build_id=${build_id}`}
//       &${room_id && `room_id=${room_id}`}&${resale_id && `resale_id=${resale_id}`}&${area && `area=${area}`}&
//       ${price_from && `price_from=${price_from}`}&${price_to && `price_to=${price_to}`}
//       `,
//     }),
//     providesTags:(result) =>
//     result
//       ? [
//           ...result.map(({ id }) => ({ type: 'Flats', id })),
//           { type: 'Flats', id: 'LIST' },
//         ]
//       : [{ type: 'Flats', id: 'LIST' }],

//   }),
// });

// export const {useGetFlatsQuery} = flatApi;
