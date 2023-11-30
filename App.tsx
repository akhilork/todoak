import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from '@app/store';
import Navigation from '@app/navigation';
import {Loading} from '@app/components';
import {Colors} from '@app/styles';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <SafeAreaView style={styles.appContainer}>
          <Navigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});

export default App;
