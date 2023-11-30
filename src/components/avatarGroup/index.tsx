import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Avatar} from '@app/components';
import {AvatarGroupProps} from '@app/types';
import {Colors, GlobalStyles} from '@app/styles';

const AvatarGroup = ({users}: AvatarGroupProps): JSX.Element => {
  return (
    <View style={styles.avatarGroupContainer}>
      {users.length > 0 &&
        users.slice(0, 3).map((user, index) => (
          <View key={index} style={[index > 0 && styles.avatarContainer]}>
            <Avatar height={25} width={25} url={user.image} />
          </View>
        ))}
      {users.length > 3 && (
        <View
          style={[
            styles.avatarCountContainer,
            styles.avatarContainer,
            GlobalStyles.justifyCenterAlignCenter,
          ]}>
          <Text style={styles.avatarCountText}>+{users.length - 3}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatarGroupContainer: {
    flexDirection: 'row',
  },
  avatarContainer: {
    marginLeft: -12,
  },
  avatarCountContainer: {
    width: 27,
    height: 27,
    backgroundColor: Colors.blackVariant.transparent70,
    borderRadius: 50,
  },
  avatarCountText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default AvatarGroup;
