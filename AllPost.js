import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import unsave from './images/unsave.png';
import save from './images/save.png';
import writing from './images/writing.png';

function AllPost(props) {
  const {
    posts,
    upDateData,
    handleSave,
    poster,
    posterdatas,
    logId,
    isLog,
    handleDeletePost,
  } = props;

  return (
    <ScrollView>
      <View style={styles.contenet}>
        <View style={styles.first}>
          <Text style={styles.typeName}>{posts[0].type}</Text>
          <Image source={poster[0].posterImage} style={styles.posterImage} />
          <Text style={styles.posterName}>{poster[0].posterName}</Text>

          <View>
            {isLog === false ? (
              <View></View>
            ) : (
              <TouchableOpacity onPress={() => handleSave(posts[0].id)}>
                <Image
                  style={styles.saveImage}
                  source={posts[0].marked ? save : unsave}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.text}>
          <Text style={styles.Title}>{posts[0].title}</Text>
          <Text style={styles.subTitle}>{posts[0].subTitle}</Text>
        </View>
        <Image style={styles.photo} source={{uri: posts[0].photo}} />
        <View>
          <Text style={styles.publish}>{posts[0].publish}</Text>
        </View>
        {isLog === true && posts[0].posterId === logId ? (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => upDateData(posts[0].id)}>
              <View style={styles.edit}>
                <Image source={writing} style={styles.posterImage} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeletePost(posts[0].id)}>
              <View style={styles.edit}>
                <Image
                  source={require('./images/trash.png')}
                  style={styles.posterImage}
                />
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    </ScrollView>
  );
}

export default AllPost;

const styles = StyleSheet.create({
  contenet: {
    backgroundColor: '#FFFFFF',
  },
  posterName: {
    fontSize: 17,
    margin: 3,
    paddingVertical: 3,
    textAlign: 'center',
  },
  typeName: {
    fontSize: 15,
    color: 'grey',
    paddingRight: 10,
    paddingVertical: 3,
    textAlign: 'left',
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
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  publish: {
    fontSize: 12,
    color: 'grey',
    marginTop: 5,
  },
  posterImage: {
    width: 50,
    height: 50,
  },
  saveImage: {
    width: 30,
    height: 30,
  },
  text: {
    flex: 1,
    alignItems: 'flex-start',
    margin: 10,
  },
  first: {
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  edit: {
    alignItems: 'flex-end',
    padding: 10,
  },
});
