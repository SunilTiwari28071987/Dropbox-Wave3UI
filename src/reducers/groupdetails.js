import * as Actions from "../actions/actions";
import {combineReducers} from 'redux';


function groupName(state = "", action){

    switch (action.type) {
        case Actions.SELECT_GROUP :
            return  action.groupName

        default :
            return state;

    }
}

function admin(state = "", action){

    switch (action.type) {
        case Actions.SELECT_GROUP :
            return  action.admin

        default :
            return state;

    }
}


function members(state = [], action){

    switch (action.type) {
        case Actions.SELECT_GROUP :
            return  action.members;

        case Actions.ADD_MEMBER :
            return  [ ...state,
                    {groupName: action.groupName,
                     email:action.email,
                     isDeleted: false
                    }
                    ]


        case Actions.DELETE_MEMBER :
            return state.map((member)=>member.email === action.email ?
            {...member,isDeleted:true} : member
        );

        default :
            return state;

    }
}



function files(state = [], action){

    switch (action.type) {
        case Actions.SELECT_GROUP :
            return  action.files;

        case Actions.UPLOAD_FILE_IN_GROUP :
            return  [ ...state,
                {   groupName:action.groupName,
                    filePath:action.filePath,
                    lastModified: Date.now(),
                    isFolder:false,
                    isShared: true,
                    isSelected:false,
                    isChecked:false,
                    isDeleted:false
                }
            ]


        case Actions.CREATE_SHARED_FOLDER_IN_GROUP :
            return  [ ...state,
                {   groupName:action.groupName,
                    filePath:action.filePath,
                    lastModified: Date.now(),
                    isFolder:true,
                    isShared: true,
                    isSelected:false,
                    isChecked:false,
                    isDeleted:false
                }
            ]


        case Actions.DELETE_FILE_FOLDER_IN_GROUP :
            return state.map((file)=>file.filePath === action.filePath ?
                {...file,isDeleted:true} : file
            );


        case Actions.CHECK_FILE_FOLDER_IN_GROUP :
            return state.map((file)=>file.filePath === action.filePath ?
                {...file,isChecked:true} : file
            );

        case Actions.SELECT_FOLDER_IN_GROUP :
            return state.map((file)=>file.filePath === action.filePath ?
                {...file,isSelected:true} : file
            );

        default :
            return state;

    }
}


const groupDetails = combineReducers({groupName,admin,members,files,files});
export default groupDetails;