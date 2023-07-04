import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

function IsFollow(props) {
  const {handleRedirectBoard} = props;
  const {typeId, typeName, typeImage} = props.isFollow;
  return (
    <TouchableOpacity
      style={styles.allcontent}
      onPress={() => handleRedirectBoard(typeId)}>
      <View style={styles.ImageContent}>
        <Image source={typeImage} style={styles.Image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.typename}>{typeName}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default IsFollow;

const styles = StyleSheet.create({
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
