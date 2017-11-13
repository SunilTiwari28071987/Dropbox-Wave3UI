/*import React from 'react'
//import { render } from 'react-dom'
//import { Provider } from 'react-redux'
import { createStore } from 'redux'
//import App from './components/App'
import RootReducer from './reducers/rootreducer'
import * as Actions from './actions/actions'


const store = createStore(RootReducer);


// Log the initial state
    console.log(store.getState())

    // Every time the state changes, log it
    // Note that subscribe() returns a function for unregistering the listener
     store.subscribe(() =>
        console.log(store.getState())
    )

    // Dispatch some actions
    store.dispatch(Actions.signIn("Sunil","Tiwari","20","Male",[],[]))
store.dispatch(Actions.uploadFile("C:/abc.txt","abc.txt"))
store.dispatch(Actions.shareFileFolder("C:/abc.txt"))
store.dispatch(Actions.starFileFolder("C:/abc.txt"))
store.dispatch(Actions.unstarFileFolder("C:/abc.txt"))
store.dispatch(Actions.unstarFileFolder("C:/abc.txt"))
store.dispatch(Actions.createFolder("TestFolder","C:/myfolders/TestFolder"))
store.dispatch(Actions.createSharedFolder("TestSharedFolder","C:/myfolders/"))  //not adding it in the Files array of folder details
store.dispatch(Actions.shareFileFolder("C:/myfolders/TestFolder"))
store.dispatch(Actions.checkFileFolder("C:/myfolders/TestFolder"))
store.dispatch(Actions.selectFolder("C:/myfolders/TestFolder",[]))
store.dispatch(Actions.deleteFileFolder("C:/myfolders/TestFolder"))

console.log("++++++++++++++++")

store.dispatch(Actions.addMember("Sunil","Sunil28071987@gmail.com","Family")) // you should be able to add members only in existing groups
store.dispatch(Actions.addMember("Payal","fofadiyapayal@@gmail.com","Family"))// added group name in the action
store.dispatch(Actions.deleteMember("Sunil28071987@gmail.com","Family"))
store.dispatch(Actions.addMember("Sunil","Sunil28071987@gmail.com","Family"))  // Adding duplicate members
store.dispatch(Actions.createGroup("Family"))
store.dispatch(Actions.createGroup("Family"))
store.dispatch(Actions.deleteGroup("Family"))
store.dispatch(Actions.createSharedFolderInGroup("Family","Personal","C:/myfolders/Personal"))
store.dispatch(Actions.uploadFileInGroup("FamilyPhoto.jpg","C:/myfolders/Personal/FamilyPhoto.jpg","Family"))// added group name in the action
store.dispatch(Actions.deleteFileFolderInGroup("C:/myfolders/Personal"))
store.dispatch(Actions.checkFileFolderInGroup("C:/myfolders/Personal"))
store.dispatch(Actions.selectFolderInGroup("C:/myfolders/Personal",[]))

console.log("++++++++++++++++")

store.dispatch(Actions.createSharedFolderInFolder("Personal1","C:/myfolders/Personal1"))
store.dispatch(Actions.createFolderInFolder("Personal2","C:/myfolders/Personal2"))
store.dispatch(Actions.uploadFileInFolder("prq.txt","C:/myfolders/Personal1/pqr.txt"))
store.dispatch(Actions.deleteFileFolderInFolder("C:/myfolders/Personal1/pqr.txt"))
store.dispatch(Actions.checkFileFolderInFolder("C:/myfolders/Personal1/pqr.txt"))
*/


import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import * as Actions from './actions/actions'
import store from './store/store'
import registerServiceWorker from './registerServiceWorker';


store.subscribe(() =>
    console.log(store.getState())
)

//store.dispatch(Actions.uploadFile("C:/abc.txt", "abc.txt"))


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();





