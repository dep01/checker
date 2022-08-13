import {store} from '@risingstack/react-easy-state';
import {Linking} from 'react-native';
import Convert from '../../model/plagiarismModel';
import {global_state} from '../../utils/global_store';
export const state = store({
  loading: false,
  data: Convert.objectOfplagiarismModel({}),
});
export async function initialized(data) {
  state.loading = true;
  state.data = Convert.objectOfplagiarismModel(data);
  state.loading = false;
}
export function cleanUp() {
  state.loading = false;
  state.data = Convert.objectOfplagiarismModel({});
}
export async function openLink({link = ''}) {
  global_state.setLoading(true);
  Linking.canOpenURL(link).then((supported) => {
    if (supported) {
      Linking.openURL(link);
    } else {
      console.log("Don't know how to open URI: " + link);
    }
  });
  global_state.setLoading(false);
}
