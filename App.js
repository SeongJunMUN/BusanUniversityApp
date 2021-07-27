import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import data from './config.json';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: '100%', height: '100%'}} //View를 꽉채우도록
          source={require('./img/main_bg.png')} //이미지경로
          resizeMode="cover">
          <View style={styles.langBtnList}>
            <TouchableOpacity style={styles.langBtn}>
              <Text>한국어</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.langBtn}>
              <Text>ENG</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: '100%',
                height: 100,
                resizeMode: 'center',
                marginTop: 10,
                marginBottom: 20,
              }}
              source={require('./img/main_logo.png')}
            />
          </View>
          <View style={styles.buttonList}>
            <TouchableOpacity style={styles.firstButtonList}>
              <Image
                style={styles.iconImage}
                source={require('./img/icon1.png')}
              />
              <Text>{data.kor.main_title1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.firstButtonList}
              onPress={() => {
                Linking.openURL(
                  'https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403',
                );
              }}>
              <Image
                style={styles.iconImage}
                source={require('./img/icon4.png')}
              />
              <Text>{data.kor.main_title2}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonList}>
            <TouchableOpacity
              style={styles.secondButtonList}
              onPress={() => {
                Linking.openURL(
                  'https://dorm.pusan.ac.kr/dorm/bbs/list01/20000601',
                );
              }}>
              <Image
                style={styles.iconImage}
                source={require('./img/icon2.png')}
              />
              <Text>{data.kor.main_title3}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondButtonList}>
              <Image
                style={styles.iconImage}
                source={require('./img/icon3.png')}
              />
              <Text>{data.kor.main_title4}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondButtonList}>
              <Image
                style={styles.iconImage}
                source={require('./img/icon5.png')}
              />
              <Text>{data.kor.main_title5}</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonList: {
    flexDirection: 'row',
  },
  langBtnList: {
    flexDirection: 'row',
  },
  firstButtonList: {
    backgroundColor: 'rgb(255,255,255)',
    height: 170,
    width: '48%',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  iconImage: {
    width: 60,
    height: 80,
  },
  secondButtonList: {
    backgroundColor: 'rgb(255,255,255)',
    height: 170,
    width: '30%',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    margin: 6,
  },
  langBtn: {
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 10,
    width: '15%',
    padding: 5,
    alignItems: 'center',
    marginTop: 15,
    margin: 6,
  },
});
