import React from 'react';
import {StyleSheet, View, Switch, TextInput, Button, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Picker} from '@react-native-picker/picker';
export default class AddPostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 初始待辦類型
      type: 'Movie',
      // 初始待辦標題
      title: null,
      // 待辦備註
      subTitle: null,
      // 待辦是否完成
    };
  }

  // 變更待辦類型的選取值
  handleChangeType = (value) => {
    this.setState({
      type: value,
    });
  };

  // 變更待辦標題的文字
  handleChangeTitle = (text) => {
    this.setState({
      title: text,
    });
  };

  // 變更待辦備註的文字
  handleChangeSubTitle = (text) => {
    this.setState({
      subTitle: text,
    });
  };

  // 新增待辦按鈕點擊時觸發的 Callback 事件
  handleAddPress = () => {
    const {handleAddPost} = this.props;
    // 返回前一個頁面
    Actions.pop();
    // 呼叫子元件所傳入的事件並將表單的輸入內容帶入參數回傳回去
    handleAddPost(this.state);
    // 新增待辦事項後將表單設定回到初始預設值
    this.setState({
      type: 'Movie',
      title: null,
      subTitle: null,
      completed: false,
    });
  };

  render() {
    const {type, title, subTitle, completed} = this.state;

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.item}>
            <Text style={styles.label}>待辦類型</Text>
            <Picker
              selectedValue={type}
              onValueChange={this.handleChangeType}
              style={styles.picker}>
              <Picker.Item label="電影" value="Movie" />
              <Picker.Item label="化妝品" value="Cosmetic" />
              <Picker.Item label="卡通" value="Comic" />
              <Picker.Item label="學校" value="School" />
              <Picker.Item label="遊戲" value="Game" />
            </Picker>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>主題</Text>
            <TextInput
              value={title}
              onChangeText={this.handleChangeTitle}
              style={styles.textInput}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>內容</Text>
            <TextInput
              value={subTitle}
              onChangeText={this.handleChangeSubTitle}
              style={styles.textInput}
            />
          </View>
        </View>
        <Button
          title="新增主題"
          disabled={!title || !subTitle}
          onPress={this.handleAddPress}
        />
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
  picker: {
    width: 150,
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    marginLeft: 15,
  },
  switch: {
    marginLeft: 10,
  },
});
