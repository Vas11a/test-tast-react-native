import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchData } from './asyncFunctions'
import { Elem } from '../types'

type mainSliceType =  {
  imgsList: Elem[]
}

const initialState: mainSliceType = {
  imgsList: [],
}



export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, () => {
        console.log('Pending...');
    })
    builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<any>) => {
      state.imgsList = [];
      action.payload.forEach((element: any) => {
        state.imgsList = [...state.imgsList, {id: element.id, description: element.alt_description, url: element.links.download}];
      });
    });
    builder.addCase(fetchData.rejected, () => {
      console.log('Something went wrong...');
    });
  },
})


export const { } = mainSlice.actions
export default mainSlice.reducer