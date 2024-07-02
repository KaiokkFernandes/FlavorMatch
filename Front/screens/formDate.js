import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FormDate = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [people, setPeople] = useState('1');
  const [preference, setPreference] = useState('');

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
     // Aqui fica pra implentar a logica no back do formulario
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
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff0000',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff0000',
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
    backgroundColor: '#ff0000',
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
