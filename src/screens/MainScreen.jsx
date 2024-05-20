import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {bookSeat, bookTable, resetState} from '../store/mySlice';

const BookingScreen = () => {
  const dispatch = useDispatch();
  const bookedSeats = useSelector(state => state.booking.bookedSeats);
  const totalSeats = useSelector(state => state.booking.totalSeats);
  const nextAvailableSeat = useSelector(
    state => state.booking.nextAvailableSeat,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Booking System</Text>
      <Text style={styles.text}>Total Seats: {totalSeats}</Text>
      <Text style={styles.text}>Booked Seats: {bookedSeats.length}</Text>
      <Text style={styles.text}>
        Free Seats: {totalSeats - bookedSeats.length}
      </Text>
      <Text style={styles.text}>Next Available Seat: {nextAvailableSeat}</Text>
      <View style={styles.marginY}>
        <Button title="Book a Seat" onPress={() => dispatch(bookSeat())} />
      </View>
      <View style={styles.marginY}>
        <Button
          title="Book a Table (2 Seats)"
          onPress={() => dispatch(bookTable())}
        />
      </View>
      <View style={styles.marginY}>
        <Button title="Reset" onPress={() => dispatch(resetState())} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    marginVertical: 8,
  },
  marginY: {
    marginVertical: 10,
  },
});

export default BookingScreen;
