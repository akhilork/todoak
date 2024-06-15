import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Colors} from '@app/styles';
import {AvatarProps} from '@app/types';

const Avatar = ({width, height, url}: AvatarProps): JSX.Element => {
  return (
    <View style={styles.avatarContainer}>
      <Image
        style={[styles.avatarImage, {width, height}]}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 50,
    padding: 1,
  },
  avatarImage: {
    borderRadius: 50,
  },
});

export default Avatar;
