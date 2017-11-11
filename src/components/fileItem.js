import React, {Component} from 'react'
import * as API from '../api/api';
import {connect} from 'react-redux'
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
        this.state = {isShareClicked: false}
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



    downloadAction = (filename)=>{
        console.log("File Name",filename);

        if(filename!==""){
            var file ={fileName:filename};
            this.handleDownload(file);
        }

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
                              sharingFolder={(filePath) => this.props.onShareClick(filePath)}

                                     onClick={() => this.setState({isShareClicked: false})}/>
    }

    render() {
        return ( this.props.file.isDeleted ?
                null :

                <tr className="row">
                    <td className="col-sm-2">

                        <a className="col-sm-1" href="#"
                           onClick={this.props.file.isStared ? this.props.onUnstarClick : this.props.onStarClick}>
                            {this.props.file.isStared ? <div>&#9733;</div> : <div>&#9734;</div>}
                        </a>


                        <img className="col-sm-3" src={
                            this.props.file.isFolder ?
                                (this.props.file.isShared ? "images/shared_folder.png" : "images/folder.png") :
                                "images/file.png"}/>

                        <b className="col-sm-2">
                            <a href={this.props.file.isFolder ? "#" : "http://localhost:5000/download/"+this.props.file.filePath}
                               onClick={this.props.file.isFolder ? this.props.onOpenClick : null} target="_blank">
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
                        <div className="col-sm-4">
                            {this.props.file.isFolder ? null :
                                <button type="button"
                                        className="form-control btn  btn-success"
                                        name="download"
                                        id="download"
                                        value="download"
                                        onClick={() => {this.downloadAction(this.props.file.filePath)}}>
                                    Download
                                </button>
                            }
                        </div>


                        {this.state.isShareClicked ? this.renderSharedModal(): null}
                        {this.state.isShareClicked ?
                            <TextBox isShareClicked={this.state.isShareClicked}
                                     creatingFolder={(filePath) => this.props.onShareClick(filePath)}
                                     onClick={() => this.setState({isShareClicked: false})}/>


                            : null}


                        <div className="col-sm-4">
                            <button className=" form-control btn btn-info" type="button"
                                    name="share"
                                    id="share"
                                    value="share"
                                    onClick={() => this.setState({isShareClicked: true})}>

                                Share
                            </button>
                        </div>

                        <div className="col-sm-4">
                            <button type="button"
                                    className=" form-control btn btn-danger"
                                    name="delete"
                                    id="delete"
                                    value="delete"
                                    onClick={this.props.onDeleteClick}>
                                Delete
                            </button>
                        </div>

                    </td>

                </tr>
        );

    }
}



/*
const fileItem = ({ file,
                      onOpenClick,
                      onDownloadClick,
                      onStarClick,
                      onUnstarClick,
                      onShareClick,
                      onShareLinkClick,
                      onDeleteClick
                  }) => (
   file.isDeleted ?
               null :

           <tr  className="row">
               <td className="col-sm-5">

                       <a className="col-sm-1" href="#" onClick={file.isStared ? onUnstarClick : onStarClick}>
                           {file.isStared ? <div>&#9733;</div> : <div>&#9734;</div>}
                       </a>


                   <img className="col-sm-4" src={
                       file.isFolder ?
                           (file.isShared?"images/shared_folder.png":"images/folder.png"):
                           "images/file.png"}/>

                   <b className="col-sm-6">
                       <a href={file.isFolder ? "#" :file.filePath}
                          onClick={file.isFolder ? onOpenClick : null}>
                           {file.fileName}
                       </a>
                   </b>
               </td>

               <td className="col-sm-2">
                   <p>
                       {file.lastModified}
                   </p>
               </td>

            <td className="col-sm-2">
                <p>
                    {file.memberCount==1 ? "Only You" : file.memberCount}
                </p>
            </td>




               <td className="col-sm-3">
                   {file.isFolder ? null :
                       <button type="button"
                               className="col-sm-3 form-control btn btn-primary"
                               name="download"
                               id="download"
                               value="download"
                               onClick={()=>window.open(file.filePath)}>
                           Download
                       </button>
                       }


                         <button  className="form-control btn btn-primary" type="button"
                                  name="share"
                            id="share"
                            value="share"
                            onClick={onShareClick}>
                        Share
                        </button>

                      <button type="button"
                               className=" form-control btn btn-primary"
                               name="shareLink"
                               id="shareLink"
                               value="shareLink"
                               onClick={() => window.alert(file.filePath)}>
                           Share Link
                       </button>


                 <button type="button"
                  className="col-sm-3 form-control btn btn-primary"
                  name="delete"
                  id="delete"
                  value="delete"
                  onClick={onDeleteClick}>
              Delete
          </button>

           </td>
           </tr>

);


 <div className="col-sm-3">
                            <button type="button"
                                    className=" form-control btn btn-primary"
                                    name="shareLink"
                                    id="shareLink"
                                    value="shareLink"
                                    onClick={() => window.alert(this.props.file.filePath)}>
                                Share Link
                            </button>
                        </div>

*/
export default fileItem