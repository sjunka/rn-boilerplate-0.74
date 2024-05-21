import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import store from '../src/store';
import MainScreen from '../src/screens/MainScreen';

describe('BookingScreen', () => {
  it('should display initial state correctly', () => {
    const {getByText} = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>,
    );

    expect(getByText('Total Seats: 30')).toBeTruthy();
    expect(getByText('Booked Seats: 0')).toBeTruthy();
    expect(getByText('Free Seats: 30')).toBeTruthy();
    expect(getByText('Next Available Seat: 1')).toBeTruthy();
  });

  it('should book a seat when "Book a Seat" button is pressed', () => {
    const {getByText} = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>,
    );

    fireEvent.press(getByText('Book a Seat'));

    expect(getByText('Booked Seats: 1')).toBeTruthy();
    expect(getByText('Free Seats: 29')).toBeTruthy();
    expect(getByText('Next Available Seat: 2')).toBeTruthy();
  });

  it('should book a table when "Book a Table (2 Seats)" button is pressed', () => {
    const {getByText} = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>,
    );

    fireEvent.press(getByText('Book a Table (2 Seats)'));

    expect(getByText('Booked Seats: 3')).toBeTruthy();
    expect(getByText('Free Seats: 27')).toBeTruthy();
    expect(getByText('Next Available Seat: 4')).toBeTruthy();
  });

  it('should not overbook when all seats are booked', () => {
    // Simulate all seats being booked
    const {getByText} = render(
      <Provider store={store}>
        <MainScreen />
      </Provider>,
    );

    for (let i = 0; i < 15; i++) {
      fireEvent.press(getByText('Book a Table (2 Seats)'));
    }

    expect(getByText('Booked Seats: 30')).toBeTruthy();
    expect(getByText('Free Seats: 0')).toBeTruthy();
    expect(getByText('Next Available Seat: 31')).toBeTruthy();

    // Try booking one more seat/table
    fireEvent.press(getByText('Book a Seat'));
    fireEvent.press(getByText('Book a Table (2 Seats)'));

    // Assert no change in booked seats
    expect(getByText('Booked Seats: 29')).toBeTruthy();
    expect(getByText('Free Seats: 1')).toBeTruthy();
    expect(getByText('Next Available Seat: 30')).toBeTruthy();
  });
});
