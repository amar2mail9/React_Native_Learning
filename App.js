import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Back App Js</Text>
      <Navbar/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(200,200,200,0.8)",
    marginTop: 40, // Corrected to number
    textAlign: "center", // Works only with text components
    display: "flex", // Redundant as it's the default
    alignItems: "center", // Aligns children in the center
   
   
  },
  text: {
    fontSize: 20, // Corrected to number
    fontWeight: "bold", // Optional for better emphasis
  },
});
