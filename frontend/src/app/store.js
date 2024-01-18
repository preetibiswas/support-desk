import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import tickReducer from '../features/tickets/ticketSlice'
import noteReducer from '../features/notes/noteSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: tickReducer,
    notes: noteReducer,
  },
})
