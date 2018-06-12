import { 
  GET_USERS,
  GET_RECENT_USERS,
  GET_PRIOR_USERS,
  GET_SEARCH_USERS,
  CLEAR_REDUCER,
} from '../actions'; 

const initValue = {
  error: '',
  users: [],
};

export default function(state = initValue, action) {
  switch(action.type) {
  case GET_USERS:  
    var users = action.data.users.map((val, idx) => {
      return {
        id: val.id,
        username: val.username
      }
    })
    return {                                                      
      error: '',
      users: [...users] // 뒤에 이어서 붙임 계속
    };
  case GET_RECENT_USERS:  
    var users = action.data.users.map((val, idx) => {
      return {
        id: val.id,
        username: val.username
      }
    })
    return {                                                      
      error: '',
      users: [...users, ...state.users] // 최근꺼이므로 앞에 이어서 붙임 계속
    };
  case GET_PRIOR_USERS:  
    var users = action.data.users.map((val, idx) => {
      return {
        id: val.id,
        username: val.username
      }
    })
    return {                                                      
      error: '',
      users: [...state.users, ...users] // 최근꺼이므로 앞에 이어서 붙임 계속
    };
  case GET_SEARCH_USERS:  
    var users = action.data.users.map((val, idx) => {
      return {
        id: val.id,
        username: val.username
      }
    })
    return {                                                      
      error: '',
      users: [...users] // 키워드 없으면 다시 가장 최근거 10개 가져오도록 만들 것
    };
  case CLEAR_REDUCER: 
    return {                                                      
      error: '',
      users: [],
    };
  default:
    return state;
  }
}