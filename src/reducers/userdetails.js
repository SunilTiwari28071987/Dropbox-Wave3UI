import * as Actions from "../actions/actions";
import {combineReducers} from 'redux';


function userProfile(state = {}, action){

    switch (action.type) {
        case Actions.SIGN_IN :
            return  {firstName: action.firstName,
                    lastName: action.lastName,
                    email:action.email,
                    age: action.age,
                    gender:action.gender,
                    password:action.password
            }

        default :
            return state;

    }
}


export const getPath = (state) => {
    console.log("Printing userdetails")
    console.log(state)
   return  "./public/uploads"
}

export const getEmail = (state) => {
    console.log("Printing email")
    console.log(state)
    return  state.userProfile.email
}

export const getUsername = (state) => {

    console.log(state)
    console.log(state.userProfile.firstName)
    return state.userProfile.firstName + " " + state.userProfile.lastName

}

function files (state = [], action) {

    switch (action.type) {

        case Actions.SIGN_IN :
            return action.files

        case Actions.UPLOAD_FILE :
            return [
                ...state,
                {   fileName:action.fileName,
                    filePath:action.filePath,
                    lastModified: Date.now(),
                    isAdmin: true,
                    isStared:false,
                    isFolder:false,
                    isShared: false,
                    isSelected:false,
                    isChecked:false,
                    isDeleted:false
                }
            ]

        case Actions.CREATE_FOLDER :
            return [
                ...state,
                {   fileName:action.folderName,
                    filePath:action.filePath,
                    lastModified: Date.now(),
                    isAdmin: true,
                    isStared:false,
                    isFolder:true,
                    isShared: false,
                    isSelected:false,
                    isChecked:false,
                    isDeleted:false
                }
            ]

        case Actions.CREATE_SHARED_FOLDER :
            return [
                ...state,
                {   fileName:action.folderName,
                    filePath:action.filePath,
                    lastModified: Date.now(),
                    isAdmin: true,
                    isStared:false,
                    isFolder:true,
                    isShared: true,
                    isSelected:false,
                    isChecked:false,
                    isDeleted:false
                }
            ]

        case Actions.DELETE_FILE_FOLDER :
            return state.map((file)=>file.filePath === action.filePath ?
                {...file,isDeleted:true} : file
            );


        case Actions.STAR_FILE_FOLDER :
            return state.map((file)=>file.filePath === action.filePath ?
                {...file,isStared:true} : file
            );


        case Actions.UNSTAR_FILE_FOLDER :
            return state.map((file)=>file.filePath === action.filePath ?
                {...file,isStared:false} : file
            );


        case Actions.SHARE_FILE_FOLDER :
            console.log(state)
            return state.map((file)=> file.filePath === action.filePath ?
                    {...file, isShared: true} : file
            );


        case Actions.CHECK_FILE_FOLDER :
            return state.map((file)=>file.filePath === action.filePath ?
                {...file,isChecked:true} : file
            );

        case Actions.SELECT_FOLDER :
            return state.map((file)=>file.filePath === action.filePath ?
                {...file,isSelected:true} : file
            );

        default :
            return state;

    }
}




function groups (state = [], action) {

    switch (action.type) {

        case Actions.SIGN_IN :
            return action.groups

        case Actions.CREATE_GROUP :
            return [
                ...state,
                { groupName:action.groupName, isDeleted:false}
            ]

        case Actions.DELETE_GROUP :
            return state.map((group)=>group.groupName === action.groupName ?
                {...group,isDeleted:true} : group
            );

        default :
            return state;

    }
}


const userDetails = combineReducers({userProfile,files,groups});
export default userDetails;



