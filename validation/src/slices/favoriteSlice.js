import {createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState =  {
    favoritedFlat : localStorage.getItem('favorited') ? JSON.parse(localStorage.getItem('favorited')) : [],
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers:{
        addToFavorite (state, action)  {
         

            const existingIndex = state.favoritedFlat.findIndex((item) => item.id === action.payload.id);

            if (existingIndex >= 0) {
              state.favoritedFlat[existingIndex].cartQuantity += 1;
              toast.info(`Уже в избранном`, {
                position: 'bottom-left',
              });
            
            } else {
              const tempProduct = { ...action.payload, cartQuantity: 1 };
              state.favoritedFlat.push(tempProduct);
              localStorage.setItem('favorited', JSON.stringify(state.favoritedFlat) )
              toast.success(` ${action.payload.area}, добавленно в избранное`, {
                position: 'bottom-left',
              });
           
            }
         
        },
        removeFromFavorite(state, action) {
          const leaveInFavorite = state.favoritedFlat.filter((favorite) => favorite.id !== action.payload.id)
          state.favoritedFlat = leaveInFavorite
          localStorage.setItem('favorited', JSON.stringify(state.favoritedFlat))
          toast.error(`Убранно из избранного`, {
            position: 'bottom-left',
          });


        
        }

    }
})

export default favoriteSlice.reducer
export const {addToFavorite, removeFromFavorite} = favoriteSlice.actions