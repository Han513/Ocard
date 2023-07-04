import React from 'react';
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';

export default class PersonalForm extends React.Component {
  render() {
    const {postCount, postLikeCount, isLoginUser, isRegisterUser} = this.props;
    return (
      <View style={{margin: 15}}>
        <View style={styles.content}>
          <Image
            source={isLoginUser[0].posterImage}
            style={styles.HeadPicstyle}
          />
          {/* 創帳號時須記年月 */}
          <View style={{paddingLeft: 5}}>
            <Text style={{fontSize: 20}}>{isLoginUser[0].posterName}</Text>
            <Text style={{fontSize: 18, color: 'gray'}}>
              {isRegisterUser[0].setDate}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View
            style={{
              borderColor: 'black',
              borderWidth: 0.5,
              borderRadius: 9,
              width: Dimensions.get('window').width / 2 - 20,
              margin: 5,
              padding: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18, color: 'gray'}}>發過的文章</Text>
              <Image
                source={require('./images/document.png')}
                style={{width: 30, height: 30}}
              />
            </View>
            <Text style={{fontSize: 50}}>
              {postCount(isLoginUser[0].posterId)}篇
            </Text>
          </View>
          <View
            style={{
              borderColor: 'black',
              borderWidth: 0.5,
              borderRadius: 9,
              width: Dimensions.get('window').width / 2 - 20,
              margin: 5,
              padding: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18, color: 'gray'}}>我的收藏</Text>
              <Image
                source={require('./images/like.png')}
                style={{width: 25, height: 25}}
              />
            </View>
            <Text style={{fontSize: 50}}>{postLikeCount(1)}個</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // 區塊上下垂直外距大小
    padding: 10, // 區塊四周內距大小
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 9,
  },
  HeadPicstyle: {
    width: 40,
    height: 40,
    borderColor: 'black',
    borderWidth: 0.1,
    borderRadius: 400,
    margin: 10,
  },
});
