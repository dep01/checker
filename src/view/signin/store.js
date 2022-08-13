import {store} from '@risingstack/react-easy-state';
import {checkPlagiarism} from '../../providers/plagiarismProvider';
import {static_routes} from '../../routes/static_routes';
import {global_state} from '../../utils/global_store';
import Convert from '../../model/plagiarismModel';

// import {SafeAreaProvider} from 'react-native-safe-area-context';
export const state = store({
  loading: false,
  txt: '',
  plagiarsm: Convert.objectOfplagiarismModel({}),
});
export async function initialized() {
  state.loading = true;
}
export function cleanUp() {
  state.loading = false;
  state.txt = '';
  state.plagiarsm = Convert.objectOfplagiarismModel({});
}

export function changeText(val = '') {
  state.txt = val;
}
export function goBack(value) {
  state.txt = value;
}
export async function doCheckPlagiarism({navigation}) {
  global_state.setLoading(true);
  if (state.txt.length > 0) {
    let data = {
      data: state.txt,
    };
    const response = await checkPlagiarism(data);
    state.plagiarsm = Convert.objectOfplagiarismModel(response);
    // console.log(state.plagiarsm);
    if (state.plagiarsm.plagPercent > 0) {
      global_state.setLoading(false);
      navigation.navigate(static_routes.detail_plagiarism,{data:state.plagiarsm})
    } else {
      global_state.toast?.current.show('Your paragraph is fully unique!');
    }
  } else {
    global_state.toast?.current.show('Please input your paragraph!!');
  }
  global_state.setLoading(false);
}
export async function doScan({navigation}) {
  await navigation.navigate(static_routes.camera, {goBack: goBack});
}
