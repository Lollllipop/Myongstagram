import { 
  SIGN_UP
} from '../actions'; 

const initValue = {
  error: '',
  username: '',
  email: ''
};

export default function(state=initValue, action) {
  switch(action.type) {
  case SIGN_UP:  
    return {                                                           
      error: '',
      username: action.data.username,
      email: action.data.email
    };
  default:
    return state;
  }
}