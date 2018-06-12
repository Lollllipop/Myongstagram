import { 
  GET_POSTS,
  GET_RECENT_POSTS,
  GET_PRIOR_POSTS,
  GET_SEARCH_POSTS,
  CLEAR_REDUCER,
} from '../actions'; 

const initValue = {
  error: '',
  posts: [],
};

export default function(state = initValue, action) {
  switch(action.type) {
  case GET_POSTS:  
    var posts = action.data.posts.map((val, idx) => {
      return {
        id: val.id,
        username: val.username,
        userId: val.userId,
        content: val.content,
      }
    })
    return {                                                      
      error: '',
      posts: [...posts]
    };
  case GET_RECENT_POSTS:  
    var posts = action.data.posts.map((val, idx) => {
      return {
        id: val.id,
        username: val.username,
        userId: val.userId,
        content: val.content,
      }
    })
    return {                                                      
      error: '',
      posts: [...posts, ...state.posts] // 최근꺼이므로 앞에 이어서 붙임 계속
    };
  case GET_PRIOR_POSTS:  
    var posts = action.data.posts.map((val, idx) => {
      return {
        id: val.id,
        username: val.username,
        userId: val.userId,
        content: val.content,
      }
    })
    return {                                                      
      error: '',
      posts: [...state.posts, ...posts] // 최근꺼이므로 앞에 이어서 붙임 계속
    };
  case CLEAR_REDUCER: 
    return {                                                      
      error: '',
      posts: [],
    };
  default:
    return state;
  }
}