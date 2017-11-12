import * as Actions from "../actions/actions";
import {combineReducers} from 'redux';


function filePath(state = "", action){

    switch (action.type) {
        case Actions.SELECT_FOLDER :
        case Actions.SELECT_FOLDER_IN_GROUP :
            return  action.filePath

        default :
            return state;

    }
}

function files(state = [], action){

    switch (action.type) {
        case Actions.SELECT_FOLDER :
            return  action.files;

        case Actions.UPLOAD_FILE_IN_FOLDER :
            return  [ ...state,
                {   fileName:action.fileName,
                    filePath:action.filePath,
                    lastModified: Date.now(),
                    isFolder:false,
                    isShared: false,
                    isSelected:false,
                    isChecked:false,
                    isDeleted:false
                }
            ]

        case Actions.CREATE_FOLDER_IN_FOLDER :
            return  [ ...state,
                {   folderName:action.folderName,
                    filePath:action.filePath,
                    lastModified: Date.now(),
                    isFolder:true,
                    isShared: false,
                    isSelected:false,
                    isChecked:false,
                    isDeleted:false
                }
            ]

        case Actions.CREATE_SHARED_FOLDER_IN_FOLDER :
            return  [ ...state,
                {   folderName:action.folderName,
                    filePath:action.filePath,
                    lastModified: Date.now(),
                    isFolder:true,
                    isShared: true,
                    isSelected:false,
                    isChecked:false,
                    isDeleted:false
                }
            ]


        case Actions.DELETE_FILE_FOLDER_IN_FOLDER :
            return state.map((file)=>file.filePath === action.filePath ?
                {...file,isDeleted:true} : file
            );


        case Actions.CHECK_FILE_FOLDER_IN_FOLDER :
            return state.map((file)=>file.filePath === action.filePath ?
                {...file,isChecked:true} : file
            );

        default :
            return state;

    }
}


const folderDetails = combineReducers({filePath,files});
export default folderDetails;