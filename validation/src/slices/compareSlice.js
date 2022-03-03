import {createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState =  {
    compareFlats : localStorage.getItem('compareFlats') ? JSON.parse(localStorage.getItem('compareFlats')) : [],
}

const compareSlice = createSlice({
    name: 'compareFlats',
    initialState,
    reducers:{
        addToCompare (state, action)  {
         

            const existingIndex = state.compareFlats.findIndex((item) => item.id === action.payload.id);

            if (existingIndex >= 0) {
              state.compareFlats[existingIndex].cartQuantity += 1;
              toast.info(`Уже в добавленно для сравнения`, {
                position: 'bottom-left',
              });
            
            } else {
              const tempProduct = { ...action.payload, cartQuantity: 1 };
              state.compareFlats.push(tempProduct);
              localStorage.setItem('compareFlats', JSON.stringify(state.compareFlats) )
              toast.success(` ${action.payload.build.build}, добавленно  для сравнения`, {
                position: 'bottom-left',
              });
           
            }
         
        },
        removeFromCompare(state, action) {
          const leaveInCompare = state.compareFlats.filter((flat) => flat.id !== action.payload.id)
          state.compareFlats = leaveInCompare
          localStorage.setItem('compareFlats', JSON.stringify(state.compareFlats))
          toast.error(`Убранно из сравнения`, {
            position: 'bottom-left',
          });


        
        }

    }
})

export default compareSlice.reducer
export const {addToCompare, removeFromCompare} = compareSlice.actions