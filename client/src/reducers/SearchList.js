import { 
  GET_USERS,
  CLEAR_REDUCER
} from '../actions'; 

const initValue = {
  error: '',
  users: [],
};

export default function(state = initValue, action) {
  switch(action.type) {
  case GET_USERS:  
    const users = action.data.users.map((val, idx) => {
      return {
        // key: val, // username이 차피 유니크한 값이기 때문에 key로 작용 가능 key는 string 형태로 넘겨줘야 함
        username: val
      }
    })
    return {                                                      
      error: '',
      users: [...state.users, ...users] // 뒤에 이어서 붙임 계속
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