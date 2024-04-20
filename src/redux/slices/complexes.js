import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios.js'

export const fetchComplexes = createAsyncThunk('complexes/fetchComplexes', async () => {
    try {
        const response = await axios.get('/complexes');
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        throw error;
    }
});

const initialState = {
    complexes: {
        items: [],
        status: 'loading'
    }
}
const complexSlice = createSlice({
    name: 'complexes',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchComplexes.pending]: (state) => {
            state.complexes.items = []
            state.complexes.status = 'loading'
        },
        [fetchComplexes.fulfilled]: (state, action) => {
            state.complexes.items = action.payload;
            state.complexes.status = 'loaded'
        },
        [fetchComplexes.rejected]: (state) => {
            state.complexes.items = []
            state.complexes.status = 'error'
        }
    }
})

export const complexesReducer = complexSlice.reducer