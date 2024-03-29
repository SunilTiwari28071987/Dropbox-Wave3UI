import React, {Component} from 'react'

import * as API from '../api/api';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';

import * as Actions from '../actions/actions'
import FileItemList from '../components/fileItemList'
import * as  FileActions from '../actions/fileActions'
import * as  UserActions from '../actions/userActions'

import ShareModalBox from '../components/generic/sharedModal'
import store from '../store/store'

import TextBox from "../components/textBox";





class fileItem extends Component {


    constructor(props) {
        super();
        this.state = {isShareClicked: false
        }
    }

    timeConverter(timestamp) {
        var a = new Date(timestamp);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }




    downloadAction = (filename)=> {
        console.log("File Name", filename);

        if (filename !== "") {
            var file = {fileName: filename};
            this.handleDownload(file);
        }
    }

    deleteAction = (file)=>{

        console.log('delete :',JSON.stringify(file));
        var fileJson = {
            filePath: file.filePath,
            emailID: this.props.emailID
        };
        this.handleDelete(fileJson);
    }



    handleDelete = (fileJson) => {
        console.log('handleDelete');

        API.deleteFile(fileJson )
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.result);
                    console.log("reading response from node..")
                    console.log(response)
                    //console.log(response.data.firstName,response.data.lastName,response.data.emailID,response.data.age,response.data.gender, response.data.password, response.data.files);

                } else if (response.status === 400 || response.status === 500) {
                    console.log(response.result);
                    //this.renderDialogBox("Sorry, Your Sign In has failed...!!!!");
                    //Error.errorAlert("Sorry, delete failed...!!!!");
                }
            });
    };


    shareAction = (filePath, shareToEmail)=>{


        var  fileJson = {
            filePath: filePath,
            fromEmailID: this.props.emailID,
            toEmailID: shareToEmail
        };

        console.log('sharing :',fileJson);
        this.handleShare(fileJson);
    }




    handleDownload = (file) => {
        console.log('handleSubmit',JSON.stringify(file));
        API.download(file)
            .then((response) => {
                /*if (response.status === 200) {
                    console.log(response.result);
                } else if (response.status === 400) {
                    console.log(response.result);
                }*/
            });

    };


    renderSharedModal() {
        return <ShareModalBox modalState={this.state.isShareClicked}

                              sharingFolder={(emailID) => {
                                  this.props.onShareClick(this.props.file.filePath);
                                  this.shareAction(this.props.file.filePath, emailID);
                              }}
                              onClick={() => this.setState({isShareClicked: false})}/>

    }


    handleShare = (fileJson) => {
        console.log('handleShare : '+JSON.stringify(fileJson));

        API.shareFile(fileJson )
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.result);
                    console.log("reading response from node..")
                    console.log(response)
                    //console.log(response.data.firstName,response.data.lastName,response.data.emailID,response.data.age,response.data.gender, response.data.password, response.data.files);

                } else if (response.status === 400 || response.status === 500) {
                    console.log(response.result);
                    //this.renderDialogBox("Sorry, Your Sign In has failed...!!!!");
                    //Error.errorAlert("Sorry, delete failed...!!!!");
                }
            });
    };

    starAction = (file)=>{


        var fileJson = {
            filePath: file.filePath,
            emailID: this.props.emailID
        };
        console.log('starring :',JSON.stringify(fileJson));
        this.handleStar(fileJson);
    }



    handleStar = (fileJson) => {
        console.log('handleStar');

        API.starFile(fileJson )
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.result);
                    console.log("reading response from node..")
                    console.log(response)
                    //console.log(response.data.firstName,response.data.lastName,response.data.emailID,response.data.age,response.data.gender, response.data.password, response.data.files);

                } else if (response.status === 400 || response.status === 500) {
                    console.log(response.result);
                    //this.renderDialogBox("Sorry, Your Sign In has failed...!!!!");
                    //Error.errorAlert("Sorry, delete failed...!!!!");
                }
            });
    };

    unstarAction = (file)=>{


        var fileJson = {
            filePath: file.filePath,
            emailID: this.props.emailID
        };
        console.log('starring :',JSON.stringify(fileJson));
        this.handleUnstar(fileJson);
    }



    handleUnstar = (fileJson) => {
        console.log('handleUnstar');

        API.unstarFile(fileJson )
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.result);
                    console.log("reading response from node..")
                    console.log(response)
                    //console.log(response.data.firstName,response.data.lastName,response.data.emailID,response.data.age,response.data.gender, response.data.password, response.data.files);

                } else if (response.status === 400 || response.status === 500) {
                    console.log(response.result);
                    //this.renderDialogBox("Sorry, Your Sign In has failed...!!!!");
                    //Error.errorAlert("Sorry, delete failed...!!!!");
                }
            });
    };

    render() {
        return ( this.props.file.isDeleted ?
                null :

                <tr className="row">
                    <td className="col-sm-2">

                        <a className="col-sm-1" href="#"

                           onClick={()=>{
                               if(this.props.file.isStared)
                               {
                                   this.props.onUnstarClick();
                                   this.unstarAction(this.props.file);
                               }
                               else
                                {
                                   this.props.onStarClick();
                                   this.starAction(this.props.file);

                                }
                           }}>
                         {this.props.file.isStared ? <div>&#9733;</div> : <div>&#9734;</div>}
                        </a>


                        <img className="col-sm-3" src={
                            this.props.file.isFolder ?
                                (this.props.file.isShared ? "images/shared_folder.png" : "images/folder.png") :
                                "images/file.png"}/>

                        <b className="col-sm-2">


                            <a href={this.props.file.isFolder ? "#" : "http://localhost:8080/file/download/"+this.props.file.fileName}
                               onClick={this.props.file.isFolder ? this.props.onOpenClick : null} target="_self">

                                {this.props.file.fileName}
                            </a>


                        </b>
                    </td>



                    <td className="col-sm-2">
                        <p>
                            {this.timeConverter(this.props.file.lastModified)}
                        </p>
                    </td>

                    <td className="col-sm-1">
                        <p>
                            {!this.props.file.isShared ? "You" : 'Shared'}
                        </p>
                    </td>

                    <td className="col-sm-6">

                        {this.state.isShareClicked?this.renderSharedModal():null}


                        <div className="col-sm-4">
                            <button className=" form-control btn btn-info" type="button"
                                    name="share"
                                    id="share"
                                    value="share"
                                    onClick={() => {this.setState({isShareClicked: true});}}>

                                Share
                            </button>
                        </div>

                        <div className="col-sm-4">
                            <button type="button"
                                    className=" form-control btn btn-danger"
                                    name="delete"
                                    id="delete"
                                    value="delete"
                                    onClick={()=>{this.deleteAction(this.props.file); this.props.onDeleteClick();}}>
                                Delete
                            </button>
                        </div>

                    </td>

                </tr>
        );

    }
}


const mapStateToProps = (state) => ({
    emailID: state.UserDetailsReducer.userProfile.email
})


export default withRouter(connect(mapStateToProps,null) (fileItem));

