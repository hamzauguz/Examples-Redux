import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import counterReducer from './counter'
import siteReducer from './site'

export default configureStore({
  reducer: {
    counter: counterReducer,
    site: siteReducer,
    auth: authReducer,
  },
})
