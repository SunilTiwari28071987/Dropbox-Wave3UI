const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:8080'

const headers = {
    'Accept': 'application/json'
};

export const signUp = (payload) =>
    fetch(`${api}/user/signup`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then((res => res.json()))
        .catch(error => {
            console.log("This is error");
            return error;
        });


export const signIn = (payload) =>
    fetch(`${api}/user/signin`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        //console.log("Got result")
        //console.log(res.json());
        return res.json();
    }).catch(error => {
            console.log("This is error api");
            console.log(error);
            return error;
        });


export const uploadFile = (payload) =>
    fetch(`${api}/file/upload`, {
        method: 'POST',
        credentials:'include',
        body: payload
    }).then(res => {
        return res.status;
    }).catch(error => {
        console.log("This is error for Upload ");
        return error;
    });


export const setFilePath = (payload) =>
    fetch(`${api}/setfilepath`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        return res.json();
    }).catch(error => {
        console.log("This is error for set File Path");
        return error;
    });

export const createFolder = (payload) =>
    fetch(`${api}/createfolder`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const createSharedFolder = (payload) =>
    fetch(`${api}/createFolder`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });



export const download = (payload) =>
    fetch(`${api}/download/${payload.fileName}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log("Got result")
        //console.log(res.json());
        return res.json();
    }).catch(error => {
        console.log("This is error api");
        console.log(error);
        return error;
    });


export const deleteFile = (payload) =>
    fetch(`${api}/file/delete`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.json();

    })
        .catch(error => {
            console.log("This is error");
            return error;
        });



export const checkSession = (payload) =>
    fetch(`${api}/checksession`, {

        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {

        console.log("Got result")
        //console.log(res.json());
        return res.json();
    }).catch(error => {
        console.log("This is error api");
        console.log(error);
        return error;
    });


export const signOut = (payload) =>
    fetch(`${api}/signout`, {

        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {

        console.log("Got result")
        //console.log(res.json());
        return res.json();
    }).catch(error => {
        console.log("This is error api");
        console.log(error);
        return error;
    });



    export const shareFile = (payload) =>
    fetch(`${api}/file/share`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res =>
        res.json())
        .catch(error => {
        console.log("This is error api");
        console.log(error);
        return error;
    });

export const starFile = (payload) =>
    fetch(`${api}/file/star`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {
        console.log(res);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const unstarFile = (payload) =>
    fetch(`${api}/file/unstar`, {

        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(res => {

        console.log("Got result")
        //console.log(res.json());
        return res.json();
    }).catch(error => {
        console.log("This is error api");
        console.log(error);
        return error;
    });
