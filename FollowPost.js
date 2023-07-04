import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import unsave from './images/unsave.png';
import save from './images/save.png';

export default function FollowPost(props) {
  const handleAllpost = props.handleAllpost;
  const handleSave = props.handleSave;
  const datas = props.datas;
  const isLog = props.isLog;
  const typedatas = props.typedatas;
  const posterdatas = props.posterdatas;
  const isLoginUser = props.isLoginUser;
  const followType = isLoginUser[0].follow;
  const followType1 = [];
  typedatas.forEach((typedata) => {
    if (followType.includes(typedata.typeId) === true) {
      followType1.push(typedata.typeName);
    }
    // return a;
  });

  const allFollowPosts = datas.filter((data) => {
    return followType1.includes(data.type) === true;
  });

  return (
    <>
      <ScrollView>
        {allFollowPosts.map((data) => (
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
              <TouchableOpacity
                style={styles.text}
                onPress={() => handleAllpost(data.id)}>
                <Text style={styles.Title}>{data.title}</Text>
                <Text style={styles.subTitle} numberOfLines={1}>
                  {data.subTitle}
                </Text>
                <Text style={styles.publish}>{data.publish}</Text>
              </TouchableOpacity>
              <View></View>
              {/* <Image style={styles.photo} source={{uri: data.photo}} /> */}
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    elevation: 5,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2,
  },
  smallContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    paddingVertical: 3,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  Title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#D9D19C',
  },
  subTitle: {
    fontSize: 20,
    color: 'grey',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
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
    width: 50,
    height: 50,
  },
  saveImage: {
    width: 30,
    height: 30,
  },
  text: {
    flex: 1,
    alignItems: 'baseline',
    margin: 10,
  },
  first: {
    alignItems: 'center',
    padding: 10,
  },
});
