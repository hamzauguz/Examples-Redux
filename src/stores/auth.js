import { createSlice } from '@reduxjs/toolkit'

export const auth = createSlice({
  name: 'site',
  initialState: {
    user: localStorage.getItem('auth') ?? false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      localStorage.setItem('auth', action.payload)
    },
    logout: (state) => {
      state.user = false
      localStorage.removeItem('auth')
    },
  },
})

export const { login, logout } = auth.actions
export default auth.reducer
