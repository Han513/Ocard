import React from 'react';
import {Router, Stack, Scene, Tabs, Actions} from 'react-native-router-flux';
import HomePage from './HomePage';
import AllPost from './AllPost';
import Self from './Self';
import Board from './Board';
import BoardDetail from './BoardDetail';
import typedata from './data/typedata';
import posterdata from './data/posterdata';
import data from './data/data';
import PersonalForm from './PersonalForm';
import AddPostForm from './AddPostForm';
import FollowPost from './FollowPost';
import RegisterData from './data/RegisterData';
import LogInterface from './LogInterface';
import LogIn from './LogIn';
import Register from './Register';
import UpdatePostForm from './UpdatePostForm';
import SelfMark from './SelfMark';
import SelfPost from './SelfPost';
import SelfNameForm from './SelfNameForm';
import Icon from 'react-native-vector-icons/FontAwesome';
import chick from './images/chick.png';
import SearchForm from './SearchForm';
import {launchImageLibrary} from 'react-native-image-picker';
const TabIcon = (props) => (
  <Icon
    name={props.iconName}
    color={props.selected ? '#0000000' : '#808080'}
    size={30}
  />
);
var index = 0;
class Routes extends React.Component {
  constructor(props) {
    super(props);
    // const isLoginUser = [{a: 0}];
    this.state = {
      datas: data,
      posterdatas: posterdata,
      typedatas: typedata,
      routerkey: 'root',
      RegisterData: RegisterData,
      isLoginUser: [
        {
          posterId: 7,
          posterName: 'Chick',
          posterImage: chick,
          follow: [],
          mymark: [],
        },
      ],
      isRegisterUser: [],
      key: 'root',
      isLog: false,
      logId: 7,
      count: 10,
    };
  }

  handleUpdate = (post) => {
    const newDatas = this.state.datas.map((data) => {
      return data.id === post.id
        ? {
            ...data,
            type: post.type,
            title: post.title,
            subTitle: post.subTitle,
          }
        : {...data};
    });
    this.setState({
      datas: newDatas,
    });
  };
  upDateData = (id) => {
    const updatePost = this.state.datas.find((data) => id === data.id);
    Actions.push('UpdatePostForm', {
      updatePost: updatePost,
      handleUpdate: this.handleUpdate,
    });
  };
  postCount = (posterId) => {
    const {datas} = this.state;
    let count = 0;
    datas.map((d) => {
      if (d.posterId === posterId) {
        count += 1;
      }
    });
    return count;
  };
  //算這個人發的文章全部愛心數
  postLikeCount = (posterId) => {
    const {datas} = this.state;
    let count = 0;
    datas.map((d) => {
      if (d.marked === true) {
        count += 1;
      }
    });
    return count;
  };

  //看板追蹤動作
  handleAddFollow = (typeId) => {
    const isLoginUser = this.state.isLoginUser;
    const newTypes = this.state.typedatas.map((typedata) => {
      return typedata.typeId === typeId
        ? {...typedata, isFollow: !typedata.isFollow}
        : typedata;
    });

    this.state.typedatas.forEach((typedata) => {
      if (typedata.typeId === typeId) {
        var ifexist = isLoginUser[0].follow.includes(typedata.typeId);
        if (!ifexist) {
          isLoginUser[0].follow.push(typedata.typeId);
        } else {
          index = isLoginUser[0].follow.indexOf(typedata.typeId);
          isLoginUser[0].follow.splice(index, 1);
        }
      }
    });
    this.setState({
      posterdatas: this.state.posterdatas.map((posterdata) => {
        return posterdata.posterId === this.state.logId
          ? {
              ...posterdata,
              follow: isLoginUser[0].follow,
            }
          : {...posterdata};
      }),
      typedatas: newTypes,
    });
  };

