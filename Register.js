//posterId email passwords realName posterName setDate
import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      passwords: null,
      passwords2: null,
      realName: null,
      posterName: null,
    };
  }
  componentDidMount() {
    this.props.navigation.setParams({
      rightTitle: 'Save',
      onRight: this.handleAddPress,
    });
  }

  handleAddPress = () => {
    const {handleAddRegisterData, RegisterData} = this.props;
    const {passwords, passwords2, email} = this.state;
    let newEmail = email.toLowerCase();
    var mailProof = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let emailFlag = mailProof.test(newEmail);
    let passwordsFlag = passwords.length;
    let flag = true;
    RegisterData.map((data) => {
      if (data.email === email) {
        flag = false;
      }
    });
    if (passwords !== passwords2) {
      alert('請重新確認密碼');
      this.setState({passwords2: null});
    } else if (flag === false) {
      alert('重複的電子信箱，請重新輸入');
      this.setState({email: null});
    } else if (emailFlag === false) {
      alert('電子信箱格式錯誤，請重新輸入');
    } else if (passwordsFlag < 6) {
      alert('密碼長度不及六字元，請重新輸入');
      this.setState({passwords: null, passwords2: null});
    } else {
      Actions.Self();
      handleAddRegisterData(this.state);
      this.setState({
        email: null,
        passwords: null,
        passwords2: null,
        realName: null,
        posterName: null,
      });
      alert('註冊成功');
    }
  };

  handleChangeEmail = (text) => {
    this.setState({email: text});
  };

  handleChangePasswords = (text) => {
    this.setState({passwords: text});
  };

  handleChangePasswords2 = (text) => {
    this.setState({passwords2: text});
  };

  handleChangeRealName = (text) => {
    this.setState({realName: text});
  };

  handleChangePosterName = (text) => {
    this.setState({posterName: text});
  };

  render() {
    const {email, passwords, passwords2, realName, posterName} = this.state;
    return (
      <View>
        <View style={styles.item}>
          <Text style={styles.label}>電子信箱</Text>
          <TextInput
            value={email}
            onChangeText={this.handleChangeEmail}
            placeholder="請輸入電子信箱"
            style={styles.textInput}
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>密碼</Text>
          <TextInput
            value={passwords}
            onChangeText={this.handleChangePasswords}
            placeholder="請輸入密碼(至少六個字元)"
            style={styles.textInput}
            secureTextEntry
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>再次輸入密碼</Text>
          <TextInput
            value={passwords2}
            onChangeText={this.handleChangePasswords2}
            placeholder="請再次輸入密碼"
            style={styles.textInput}
            secureTextEntry
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>真實名字</Text>
          <TextInput
            value={realName}
            onChangeText={this.handleChangeRealName}
            placeholder="請輸入真實名字"
            style={styles.textInput}
          />
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>匿名</Text>
          <TextInput
            value={posterName}
            onChangeText={this.handleChangePosterName}
            placeholder="請輸入匿名名稱"
            style={styles.textInput}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  item: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    marginLeft: 15,
  },
});
