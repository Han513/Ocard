import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import follow from './images/follow.png';
import unfollow from './images/unfollow.png';

function IsBoard(props) {
  const {handleAddFollow, handleRedirectBoard} = props;
  const {typeId, typeName, typeImage, post, isFollow} = props.typedata;

  return (
    <View style={styles.allcontent}>
      <View style={styles.ImageContent}>
        <Image source={typeImage} style={styles.Image} />
      </View>
      <TouchableOpacity
        style={styles.content}
        onPress={() => handleRedirectBoard(typeId)}>
        <Text style={styles.typename}>{typeName}</Text>
        <TouchableOpacity onPress={() => handleAddFollow(typeId)}>
          <Image
            source={isFollow ? follow : unfollow}
            style={styles.ButtonUnFollowed}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}
export default IsBoard;

const styles = StyleSheet.create({
  ButtonUnFollowed: {
    width: 70,
    height: 30,
    borderRadius: 6,
    marginRight: 15,
  },
  ImageContent: {
    flex: 0.3,
    alignItems: 'center',
  },
  Image: {
    width: 50,
    height: 50,
  },
  allcontent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 2,
    marginVertical: 5,
    padding: 10,
    elevation: 5,
  },
  content: {
    flex: 0.7,
    width: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  typename: {
    color: '#804040',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
