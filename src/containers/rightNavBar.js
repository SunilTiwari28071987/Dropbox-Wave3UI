import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as Actions from '../actions/actions'
import FileItemList from '../components/fileItemList'
import * as  FileActions from '../actions/fileActions'
import * as  UserActions from '../actions/userActions'
import store from '../store/store'
import FolderModalBox from '../components/generic/folderNameModal'
import SharedFolderModalBox from '../components/generic/sharedFolderNameModal'
import TextBox from "../components/textBox";

const invisibleStyle = {display: "none"}

class RightNavBar extends Component {

    constructor(props) {
        super();
        this.state = {
            isCreateFolderClicked: false,
            isCreateSharedFolderClicked: false
        }
    }

    renderFolderModal() {
        return <FolderModalBox modalState={this.state.isCreateFolderClicked}
                               creatingFolder={(folderName) => UserActions.creatingNewFolder(
                                   store.getState(), folderName)}
                               onClick={() => this.setState({isCreateFolderClicked: false})}/>
    }

    renderSharedFolderModal() {
        return <SharedFolderModalBox modalState={this.state.isCreateSharedFolderClicked}
                                     creatingSharedFolder={(folderName) => UserActions.creatingNewSharedFolder(
                                         store.getState(), folderName)}

                                     onClick={() => this.setState({isCreateSharedFolderClicked: false})}/>
    }

    render() {
        return (
            <div>
                <label className=" col-sm-offset-2 col-sm-8 btn btn-primary">
                    Upload File <input className={'fileupload'}
                                       type="file"
                                       style={invisibleStyle}
                                       onChange={UserActions.uploadingFile.bind(this, this.props.email)}
                />
                </label>

                <div className="col-sm-5">
                    {this.state.isCreateFolderClicked ? this.renderFolderModal() : null}
                </div>

                <div className="col-sm-offset-1 col-sm-10">
                    <br/>
                    <button type="button"
                            className="form-control btn btn-primary"
                            name="newFolder"
                            id="newFolder"
                            value="newFolder"
                            onClick={() => this.setState({isCreateFolderClicked: true})}>
                        New Folder
                    </button>
                </div>


                {console.log("State :", this.state.isCreateFolderClicked)}

                <div className="col-sm-5">
                    {this.state.isCreateSharedFolderClicked ? this.renderSharedFolderModal() : null}
                </div>

                <div className="col-sm-offset-1 col-sm-10">
                    <br/>
                    <button type="button"
                            className="form-control btn btn-primary"
                            name="newSharedFolder"
                            id="newSharedFolder"
                            value="newSharedFolder"
                            onClick={() => this.setState({isCreateSharedFolderClicked: true})}>
                        New Shared Folder
                    </button>
                </div>


                {console.log("State :", this.state.isCreateSharedFolderClicked)}
                <div className="col-sm-5">
                    <br/>
                </div>
            </div>

        )
    }


}

const mapStateToProps = (state) => ({
    email: state.UserDetailsReducer.userProfile.email
})


export default RightNavBar = connect(
    mapStateToProps,
    {
        uploadingFile: UserActions.uploadingFile
    }
)(RightNavBar)

