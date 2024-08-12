import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [loaded, error] = useFonts({
    'BebasNeue': require('../../assets/fonts/BebasNeue.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff', fontFamily: 'BebasNeue', fontSize: 128 }}>DareIt</Text>
      <Text>
        <Text style={{ color: '#fff', fontFamily: 'BebasNeue', fontSize: 32 }}>Make your life better {"\n"}
        with daily</Text>
        <Text style={{ color: '#000', fontFamily: 'BebasNeue', fontSize: 32, backgroundColor: '#FFF85B' }}> Challenges </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subheading: {
    color: '#fff', 
    fontFamily: 'BebasNeue', 
    fontSize: 32
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
});
