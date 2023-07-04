import React from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Picker} from '@react-native-picker/picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default class SelfNameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posterId: props.posterId,
      posterName: props.posterName,
    };
  }

  handleChangePosterName = (text) => {
    this.setState({
      posterName: text,
    });
  };

  handleEditPress = () => {
    const {handleEditName} = this.props;
    handleEditName(this.state.posterId, this.state.posterName);
    Actions.pop();
  };

  render() {
    const {posterName} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.label}>我的暱稱</Text>
          <TextInput
            value={posterName}
            onChangeText={this.handleChangePosterName}
            style={styles.textInput}
          />
        </View>

        <Button
          title="確定修改"
          //disabled={!title || !subTitle}
          onPress={this.handleEditPress}
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
