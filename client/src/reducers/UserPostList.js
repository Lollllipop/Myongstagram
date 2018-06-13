import { 
  GET_USER_POSTS,
  CLEAR_REDUCER,
} from '../actions'; 

const initValue = {
  error: '',
  posts: [],
};

export default function(state = initValue, action) {
  switch(action.type) {
  case GET_USER_POSTS:  
    var posts = action.data.posts.map((val, idx) => {
      return {
        id: val.id,
        content: val.content,
        createdAt: val.createdAt,
      }
    })
    return {                                                      
      error: '',
      posts: [...posts]
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