import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'test',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    initAsync: state => {
        // do nothing
    },
    initDepAsync1: state => {
      // do nothing
    },
    initDepAsync2: state => {
      // do nothing
    },
    initDepAsync3: state => {
      // do nothing
    },
    allDependenciesCompleted: state => {},
    asyncSuccess: (state, payload) => {
    },
    stopAsync: state => {
        // do nothing
    }
  }
})

export default counterSlice