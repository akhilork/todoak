import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppLogo from '@app/assets/svg/app-logo.svg';
import {Colors} from '@app/styles';

const Loading = (): JSX.Element => {
  return (
    <View style={styles.loadingConatiner}>
      <AppLogo height={86} width={260} color={Colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingConatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
});

export default Loading;
