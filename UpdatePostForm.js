import React from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Picker} from '@react-native-picker/picker';
import {launchImageLibrary} from 'react-native-image-picker';
export default class UpdatePostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.updatePost.id,

      type: props.updatePost.type,

      title: props.updatePost.title,

      subTitle: props.updatePost.subTitle,
    };
  }

  handleChangeType = (value) => {
    this.setState({
      type: value,
    });
  };

  handleChangeTitle = (text) => {
    this.setState({
      title: text,
    });
  };

  handleChangeSubTitle = (text) => {
    this.setState({
      subTitle: text,
    });
  };

  handleAddPress = () => {
    const {handleUpdate} = this.props;
    handleUpdate(this.state);
    Actions.pop();
  };

  handleOpenImageLibrary = () => {
    launchImageLibrary({}, this.handleSelectMealImage);
  };

  render() {
    const {type, title, subTitle} = this.state;

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
          title="確定修改"
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
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#326394',
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
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: 15,
    textAlign: 'center',
    fontSize: 16,
  },
});
