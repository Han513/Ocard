//電子信箱 密碼 posterId 真名 匿名 申辦日期
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class LogInterface extends React.Component {
  render() {
    const {
      handleAddRegisterData,
      handleChangeIsLog,
      RegisterData,
      posterdatas,
      isLoginUser,
    } = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.Radiusstyle}
          onPress={() => {
            Actions.LogIn({
              handleChangeIsLog: handleChangeIsLog,
              RegisterData: RegisterData,
              posterdatas: posterdatas,
              isLoginUser: isLoginUser,
            });
          }}>
          <Text style={{fontSize: 40}}>登入</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Radiusstyle}
          onPress={() => {
            Actions.Register({
              handleAddRegisterData: handleAddRegisterData,
              RegisterData: RegisterData,
              posterdatas: posterdatas,
            });
          }}>
          <Text style={{fontSize: 40}}>註冊</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Radiusstyle: {
    margin: 10,
    padding: 8,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 40,
  },
});