  //看板點入詳細文章動作
  handleRedirectBoard = (typeId) => {
    const {typedatas, datas, posterdatas} = this.state;
    const typedata = typedatas.find((typedata) => typedata.typeId === typeId);
    const boarddatas = datas.filter((data) => data.type === typedata.typeName);

    Actions.push('BoardDetail', {
      boarddatas: boarddatas,
      posterdatas: posterdatas,
    });
  };
  //登出鍵
  logOut = () => {
    const {datas, posterdatas, logId} = this.state;
    const typedatas = this.state.typedatas;
    const mymark = [];
    const follow = [];
    datas.forEach((data) => {
      if (data.marked === true) {
        mymark.push(data.id);
      }
    });
    typedatas.forEach((typedata) => {
      if (typedata.isFollow === true) {
        follow.push(typedata.typeId);
      }
    });
    const newDatas = posterdatas.map((posterdata) => {
      return posterdata.posterId === logId
        ? {
            ...posterdata,
            follow: follow,
            mymark: mymark,
          }
        : {...posterdata};
    });
    const newDatas1 = datas.map((data) => {
      return data.marked === true
        ? {
            ...data,
            marked: false,
          }
        : {...data};
    });
    const newDatas2 = typedatas.map((typedata) => {
      return {
        ...typedata,
        isFollow: false,
      };
    });

    this.setState({
      isLoginUser: [
        {
          posterId: 7,
          posterName: 'Chick',
          posterImage: chick,
          follow: [],
          mymark: [],
        },
      ],
      posterdatas: newDatas,
      typedatas: newDatas2,
      datas: newDatas1,
      isLog: false,
      logId: '',
    });

    console.log('登出');
    Actions.Self();
  };

  handleChangeIsLog = (flag, id) => {
    const {datas, posterdatas, logId, RegisterData, typedatas} = this.state;
    const newDatas4 = posterdatas[id - 1].follow;
    const newDatas2 = typedatas.map((typedata) => {
      return newDatas4.includes(typedata.typeId) === true
        ? {
            ...typedata,
            isFollow: true,
          }
        : {...typedata, isFollow: false};
    });
    this.setState({
      typedatas: newDatas2,
    });
    const isLoginUser = posterdatas.filter((posterdata) => {
      return posterdata.posterId === id;
    });
    const isRegisterUser = RegisterData.filter((Registers) => {
      return Registers.posterId === id;
    });

    if (flag === true) {
      this.setState({
        isLog: true,
        logId: id,
        isLoginUser: isLoginUser,
        isRegisterUser: isRegisterUser,
      });
      Actions.Self();
      console.log('登入成功' + id);
    }
    const follow = isLoginUser[0].follow;
    const mymark = isLoginUser[0].mymark;
    const newDatas1 = datas.map((data) => {
      return mymark.includes(data.id) === true
        ? {
            ...data,
            marked: true,
          }
        : {...data};
    });

    this.setState({datas: newDatas1});
  };

  handleAddRegisterData = (data) => {
    const {RegisterData, posterdatas} = this.state;
    const newdatas = [
      ...RegisterData,
      {
        posterId: RegisterData.length + 1,
        setDate:
          new Date().getFullYear() + '/' + parseInt(new Date().getMonth() + 1),
        ...data,
      },
    ];
    const newdatas1 = [
      ...posterdatas,
      {
        posterId: posterdatas.length + 1,
        posterName: data.posterName,
        posterImage: require('./images/self.png'),
        follow: [],
        mymark: [],
      },
    ];

    this.setState({
      RegisterData: newdatas,
      posterdatas: newdatas1,
    });
  };
  //收藏
  handleSave = (typeId) => {
    const newdatas = this.state.datas.map((data) => {
      return data.id === typeId ? {...data, marked: !data.marked} : data;
    });
    this.setState({
      datas: newdatas,
    });
  };

  // handleMyMarked = (id) => {};

