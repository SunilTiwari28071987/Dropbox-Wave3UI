import * as Actions from "./actions";
import store from '../store/store'
import {SELECT_FOLDER,STAR_FILE_FOLDER} from './actions'

export const openingFolder = (filePath) => () => store.dispatch(Actions.starFileFolder(filePath))


export const staringFileFolder = (filePath) => () => store.dispatch(Actions.starFileFolder(filePath))

export const unstaringFileFolder = (filePath) => () =>  store.dispatch(Actions.unstarFileFolder(filePath))

export const sharingFileFolder = (filePath) => () => store.dispatch(Actions.shareFileFolder(filePath))

export const deletingFileFolder = (filePath) => () => store.dispatch(Actions.deleteFileFolder(filePath))

    /*
export const staringFileFolder = filePath => (dispatch , getState) => {
    dispatch( Actions.starFileFolder(filePath));

}

export const unstaringFileFolder = filePath => (dispatch , getState) => {
    dispatch( Actions.unstarFileFolder(filePath));

}

export const sharingFileFolder = filePath => (dispatch , getState) => {
    dispatch( Actions.shareFileFolder(filePath));

}


export const deletingFileFolder = filePath => (dispatch , getState) => {
    dispatch(Actions.deleteFileFolder(filePath));

}
*/



