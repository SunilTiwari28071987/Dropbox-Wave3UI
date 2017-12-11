import * as Actions from "./actions";
import store from '../store/store'


import {uploadFile,createFolder,createSharedFolder,setFilePath, deleteFile} from '../api/api'
import {getUserHomePath, getUserEmail} from "../reducers/rootreducer";


export const uploadingFile = ( emailID, event) => {

    let filePath = './resources/upload'
    let fileName = event.target.files[0].name;
    const filePath1 = {filePath :filePath};

    console.log("FilePathSet :",filePath);
    console.log("FilePathSet :",filePath);
    console.log("FileUpload");
    console.log(event.target.files[0])
    const payload = new FormData();
    payload.append('file', event.target.files[0]);
    console.log(emailID);
    payload.append('emailID',emailID);
    payload.append('fileName',fileName);
    payload.append('filePath',filePath+"/"+fileName);
    uploadFile(payload)
        .then((status) => {
            console.log("Got the response");
        });



    store.dispatch(Actions.uploadFile(fileName,filePath+"/"+fileName))

}


export const creatingNewFolder = ( state,folderName, event) => {
    console.log("Create Folder");
    const folderPath = {folderPath :getUserHomePath(state)+"/"+folderName};
    createFolder(folderPath)
        .then((status) => {
            console.log("Got the response");
        });


    let fileName = folderName
    store.dispatch(Actions.createFolder(folderName,folderPath))
}



export const creatingNewSharedFolder = ( state,folderName, event) => {
    console.log("Create Shared Folder");
    const folderPath = {folderPath :getUserHomePath(state)+"/"+folderName};
    createFolder(folderPath)
        .then((status) => {
            console.log("Got the response");
        });


    let fileName = folderName
    store.dispatch(Actions.createSharedFolder(folderName,folderPath))
}

export const signingIn = (firstName, lastName, email, age, gender, password, files) => {
    console.log("signing in......")
    store.dispatch(Actions.signIn(firstName,lastName,email, age, gender, password, files,[]))
}

export const deleting = (filePath) => {
    console.log("signing in......")
    store.dispatch(Actions.deleteFileFolder(filePath))
}
