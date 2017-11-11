export const SIGN_IN="SIGN_IN";
export const SIGN_OUT="SIGN_OUT";
export const STAR_FILE_FOLDER="STAR_FILE_FOLDER";
export const UNSTAR_FILE_FOLDER="UNSTAR_FILE_FOLDER";
export const SHARE_FILE_FOLDER="SHARE_FILE_FOLDER";
export const UPLOAD_FILE="UPLOAD_FILE";
export const CREATE_FOLDER="CREATE_FOLDER";
export const CREATE_SHARED_FOLDER="CREATE_SHARED_FOLDER";
export const DELETE_FILE_FOLDER = "DELETE_FILE_FOLDER";
export const CHECK_FILE_FOLDER = "CHECK_FILE_FOLDER";
export const SELECT_FOLDER= "SELECT_FOLDER";
export const ADD_MEMBER= "ADD_MEMBER";
export const DELETE_MEMBER= "DELETE_MEMBER";
export const CREATE_GROUP= "CREATE_GROUP";
export const SELECT_GROUP="SELECT_GROUP";
export const DELETE_GROUP= "DELETE_GROUP";
export const CREATE_SHARED_FOLDER_IN_GROUP="CREATE_SHARED_FOLDER_IN_GROUP";
export const UPLOAD_FILE_IN_GROUP="UPLOAD_FILE_IN_GROUP";
export const DELETE_FILE_FOLDER_IN_GROUP="DELETE_FILE_FOLDER_IN_GROUP";
export const CHECK_FILE_FOLDER_IN_GROUP="CHECK_FILE_FOLDER_IN_GROUP";
export const SELECT_FOLDER_IN_GROUP="SELECT_FOLDER_IN_GROUP";
export const CREATE_FOLDER_IN_FOLDER="CREATE_FOLDER_IN_FOLDER";
export const CREATE_SHARED_FOLDER_IN_FOLDER="CREATE_SHARED_FOLDER_IN_FOLDER";
export const UPLOAD_FILE_IN_FOLDER="UPLOAD_FILE_IN_FOLDER";
export const DELETE_FILE_FOLDER_IN_FOLDER="DELETE_FILE_FOLDER_IN_FOLDER";
export const CHECK_FILE_FOLDER_IN_FOLDER="CHECK_FILE_FOLDER_IN_FOLDER";



export function signIn (firstName,lastName,email,age,gender,password,files,groups) {
    return {
        type : SIGN_IN,
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        gender:gender,
        password:password,
        files:files,
        groups:groups

    }
}

export const signOut =(emailID) => {
    return {
        type : SIGN_OUT,
        email: emailID
    }
}

export const starFileFolder =(filePath) => {
    return {
        type : STAR_FILE_FOLDER,
        filePath: filePath
    }
}

export const unstarFileFolder =(filePath) => {
    return {
        type : UNSTAR_FILE_FOLDER,
        filePath: filePath
    }
}

export const shareFileFolder =(filePath) => {
    return {
        type : SHARE_FILE_FOLDER,
        filePath: filePath
    }
}


export const uploadFile =(fileName,filePath) => {
    return {
        type : UPLOAD_FILE,
        fileName: fileName,
        filePath: filePath
    }
}

export const createFolder =(folderName,filePath) => {
    return {
        type : CREATE_FOLDER,
        filePath: filePath,
        folderName: folderName
    }
}

export const createSharedFolder =(folderName,filePath) => {
    return {
        type : CREATE_SHARED_FOLDER,
        filePath: filePath,
        folderName: folderName
    }
}

export const  deleteFileFolder =(filePath) => {
    return {
        type : DELETE_FILE_FOLDER,
        filePath: filePath
    }
}

export const  checkFileFolder =(filePath) => {
    return {
        type : CHECK_FILE_FOLDER,
        filePath: filePath
    }
}

export const  selectFolder =(filePath,files) => {
    return {
        type : SELECT_FOLDER,
        filePath: filePath,
        files:files
    }
}


export const  addMember =(name,email,groupName) => {
    return {
        type : ADD_MEMBER,
        name: name,
        email:email,
        groupName:groupName
    }
}


export const  deleteMember =(email,groupName) => {
    return {
        type : DELETE_MEMBER,
        email:email,
        groupName:groupName
    }
}


export const  createGroup =(groupName) => {
    return {
        type : CREATE_GROUP,
        groupName: groupName
    }
}


export const selectGroup =(groupName,members,files,admin) => {
    return {
        type : SELECT_GROUP,
        groupName: groupName,
        members: members,
        files: files,
        admin:admin

    }
}


export const  deleteGroup =(groupName) => {
    return {
        type : DELETE_GROUP,
        groupName: groupName
    }
}


export const createSharedFolderInGroup =(groupName,folderName,filePath) => {
    return {
        type : CREATE_SHARED_FOLDER_IN_GROUP,
        groupName: groupName,
        filePath: filePath,
        folderName: folderName
    }
}

export const uploadFileInGroup =(fileName,filePath,groupName) => {
    return {
        type : UPLOAD_FILE_IN_GROUP,
        fileName: fileName,
        filePath: filePath,
        groupName:groupName
    }
}

export const deleteFileFolderInGroup =(filePath) => {
    return {
        type : DELETE_FILE_FOLDER_IN_GROUP,
        filePath: filePath
    }
}


export const  checkFileFolderInGroup =(filePath) => {
    return {
        type : CHECK_FILE_FOLDER_IN_GROUP,
        filePath: filePath
    }
}

export const  selectFolderInGroup =(filePath,files) => {
    return {
        type : SELECT_FOLDER_IN_GROUP,
        filePath: filePath,
        files:files
    }
}




export const createSharedFolderInFolder =(folderName,filePath) => {
    return {
        type : CREATE_SHARED_FOLDER_IN_FOLDER,
        filePath: filePath,
        folderName: folderName
    }
}



export const createFolderInFolder =(folderName,filePath) => {
    return {
        type : CREATE_FOLDER_IN_FOLDER,
        filePath: filePath,
        folderName: folderName
    }
}


export const uploadFileInFolder =(fileName,filePath) => {
    return {
        type : UPLOAD_FILE_IN_FOLDER,
        fileName: fileName,
        filePath: filePath
    }
}

export const deleteFileFolderInFolder =(filePath) => {
    return {
        type : DELETE_FILE_FOLDER_IN_FOLDER,
        filePath: filePath
    }
}


export const  checkFileFolderInFolder =(filePath) => {
    return {
        type : CHECK_FILE_FOLDER_IN_FOLDER,
        filePath: filePath
    }
}



