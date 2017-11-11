import {combineReducers} from 'redux';
import UserDetailsReducer from './userdetails';
import GroupDetailsReducer from './groupdetails';
import FolderDetailsReducer from './folderdetails';
import {getPath, getEmail} from './userdetails'

const rootReducer = combineReducers({UserDetailsReducer,GroupDetailsReducer,FolderDetailsReducer});
export default rootReducer;


export const getUserHomePath = (state)=> getPath(state.UserDetailsReducer)

export const getUserEmail = (state) => getEmail(state.UserDetailsReducer)
