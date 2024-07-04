import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const FormDate = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [people, setPeople] = useState('1');
  const [preference, setPreference] = useState('');
  const navigation = useNavigation();

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const handleFormSubmit = () => {
    navigation.navigate('AppointmentConfirmationScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marcar Encontro</Text>

      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.inputContainer}>
        <Icon name="calendar" size={20} color="#fff" />
        <Text style={styles.inputText}>{date.toDateString()}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.inputContainer}>
        <Icon name="clock" size={20} color="#fff" />
        <Text style={styles.inputText}>{time.toLocaleTimeString()}</Text>
      </TouchableOpacity>

      {showTimePicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={onChangeTime}
        />
      )}

      <View style={styles.inputContainer}>
        <Icon name="account-group" size={20} color="#fff" />
        <Picker
          selectedValue={people}
          style={styles.picker}
          onValueChange={(itemValue) => setPeople(itemValue)}
        >
          <Picker.Item label="1 pessoa" value="1" />
          <Picker.Item label="2 pessoas" value="2" />
          <Picker.Item label="3 pessoas" value="3" />
          <Picker.Item label="4 pessoas" value="4" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="heart" size={20} color="#fff" />
        <TextInput
          style={styles.input}
          placeholder="Preferência de pessoas"
          placeholderTextColor="#fff"
          value={preference}
          onChangeText={setPreference}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
        <Text style={styles.buttonText}>Marcar Encontro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: '#FCAB10', 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A41C1E',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A41C1E', 
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  inputText: {
    color: '#fff',
    marginLeft: 10,
  },
  picker: {
    flex: 1,
    color: '#fff',
  },
  input: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#A41C1E', 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: { 
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FormDate;
