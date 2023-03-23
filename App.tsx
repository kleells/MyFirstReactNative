/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { PropsWithChildren, useState } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  const [name, setName] = useState("");

  return (
    <View
          style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>My First React Native App</Text>
          <Image style={styles.userImage} source={require('./images/littleRita.png')} />
          <Text style={styles.sectionDescription}>It took me a lot of time to set this application up but it was 
          a terrific learning experience and totally worth the energy I put into it. What a fun challange!</Text>
          <View>
            <TextInput
              style={styles.inputView}
              placeholder='What is your name?'
              placeholderTextColor='#D8A31A'
              onChangeText={(value) => setName(value)}
            />
            <Text
              style={styles.welcomeMessage}>
              Hello: {name}
            </Text>
          </View>
    </View>
  );
}

const viewport = Dimensions.get('window');

const ratio = viewport.width / 432; // 432 is the actual width of the image

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 60,
  },
  inputView: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    height: 40,
    width: '80%', 
    borderColor: '#4E4537',
    borderWidth: 1,
    borderRadius: 10,
    color: '#324B76',
    alignSelf: 'center',
  },
  welcomeMessage: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '500',
    color: '#4B8178',
    padding: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#005249',
    alignSelf: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    color: '#051937',
    fontWeight: '400',
    padding: 16,

  },
  userImage: {
    marginTop: 20,
    alignSelf: 'center',
    height: 450 * ratio, // 576 is the actual height of the image
  },
});

export default App;
