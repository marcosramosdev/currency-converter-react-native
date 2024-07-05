import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Picker,
  TouchableOpacity,
} from "react-native";

const API_KEY = "ab293a3fb265964ea38dab75";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

export default function index() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(null);

  const handleConvert = async () => {
    try {
      const response = await fetch(`${BASE_URL}/${fromCurrency}`);
      const data = await response.json();
      const rate = data.conversion_rates[toCurrency];
      const convertedAmount = (amount * rate).toFixed(2);
      setResult(`${convertedAmount} ${toCurrency}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>From:</Text>
        <Picker
          selectedValue={fromCurrency}
          style={styles.picker}
          onValueChange={(itemValue) => setFromCurrency(itemValue)}
        >
          <Picker.Item label="USD" value="USD" />
          <Picker.Item label="EUR" value="EUR" />
          <Picker.Item label="BRL" value="BRL" />
          <Picker.Item label="GBP" value="GBP" />
          <Picker.Item label="AUD" value="AUD" />
          <Picker.Item label="CAD" value="CAD" />
          <Picker.Item label="CHF" value="CHF" />
          <Picker.Item label="CNY" value="CNY" />
          <Picker.Item label="JPY" value="JPY" />
          <Picker.Item label="INR" value="INR" />
          <Picker.Item label="RUB" value="RUB" />
          <Picker.Item label="ZAR" value="ZAR" />
          {/* Adicione mais moedas conforme necessário */}
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>To:</Text>
        <Picker
          selectedValue={toCurrency}
          style={styles.picker}
          onValueChange={(itemValue) => setToCurrency(itemValue)}
        >
          <Picker.Item label="USD" value="USD" />
          <Picker.Item label="EUR" value="EUR" />
          <Picker.Item label="BRL" value="BRL" />
          <Picker.Item label="GBP" value="GBP" />
          <Picker.Item label="AUD" value="AUD" />
          <Picker.Item label="CAD" value="CAD" />
          <Picker.Item label="CHF" value="CHF" />
          <Picker.Item label="CNY" value="CNY" />
          <Picker.Item label="JPY" value="JPY" />
          <Picker.Item label="INR" value="INR" />
          <Picker.Item label="RUB" value="RUB" />
          <Picker.Item label="ZAR" value="ZAR" />
          {/* Adicione mais moedas conforme necessário */}
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleConvert}>
        <Text style={styles.buttonText}>Convert</Text>
      </TouchableOpacity>
      {result && <Text style={styles.result}>Converted Amount: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffffff",
  },
  input: {
    height: 40,
    borderColor: "#333",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  pickerContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: "100%",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    color: "#ffffff",
  },
});
