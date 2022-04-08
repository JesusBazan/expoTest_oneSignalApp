import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OneSignal from 'react-native-onesignal';
import Constants from "expo-constants";

OneSignal.setAppId(Constants.manifest.extra.oneSignalAppId);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>One Signal</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
