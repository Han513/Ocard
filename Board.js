import React from 'react';
import {StyleSheet, View, ScrollView, Text, Dimensions} from 'react-native';
import IsBoard from './IsBoard';
import IsFollow from './IsFollow';

// var index1 = 0;
function Board(props) {
  const {
    posterdatas,
    typedatas,
    handleAddFollow,
    handleRedirectBoard,
    logId,
    isLoginUser,
  } = props;
  // 2021/1/7
  const followdata = typedatas.filter((typedata) => {
    return isLoginUser[0].follow.includes(typedata.typeId);
  });

  return (
    <ScrollView>
      <Text style={styles.title}>追蹤的看板</Text>

      <View>
        {followdata.map((isFollow) => (
          <IsFollow
            key={isFollow.typeId}
            isFollow={isFollow}
            handleAddFollow={handleAddFollow}
            handleRedirectBoard={handleRedirectBoard}
          />
        ))}
      </View>

      <Text style={styles.title}>為您推薦</Text>
      <View>
        {typedatas.map((typedata) => (
          <IsBoard
            key={typedata.typeId}
            followdata={followdata}
            typedata={typedata}
            handleAddFollow={handleAddFollow}
            handleRedirectBoard={handleRedirectBoard}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default Board;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#000000',
    borderBottomWidth: 2,
  },
});
