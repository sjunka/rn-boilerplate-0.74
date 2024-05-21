import myInitialReducer, {bookSeat, bookTable} from '../src/store/mySlice';

describe('booking slice', () => {
  it('should handle initial state', () => {
    expect(myInitialReducer(undefined, {})).toEqual({
      totalSeats: 30,
      bookedSeats: [],
      nextAvailableSeat: 1,
    });
  });

  it('should handle booking a seat', () => {
    const initialState = {
      totalSeats: 30,
      bookedSeats: [],
      nextAvailableSeat: 1,
    };
    const nextState = myInitialReducer(initialState, bookSeat());
    expect(nextState.bookedSeats).toEqual([1]);
    expect(nextState.nextAvailableSeat).toEqual(2);
  });

  it('should handle booking a table', () => {
    const initialState = {
      totalSeats: 30,
      bookedSeats: [],
      nextAvailableSeat: 1,
    };
    const nextState = myInitialReducer(initialState, bookTable());
    expect(nextState.bookedSeats).toEqual([1, 2]);
    expect(nextState.nextAvailableSeat).toEqual(3);
  });

  it('should not overbook seats', () => {
    const initialState = {
      totalSeats: 30,
      bookedSeats: Array.from({length: 30}, (_, i) => i + 1),
      nextAvailableSeat: 31,
    };
    const nextState = myInitialReducer(initialState, bookSeat());
    expect(nextState.bookedSeats).toEqual(
      Array.from({length: 30}, (_, i) => i + 1),
    );
    expect(nextState.nextAvailableSeat).toEqual(31);
  });

  it('should not overbook tables', () => {
    const initialState = {
      totalSeats: 30,
      bookedSeats: Array.from({length: 29}, (_, i) => i + 1),
      nextAvailableSeat: 30,
    };
    const nextState = myInitialReducer(initialState, bookTable());
    expect(nextState.bookedSeats).toEqual(
      Array.from({length: 29}, (_, i) => i + 1),
    );
    expect(nextState.nextAvailableSeat).toEqual(30);
  });
});
