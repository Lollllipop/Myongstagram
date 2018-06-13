import { combineReducers } from 'redux';

import MyProfileReducer from './MyProfile';
import SearchListReducer from './SearchList';
import PostListReducer from './PostList';
import UserPostListReducer from './UserPostList';
import MyPostListReducer from './MyPostList';

const rootReducer = combineReducers({                     
  MyProfileReducer: MyProfileReducer,
  SearchListReducer: SearchListReducer,
  PostListReducer: PostListReducer,
  UserPostListReducer: UserPostListReducer,
  MyPostListReducer: MyPostListReducer,
});

export default rootReducer;