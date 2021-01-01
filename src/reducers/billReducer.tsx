import { CREATE_NEW_BILL_REQUEST } from "constants";

export const initialState: IBillStore ={
  imBusy:false,
  imWithError:false,
  errorMsg:''
}

const billReducer =(state, action)=> {
  switch (action.type) {
    case CREATE_NEW_BILL_REQUEST:
    return {
      ...state,
      bill:state.imBusy
    }
      
      break;
  
    default:
      break;
  }
}

export default billReducer