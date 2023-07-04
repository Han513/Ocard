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
export default class SelfPost extends Component {
  render() {
    const {handleAllpost, posterdatas, MyselfPosts} = this.props;
    return (
      <>
        <ScrollView>
          {MyselfPosts.map((data) => (
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
                <View></View>
              </View>
            </View>
          ))}
        </ScrollView>
      </>
    );
  }
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