  //點進看到完整文章
  handleAllpost = (id) => {
    const datas = this.state.datas;
    const posterdatas = this.state.posterdatas;

    const posts = datas.filter((data) => data.id === id);
    const {isLog, logId} = this.state;
    const poster = posterdatas.filter((poster) => {
      return poster.posterId === posts[0].posterId;
    });

    Actions.push('AllPost', {
      posts: posts,
      poster: poster,
      posterdatas: posterdatas,
      upDateData: this.upDateData,
      handleSave: this.handleSave,
      handleDeletePost: this.handleDeletePost,
      isLog: isLog,
      logId: logId,
    });
  };

  handleAddPost = (post) => {
    const {logId, count} = this.state;

    this.setState({
      datas: [
        ...this.state.datas,
        {
          id: count + 1,
          posterId: logId,
          ...post,
        },
      ],
      count: count + 1,
    });
  };
  handleDeletePost = (id) => {
    const data = this.state.datas;
    this.setState({datas: data.filter((data) => data.id !== id)});
  };
  //圖片
  handleChoosePhoto = (posterId) => {
    let flag = false;
    const {isLoginUser} = this.state;

    isLoginUser.map((data) => {
      if (data.posterId == posterId) {
        flag = true;
      }
    });
    const option = {
      noData: true,
    };

    launchImageLibrary(option, (response) => {
      if (response.uri) {
        if (flag === true) {
          const newisLoginUser = isLoginUser.map((data) => {
            return data.posterId === posterId
              ? {...data, uri: response.uri}
              : data;
          });
          this.setState({isLoginUser: newisLoginUser});
        } else {
          this.setState({
            isLoginUser: [
              ...isLoginUser,
              {
                posterId: posterId,
                uri: response.uri,
                posterName: '',
                posterImage: '',
                follow: [],
                mymark: [],
              },
            ],
          });
        }
      }
    });
  };

  handleEditName = (posterId, posterName) => {
    const {posterdatas, RegisterData, isLoginUser} = this.state;
    const newPosterdatas = posterdatas.map((data) => {
      return data.posterId === posterId
        ? {...data, posterName: posterName}
        : data;
    });
    const newRegisterData = RegisterData.map((data) => {
      return data.posterId === posterId
        ? {...data, posterName: posterName}
        : data;
    });
    this.setState({
      posterdatas: newPosterdatas,
      RegisterData: newRegisterData,
      isLoginUser: [{...isLoginUser[0], posterName: posterName}],
    });
  };

