import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {view} from '@risingstack/react-easy-state';
import {sys_colors, sys_styles, sys_text_styles} from '../../utils/constants';
import * as store from './store';
import {BackButton, CustomButton, Divider, GlobalHeader, Paragraph, SpaceText} from '../../components';
export default view(({route, navigation}) => {
  const {data} = route.params;
  useEffect(() => {
    store.initialized(data);
    return () => {
      store.cleanUp();
    };
  }, [navigation, store]);
  return (
    <View style={sys_styles.scaffold}>
      <GlobalHeader
        title="CHECKER"
        left={<BackButton color={sys_colors.text.white} />}
      />
      <ScrollView style={sys_styles.scroll_container} showsVerticalScrollIndicator={false}>
        <SpaceText
          left="Total Web Checking"
          leftStyle={sys_text_styles.header_medium_black}
          rightStyle={sys_text_styles.header_medium_black}
          right={`: ${store.state.data.details.length}`}
          containerStyle={styles.containerSpaceText}
        />
        <SpaceText
          left="Unique Percent"
          leftStyle={sys_text_styles.header_medium_black}
          rightStyle={sys_text_styles.header_medium_black}
          right={`: ${store.state.data.uniquePercent}%`}
          containerStyle={styles.containerSpaceText}
        />
        <SpaceText
          left="Plagiarism Percent"
          leftStyle={sys_text_styles.header_medium_black}
          rightStyle={sys_text_styles.header_medium_black}
          right={`: ${store.state.data.plagPercent}%`}
          containerStyle={styles.containerSpaceText}
        />
        <Divider lineHeight={3} width="100%" />
        {store.state.data.details.map((value, index) => {
          return (
            <View key={`details-${index}`} style={styles.containerDetail}>
              {/* <Paragraph title='Text'content={value.query} /> */}
              <Text style={sys_text_styles.content_medium_black}>{value.query}</Text>
              <CustomButton baseHeight="35%"  style={styles.buttonVisit} onPress={()=>store.openLink({link:value.display.url})} title="Visit Web" />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
});
const styles = StyleSheet.create({
  containerDetail: {width: '100%', marginTop: 10,height:120},
  containerSpaceText:{marginBottom: 10},
  titleText: {
    ...sys_text_styles.header_medium_black,
  },
  buttonVisit:{borderRadius:50}
});
