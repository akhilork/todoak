import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Colors, GlobalStyles} from '@app/styles';
import {BottomSheetProps} from '@app/types';

const BottomSheet = ({
  visible,
  onDismiss,
  snapPointValues,
  children,
}: BottomSheetProps): JSX.Element => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => snapPointValues, [snapPointValues]);

  const handleSheetChanges = useCallback((index: number) => {
    if (index < 0) {
      onDismiss();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (visible) {
      bottomSheetModalRef.current?.present();
    }
  }, [visible]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => onDismiss()}>
      <GestureHandlerRootView style={GlobalStyles.flex1}>
        <Pressable
          style={styles.bottomSheetContainer}
          onPress={() => onDismiss()}>
          <BottomSheetModalProvider>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              backgroundStyle={styles.bottomSheetModal}
              handleIndicatorStyle={styles.handleIndicatorStyle}
              onChange={handleSheetChanges}>
              <TouchableWithoutFeedback>
                <View style={styles.contentContainer}>{children}</View>
              </TouchableWithoutFeedback>
            </BottomSheetModal>
          </BottomSheetModalProvider>
        </Pressable>
      </GestureHandlerRootView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    flex: 1,
    backgroundColor: Colors.blackVariant.transparent30,
  },
  bottomSheetModal: {
    backgroundColor: Colors.grayvariant[300],
  },
  handleIndicatorStyle: {
    backgroundColor: Colors.white,
  },
  contentContainer: {
    flex: 1,
  },
});

export default BottomSheet;
