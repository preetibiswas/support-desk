import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ticketService from '../tickets/ticketService'

const initialState = {
  tickets: [],
  ticket: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {},
})
export const { reset } = ticketSlice.actions
export default ticketSlice.reducer
