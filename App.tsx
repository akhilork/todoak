import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
