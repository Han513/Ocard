import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import unsave from './images/unsave.png';
import save from './images/save.png';
import ActionButton from 'react-native-action-button';
export default class HomePage extends Component {
  componentDidMount() {
    this.props.navigation.setParams({
      rightTitle: '追蹤',
      onRight: () => {
        Actions.FollowPost({
          posterdatas: this.props.posterdatas,
          datas: this.props.datas,
          isLog: this.props.isLog,
          isLoginUser: this.props.isLoginUser,
          typedatas: this.props.typedatas,
          handleAllpost: this.props.handleAllpost,
        });
      },
    });
  }

  render() {
    const {
      datas,
      handleSave,
      handleAllpost,
      posterdatas,
      isLog,
      isLoginUser,
      handleDeletePost,
    } = this.props;
    return (
      <>
        <ScrollView>
          {datas.map((data) => (
            <View style={styles.content} key={data.id}>
              <View style={styles.smallContent}>
                <View style={styles.first}>
                  <Text style={styles.typeName}>{data.type}</Text>
                  <Image
                    source={posterdatas[data.posterId - 1].posterImage}
                    style={styles.posterImage}
                  />
                  <Text style={styles.posterName}>
                    {posterdatas[data.posterId - 1].posterName}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.text}
                  onPress={() => handleAllpost(data.id)}>
                  <Text style={styles.Title}>{data.title}</Text>
                  <Text style={styles.subTitle} numberOfLines={1}>
                    {data.subTitle}
                  </Text>
                  <Text style={styles.publish}>{data.publish}</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  {isLog === false ? (
                    <View></View>
                  ) : (
                    <TouchableOpacity onPress={() => handleSave(data.id)}>
                      <Image
                        style={styles.saveImage}
                        source={data.marked ? save : unsave}
                      />
                    </TouchableOpacity>
                  )}
                  {isLog === true &&
                  isLoginUser[0].posterId === data.posterId ? (
                    <TouchableOpacity onPress={() => handleDeletePost(data.id)}>
                      <Image
                        style={styles.saveImage}
                        source={require('./images/trash.png')}
                      />
                    </TouchableOpacity>
                  ) : (
                    <View></View>
                  )}
                </View>
                {/* <Image style={styles.photo} source={{uri: data.photo}} /> */}
              </View>
            </View>
          ))}
        </ScrollView>
        <>
          {isLog === false ? (
            <View></View>
          ) : (
            <ActionButton
              buttonColor="rgba(231,76,60,1)"
              onPress={() => Actions.AddPostForm()}
            />
          )}
        </>
      </>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'white', //米白
    borderRadius: 5,
    marginVertical: 6,
    padding: 8,
    elevation: 5,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2,
  },
  smallContent: {
    textAlign: 'justify',
    flexDirection: 'column',
    padding: 5,
  },
  posterName: {
    fontSize: 17,
    fontWeight: 'bold',
    margin: 4,
    textAlign: 'center',
  },
  typeName: {
    fontSize: 12,
    color: 'grey',
    paddingRight: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  Title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#CD5C5C', //暗紅
  },
  subTitle: {
    fontSize: 20,
    color: 'grey',
    marginTop: 5,
  },
  photo: {
    width: 100,
    height: 100,
    alignItems: 'flex-end',
    borderRadius: 17,
  },
  publish: {
    fontSize: 12,
    color: 'grey',
    marginTop: 5,
  },
  posterImage: {
    width: 40,
    height: 40,
  },
  saveImage: {
    width: 20,
    height: 20,
  },
  text: {
    flex: 1,
  },
  first: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
  },
});
