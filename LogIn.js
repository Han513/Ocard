import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      passwords: null,
    };
  }
  componentDidMount() {
    this.props.navigation.setParams({
      rightTitle: 'Log In',
      onRight: this.isSuccessData,
    });
  }

  isSuccessData = () => {
    const {handleChangeIsLog, RegisterData} = this.props;
    const {email, passwords} = this.state;
    let newEmail = email.toLowerCase();
    var mailProof = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let emailFlag = mailProof.test(newEmail);
    let flag = false;
    let posterid = null;
    RegisterData.map((data) => {
      if (data.email == email && data.passwords == passwords) {
        flag = true;
        posterid = data.posterId;
      }
    });

    if (flag === false) {
      alert('信箱或密碼錯誤');
    } else if (emailFlag === false) {
      alert('電子信箱格式錯誤，請重新輸入');
    } else {
      handleChangeIsLog(true, posterid);
    }
  };

  handleChangeEmail = (text) => {
    this.setState({email: text});
  };

  handleChangePasswords = (text) => {
    this.setState({passwords: text});
  };

  render() {
    const {email, passwords} = this.state;
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
            placeholder="請輸入密碼"
            style={styles.textInput}
            secureTextEntry
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
