import {createSlice} from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'mySlice',
  initialState: {
    bookedSeats: [],
    totalSeats: 0,
    nextAvailableSeat: 0,
  },
  reducers: {
    bookSeat: (state, action) => {
      if (action.type === 'increment') {
        state.totalSeats++;
      } else if (action.type === 'decrement') {
        if (state.totalSeats > 0) {
          state.totalSeats--;
        }
      }
      if (state.bookedSeats.length < state.totalSeats) {
        state.bookedSeats.push(state.nextAvailableSeat);
        state.nextAvailableSeat++;
      }
    },
    bookTable: (state, action) => {
      if (action.type === 'increment') {
        state.totalSeats++;
      } else if (action.type === 'decrement') {
        if (state.totalSeats > 0) {
          state.totalSeats--;
        }
      }
      if (state.bookedSeats.length + 2 <= state.totalSeats) {
        state.bookedSeats.push(
          state.nextAvailableSeat,
          state.nextAvailableSeat + 1,
        );
        state.nextAvailableSeat += 2;
      }
    },
    resetState: (state, action) => {
      return {
        bookedSeats: [],
        totalSeats: 0,
        nextAvailableSeat: 0,
      };
    },
  },
});

export const {bookSeat, bookTable, resetState} = mySlice.actions;

export default mySlice.reducer;
