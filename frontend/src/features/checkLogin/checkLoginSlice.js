import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
      empName: null,
    },
    reducers: {
      login: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.empName = action.payload;
      },
      loginName: (state, action) => {
        state.empName = action.payload
      },
    },
  })

export const { login ,loginName} = loginSlice.actions

export const loginAsync = (username) => (dispatch) => {
    dispatch(loginName(username))
  }

export const selectEmpName = (state) => state.login.empName

export default loginSlice.reducer