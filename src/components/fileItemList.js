import React from 'react'
import FileItem from './fileItem'
//import PropTypes from 'prop-types'

const fileItemList = ({ staredFiles,
                          recentFiles,
                          onOpenClick,
                          onStarClick,
                          onUnstarClick,
                          onShareClick,
                          onDeleteClick
}) => (

<div>


    {staredFiles.length>0 ?
        <table className="table table-responsive     table-borderless">
            <caption>
                <b>Starred Files and Folders</b>
            </caption>
            <thead>
            <tr className="row">

                <th className="col-sm-4"><b>File/Folder</b></th>
                <th className="col-sm-1"><b>Last Modified</b></th>
                <th className="col-sm-1"><b>Member</b></th>
                <th className="col-sm-6"><b>Options</b></th>
            </tr>
            </thead>
            <tbody>
            {staredFiles.map((file) =>

            <FileItem key={file.filePath}  file={file}
                                                                       onOpenClick={onOpenClick(file.filePath)}
                                                                       onUnstarClick={onUnstarClick(file.filePath)}
                                                                       onShareClick={onShareClick(file.filePath)}
                                                                       onDeleteClick={onDeleteClick(file.filePath)}
             />)}
            </tbody>
        </table>
        : <p>No Stared Files</p>}






        {recentFiles.length>0 ?
                <table className="table table-responsive     table-borderless">
                    <caption>
                        <b>Recent Files and Folders</b>
                    </caption>
                    <thead>
                    <tr className="row">

                        <th className="col-sm-4"><b>File/Folder</b></th>
                        <th className="col-sm-1"><b>Last Modified</b></th>
                        <th className="col-sm-1"><b>Member</b></th>
                        <th className="col-sm-6"><b>Options</b></th>
                    </tr>
                    </thead>
                    <tbody>
                    { recentFiles.map((file) => <FileItem key={file.filePath}  file={file}
                                                                       onOpenClick={onOpenClick(file.filePath)}
                                                                       onStarClick={onStarClick(file.filePath)}
                                                                       onShareClick={onShareClick(file.filePath)}
                                                                       onDeleteClick={onDeleteClick(file.filePath)}
                                             />)}
            </tbody>
            </table>
        :<p>No Recent Files</p>}

</div>
)

export default fileItemList