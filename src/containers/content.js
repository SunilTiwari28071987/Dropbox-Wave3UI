import React, { Component } from 'react'
import { connect } from 'react-redux'

import FileItemList from '../components/fileItemList'
import * as  FileActions from '../actions/fileActions'
import * as  UserActions from '../actions/userActions'
import {store} from '../index'


const invisibleStyle={display:"none"}



const content = ({staredFiles,
                   recentFiles,
                   openingFolder,
                   staringFileFolder,
                   unstaringFileFolder,
                   sharingFileFolder,
                   deletingFileFolder
               }) => (

        <div className="container-fluid">
            <h1>Your Inbox</h1>

                <FileItemList staredFiles={staredFiles} recentFiles={recentFiles}
                              onOpenClick={(filePath) => FileActions.openingFolder(filePath)}
                              onStarClick={(filePath) => FileActions.staringFileFolder(filePath)}
                              onUnstarClick={(filePath) => FileActions.unstaringFileFolder(filePath)}
                              onShareClick={(filePath) => FileActions.sharingFileFolder(filePath)}
                              onDeleteClick={(filePath) => FileActions.deletingFileFolder(filePath)}
                />

    </div>


);



const getStaredFiles = (files, filter) => {
    return files.filter(f => f.isStared)
}


const getRecentFiles = (files, filter) => {
    return files.filter(f => !f.isStared)
}


const mapStateToProps = (state) => ({
    staredFiles: getStaredFiles(state.UserDetailsReducer.files),
    recentFiles: getRecentFiles(state.UserDetailsReducer.files)
})


export default connect(
    mapStateToProps,
    {   openingFolder: FileActions.openingFolder,
        staringFileFolder : FileActions.staringFileFolder,
        unstaringFileFolder : FileActions.unstaringFileFolder,
        sharingFileFolder : FileActions.sharingFileFolder,
        deletingFileFolder : FileActions.deletingFileFolder
    }
)(content)

