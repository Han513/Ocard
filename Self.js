import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Self extends React.Component {
  render() {
    const {
      postCount,
      postLikeCount,
      logOut,
      isLog,
      isLoginUser,
      MyselfMarkedPosts,
      MyselfPosts,
      isRegisterUser,
      RegisterData,
      posterdatas,
      handleAllpost,
      handleChoosePhoto,
      handleEditName,
    } = this.props;
    return (
      <>
        {isLog === false ? (
          <ScrollView style={styles.content}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 25, paddingBottom: 5}}>
                  未登入的小雞雞
                </Text>
                <Text style={{color: 'gray', fontSize: 20}}>高應大</Text>
                <Text style={{color: 'gray', fontSize: 20}}>資管系</Text>
              </View>
              <Image
                source={require('./images/chick.png')}
                style={styles.HeadPicstyle}
              />
            </View>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 36,
              }}
              onPress={() => {
                alert('請登入');
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{paddingRight: 30}}>
                  <Text style={{fontWeight: 'bold', fontSize: 30}}>*</Text>
                  <Text style={{color: 'gray'}}>發過的文章</Text>
                </View>
                <View style={{paddingRight: 30}}>
                  <Text style={{fontWeight: 'bold', fontSize: 30}}>*</Text>
                  <Text style={{color: 'gray'}}>發過的回應</Text>
                  {/* 回應需要被記userId */}
                </View>
                <View style={{paddingRight: 30}}>
                  <Text style={{fontWeight: 'bold', fontSize: 30}}>*</Text>
                  <Text style={{color: 'gray'}}>文章被回應</Text>
                  {/* 文章需要抓到留言 */}
                </View>
              </View>
              <Image
                source={require('./images/right_arrow2.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity>

            <View>
              <TouchableOpacity
                onPress={() => {
                  alert('請登入');
                }}>
                <View style={styles.IconViewstyle}>
                  <Image
                    source={require('./images/marked.jpg')}
                    style={styles.IconPicstyle}
                  />
                  <Text style={{fontSize: 21}}> 我的收藏</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert('請登入');
                }}>
                <View style={styles.IconViewstyle}>
                  <Image
                    source={require('./images/document.png')}
                    style={styles.IconPicstyle}
                  />
                  <Text style={{fontSize: 21}}> 我發表的文章</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  alert('請登入');
                }}>
                <View style={styles.IconViewstyle}>
                  <Image
                    source={require('./images/name.jpg')}
                    style={styles.IconPicstyle}
                  />
                  <Text style={{fontSize: 21}}> 我的暱稱</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() =>
                Actions.LogInterface({
                  RegisterData: RegisterData,
                  posterdatas: posterdatas,
                  isLoginUser: isLoginUser,
                })
              }>
              <View Style={styles.IconViewstyle}>
                <Image
                  source={require('./images/login.png')}
                  style={styles.IconPicstyle}
                />
                <Text style={{fontSize: 21}}> 登入/註冊</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        ) : (
          <ScrollView style={styles.content}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: 25, paddingBottom: 5}}>
                  {isLoginUser[0].posterName}
                </Text>
                <Text style={{color: 'gray', fontSize: 20}}>高應大</Text>
                <Text style={{color: 'gray', fontSize: 20}}>智慧商務系</Text>
              </View>
              <TouchableOpacity
                onPress={() => handleChoosePhoto(isLoginUser[0].posterId)}>
                {isLoginUser[0].uri === undefined ? (
                  <Image
                    source={isLoginUser[0].posterImage}
                    style={styles.HeadPicstyle}
                  />
                ) : (
                  <Image
                    source={{uri: isLoginUser[0].uri}}
                    style={styles.HeadPicstyle}
                  />
                )}
                {/* <Image source={isLoginUser[0].posterImage} style={styles.HeadPicstyle} /> */}
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 36,
              }}
              onPress={() => {
                Actions.replace('PersonalForm', {
                  isLoginUser: isLoginUser,
                  postCount: postCount,
                  postLikeCount: postLikeCount,
                  isRegisterUser: isRegisterUser,
                });
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={{paddingRight: 30}}>
                  <Text style={{fontWeight: 'bold', fontSize: 30}}>
                    {postCount(isLoginUser[0].posterId)}
                  </Text>
                  <Text style={{color: 'gray'}}>發過的文章</Text>
                </View>
                <View style={{paddingRight: 30}}>
                  <Text style={{fontWeight: 'bold', fontSize: 30}}>*</Text>
                  <Text style={{color: 'gray'}}>發過的回應</Text>
                  {/* 回應需要被記userId */}
                </View>
                <View style={{paddingRight: 30}}>
                  <Text style={{fontWeight: 'bold', fontSize: 30}}>*</Text>
                  <Text style={{color: 'gray'}}>文章被回應</Text>
                  {/* 文章需要抓到留言 */}
                </View>
              </View>
              <Image
                source={require('./images/right_arrow2.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity>

            <View>
              <TouchableOpacity
                onPress={() => {
                  Actions.replace('SelfMark', {
                    MyselfMarkedPosts: MyselfMarkedPosts,
                    posterdatas: posterdatas,
                    handleAllpost: handleAllpost,
                  });
                }}>
                <View style={styles.IconViewstyle}>
                  <Image
                    source={require('./images/marked.jpg')}
                    style={styles.IconPicstyle}
                  />
                  <Text style={{fontSize: 21}}> 我的收藏</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  Actions.replace('SelfPost', {
                    MyselfPosts: MyselfPosts,
                    posterdatas: posterdatas,
                    handleAllpost: handleAllpost,
                  });
                }}>
                <View style={styles.IconViewstyle}>
                  <Image
                    source={require('./images/document.png')}
                    style={styles.IconPicstyle}
                  />
                  <Text style={{fontSize: 21}}> 我發表的文章</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Actions.SelfNameForm({
                    posterName: isLoginUser[0].posterName,
                    posterId: isLoginUser[0].posterId,
                    handleEditName: handleEditName,
                  })
                }>
                <View style={styles.IconViewstyle}>
                  <Image
                    source={require('./images/name.jpg')}
                    style={styles.IconPicstyle}
                  />
                  <Text style={{fontSize: 21}}> 我的暱稱</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={logOut}>
                <View style={styles.IconViewstyle}>
                  <Image
                    source={require('./images/logout.png')}
                    style={styles.IconPicstyle}
                  />
                  <Text style={{fontSize: 21}}> 登出</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 6, // 區塊上下垂直外距大小
    padding: 18, // 區塊四周內距大小
    backgroundColor: 'white', //米白
    elevation: 5, // 陰影深淺
  },
  HeadPicstyle: {
    width: 70,
    height: 70,
    borderColor: 'black',
    borderWidth: 0.1,
    borderRadius: 400,
  },
  IconViewstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  IconPicstyle: {
    width: 30,
    height: 30,
  },
});
