import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  totalSeats: 30,
  bookedSeats: [],
  nextAvailableSeat: 1,
};

const mySlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    bookSeat: (state, action) => {
      if (state.bookedSeats.length < state.totalSeats) {
        state.bookedSeats.push(state.nextAvailableSeat);
        state.nextAvailableSeat++;
      }
    },
    bookTable: state => {
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
