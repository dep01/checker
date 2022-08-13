import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {view} from '@risingstack/react-easy-state';
import {sys_styles} from '../../utils/constants';

import * as store from './store';
import {
  BackButton,
  CustomButton,
  CustomInput,
  GlobalHeader,
} from '../../components';
export default view(({navigation}) => {
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [navigation, store]);
  return (
    <View style={sys_styles.scaffold}>
      <GlobalHeader title="CHECKER" />
      <View style={sys_styles.container}>
        <CustomInput
          value={store.state.txt}
          onChangeText={(val) => store.changeText(val)}
          label="Paragraph"
          placeholder="Paragraph will be check here..."
          inputStyle={styles.txtParagraph}
          numberOfLines={20}
          multiline = {true}
          maxLength={5000}
        />
        <View style={styles.containerButton}>
          <CustomButton
            title="scan from camera"
            style={styles.buttonSignin}
            onPress={() => store.doScan({navigation})}
          />
          <CustomButton
            title="check plagiarism"
            style={styles.buttonSignin}
            type={CustomButton.Types.SECONDARY}
            onPress={() => store.doCheckPlagiarism({navigation})}
          />
        </View>
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  containerButton: {width: '100%', alignItems: 'center'},
  buttonPassword: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSignin: {width: '80%', marginTop: 15, borderRadius: 50},
  txtParagraph:{textAlignVertical:"top"}
});
