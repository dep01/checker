import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {view, store} from '@risingstack/react-easy-state';
import {sys_styles} from './constants';
import {RNCamera} from 'react-native-camera';
import {CustomButton} from '../components';

export default view(({route, navigation}) => {
  const {goBack} = route.params;
  const state = store({
    txt: '',
  });
  const doScan=()=>{
    navigation.goBack();
    goBack(state.txt);
  }
  return (
    <View style={sys_styles.scaffold}>
      <RNCamera
        ref={(ref) => {
          camera = ref;
        }}
        style={{
          flex: 1,
          width: '100%',
        }}
        type={'back'}
        flashMode={'off'}
        autoFocus={'on'}
        zoom={0}
        whiteBalance={'auto'}
        ratio={'16:9'}
        focusDepth={0}
        trackingEnabled
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onTextRecognized={({textBlocks}) => {
          state.txt = '';
          if (textBlocks.length > 0) {
            textBlocks.map((value) => {
              state.txt += value.value;
              // console.log(value.value)
            });
          }
        }}
      />
      <View style={styles.containerButton}>
        <CustomButton
          title="SCAN"
          style={styles.buttonScan}
          onPress={() => doScan()}
        />
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  containerButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'transparent',
    height: '20%',
    bottom: 10,
  },
  buttonScan: {borderRadius:50},
});
