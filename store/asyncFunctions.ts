import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";


export const fetchData = createAsyncThunk(
    'main/fetchData',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://api.unsplash.com/photos/random/?client_id=50RX0g0X6qQ3fGlcmL3ufqu1pbNmTq8g4QDE8dYkY7M&count=10');
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError<{ error: string }>;
            return thunkAPI.rejectWithValue({ error: axiosError.message });
        }
    }
);