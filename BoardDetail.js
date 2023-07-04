import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  Text,
  ScrollView,
} from 'react-native';
import posterdata from './data/posterdata';
import typedata from './data/typedata';

function BoardDetail(props) {
  const boarddatas = props.boarddatas;
  const posterdatas = props.posterdatas;

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJ2IEP0mFNEYGT3718e9z-p68mD5F5wg4jg&usqp=CAU',
        }}
      />
      {boarddatas.map((boarddata) => (
        <View style={styles.content} key={boarddata.id}>
          <View style={styles.smallContent}>
            <View style={styles.first}>
              <Image
                source={posterdatas[boarddata.posterId - 1].posterImage}
                style={styles.posterImage}
              />
              <Text style={styles.posterName}>
                {posterdatas[boarddata.posterId - 1].posterName}
              </Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.Title}>{boarddata.title}</Text>
              <Text style={styles.subTitle}>{boarddata.subTitle}</Text>
              <Text style={styles.publish}>{boarddata.publish}</Text>
            </View>
            <Image style={styles.photo} source={{uri: boarddata.photo}} />
          </View>
        </View>
      ))}
    </ScrollView>
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
    fontSize: 15,
    paddingVertical: 3,
    textAlign: 'center',
  },
  Title: {
    fontSize: 25, //
    fontWeight: 'bold',
    color: '#D9D19C',
  },
  subTitle: {
    fontSize: 20,
    color: 'grey',
    margin: 5,
  },
  photo: {
    width: 100,
    height: 100,
    alignItems: 'flex-end',
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
  text: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  first: {
    alignItems: 'center',
    padding: 10,
  },
});

export default BoardDetail;
