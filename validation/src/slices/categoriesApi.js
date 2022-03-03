import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const categoriesApi = createApi({
    reducerPath:'categoriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://127.0.0.1:8000/api/' 
    }),
        endpoints:(builder) => ({
            getAllBalcony:builder.query({
                query:() => 'balconies'
            }),
       
    })
})

export const {useGetAllBalconyQuery} = categoriesApi