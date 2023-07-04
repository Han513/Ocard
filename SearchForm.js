//npm install react-native-elements
//npm install react-native-vector-icons
//react-native link react-native-vector-icons

import {SearchBar} from 'react-native-elements';
import React from 'react';
import {StyleSheet, TouchableOpacity, View, ScrollView} from 'react-native';
import SearchList from './SearchList';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      slist: [],
      flag: false,
    };
  }

  updateSearch = (search) => {
    const {slist} = this.state;
    const {datas, posterdatas} = this.props;
    slist.length = 0;
    let tempID = 0;
    posterdatas.map((data) => {
      if (data.posterName.toLowerCase() === search.toLowerCase()) {
        tempID = data.posterId;
      }
    });
    datas.map((data) => {
      let tempStr = data.title;
      let regExp = new RegExp(search, 'gmi');
      let temp = slist.includes(data);
      let regTest = regExp.test(tempStr);
      if (
        (regExp.test(tempStr) === true && temp != true) ||
        (data.posterId === tempID && temp != true)
      ) {
        slist.push(data);
      }
    });

    if (search !== '') {
      this.setState({search, flag: true});
    } else {
      this.setState({search, flag: false, slist: []});
    }
  };

  clearSearch = () => {
    this.setState({slist: [], flag: false});
  };

  render() {
    const {search, slist, flag} = this.state;
    const {datas, handleSave, handleAllpost, posterdatas, isLog} = this.props;
    return (
      <View style={{flex: 1}}>
        <SearchBar
          placeholder="此處輸入..."
          onChangeText={this.updateSearch}
          value={search}
          inputStyle={{color: '#FFFFFF'}}
          onClear={this.clearSearch}
        />
        <ScrollView>
          <TouchableOpacity style={styles.todoItems}>
            {flag === true ? (
              <SearchList
                datas={slist}
                handleSave={handleSave}
                handleAllpost={handleAllpost}
                posterdatas={posterdatas}
                isLog={isLog}
              />
            ) : (
              <View></View>
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  todoItems: {
    marginHorizontal: 10,
  },
});