  render() {
    const {
      typedatas,
      posterdatas,
      datas,
      isLoginUser,
      isLog,
      RegisterData,
      logId,
      isRegisterUser,
    } = this.state;

    const MyselfMarkedPosts = datas.filter((data) => {
      return data.marked === true;
    });
    const MyselfPosts = datas.filter((data) => {
      return data.posterId === logId;
    });
    return (
      <Router>
        <Tabs
          headerLayoutPreset="center"
          tabBarOnPress={(props) => {
            props.navigation.navigate(props.navigation.state.key);
            this.setState({key: props.navigation.state.key});
          }}>
          <Stack
            key="root"
            headerLayoutPreset="center"
            title="首頁"
            iconName={'home'}
            navigationBarStyle={{
              backgroundColor: '#005AB5',
              Color: '#FFFFFF',
            }}
            icon={TabIcon}
            titleStyle={{color: '#FFFFFF'}}
            RegisterData={RegisterData}>
            <Scene
              key="HomePage"
              datas={datas}
              posterdatas={posterdatas}
              handleSave={this.handleSave}
              handleAllpost={this.handleAllpost}
              handleDeletePost={this.handleDeletePost}
              component={HomePage}
              isLoginUser={isLoginUser}
              title="首頁"
              typedatas={typedatas}
              isLog={isLog}
              initial={this.state.key === 'root'}
            />
            <Scene
              key="AllPost"
              title="文章資訊"
              component={AllPost}
              handleSave={this.handleSave}
              isLog={isLog}
              back
              initial={this.state.key === 'AllPost'}
            />
            <Scene
              key="BoardDetail"
              title="文章"
              component={BoardDetail}
              back
              initial={this.state.key === 'BoardDetail'}
            />

            <Scene
              key="PersonalForm"
              component={PersonalForm}
              title="我的紀錄"
              back
            />
            <Scene
              key="AddPostForm"
              component={AddPostForm}
              handleAddPost={this.handleAddPost}
              title="新增文章"
              back
            />
            <Scene
              key="FollowPost"
              isLoginUser={isLoginUser}
              component={FollowPost}
              handleAllpost={this.handleAllpost}
              handleSave={this.handleSave}
              title="追隨"
              back
            />

            <Scene
              key="LogInterface"
              component={LogInterface}
              title="登入介面"
              handleAddRegisterData={this.handleAddRegisterData}
              RegisterData={RegisterData}
              handleChangeIsLog={this.handleChangeIsLog}
              initial={this.state.key === 'LogInterface'}
              back
            />
            <Scene
              key="SelfNameForm"
              component={SelfNameForm}
              title="我的暱稱"
              back
            />
            <Scene
              key="Register"
              component={Register}
              RegisterData={RegisterData}
              title="註冊"
              back
            />
            <Scene
              key="LogIn"
              component={LogIn}
              RegisterData={RegisterData}
              title="登入"
              back
            />
            <Scene
              key="UpdatePostForm"
              component={UpdatePostForm}
              title="修改文章"
              back
            />

            <Scene
              key="SelfMark"
              component={SelfMark}
              title="我的收藏文章"
              MyselfMarkedPosts={MyselfMarkedPosts}
              posterdatas={posterdatas}
              handleSave={this.handleSave}
              handleAllpost={this.handleAllpost}
              initial={this.state.key === 'SelfMark'}
              back
            />
            <Scene
              key="SelfPost"
              component={SelfPost}
              title="我的發表文章"
              MyselfPosts={MyselfPosts}
              posterdatas={posterdatas}
              handleSave={this.handleSave}
              handleAllpost={this.handleAllpost}
              initial={this.state.key === 'SelfPost'}
              back
            />
          </Stack>

          <Scene
            key="SearchForm"
            datas={datas}
            posterdatas={posterdatas}
            handleSave={this.handleSave}
            handleAllpost={this.handleAllpost}
            component={SearchForm}
            isLoginUser={isLoginUser}
            title="搜尋"
            iconName={'search'}
            icon={TabIcon}
            leftTitle=""
            isLog={isLog}
            onLeft={() => {}}
            initial={this.state.key === 'SearchForm'}
            hideNavBar
          />
          <Scene
            posterdatas={posterdatas}
            isLoginUser={isLoginUser}
            handleAddFollow={this.handleAddFollow}
            handleRedirectBoard={this.handleRedirectBoard}
            typedatas={typedatas}
            key="Board"
            component={Board}
            title="看板"
            titleStyle={{color: '#FFFFFF'}}
            navigationBarStyle={{backgroundColor: '#005AB5', color: '#FFFFFF'}}
            iconName={'bars'}
            icon={TabIcon}
            initial={this.state.key === 'Board'}
          />

          <Scene
            key="Self"
            component={Self}
            title="個人頁面"
            titleStyle={{color: '#FFFFFF'}}
            navigationBarStyle={{backgroundColor: '#005AB5', color: '#FFFFFF'}}
            iconName={'user'}
            icon={TabIcon}
            postCount={this.postCount}
            postLikeCount={this.postLikeCount}
            logOut={this.logOut}
            isLog={isLog}
            initial={this.state.key === 'Self'}
            logId={logId}
            RegisterData={RegisterData}
            isLoginUser={isLoginUser}
            isRegisterUser={isRegisterUser}
            MyselfMarkedPosts={MyselfMarkedPosts}
            MyselfPosts={MyselfPosts}
            posterdatas={posterdatas}
            datas={datas}
            handleAllpost={this.handleAllpost}
            handleChoosePhoto={this.handleChoosePhoto}
            handleEditName={this.handleEditName}
          />
        </Tabs>
      </Router>
    );
  }
}

export default Routes;
