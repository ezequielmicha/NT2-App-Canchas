import axios from 'axios'

const server = 'http://192.168.0.8:3000/api';

const getAllReserves = async () => {
    const url = `${server}/reserves/`;
    let response = await axios.get(url);
    return response.data;
}


const getUserByEmail = async (email) => {
    const url = `${server}/users/email/${email}`;
    const response = await axios.get(url);
    return response.data;
};

const getReservesByUserId = async (id) => {
    const url = `${server}/reserves/${id}`;
    const response = await axios.get(url);
    return response.data;
};

const addUser = async (email, name, last, password, userName, reserves) => {
    const url = `${server}/users`;
    const params = JSON.stringify({ "email": email, "name": name, "last": last, "password": password, "userName": userName, "reserves": reserves });
    const response = await axios.post(url, params, { headers: {
        //'Accept': 'application/json',
        'Content-Type': 'application/json',
    } });
    return response.data;
};

const addReserve = async (id, date, hour, courtSize) => {
    const url = `${server}/reserves/addReserve`;
    const params = JSON.stringify({
        "_id": id,
        "reserve": {
                    "date": date,
                    "hour": hour,
                    "courtSize": courtSize,
                    "calificated": false
                   }
    });
    const response = await axios.put(url, params, { headers: {
        //'Accept': 'application/json',
        'Content-Type': 'application/json',
    } })
    return response.data;
};

const addCalification = async (size, calification) => {
    const url = `${server}/califications`;
    const params = JSON.stringify({
        "size": size,
        "calification": calification
    });
    const response = await axios.put(url, params, { headers: {
        //'Accept': 'application/json',
        'Content-Type': 'application/json',
    } })
    return response.data;
};

const markReserveAsCalificated = async (id, date, hour, courtSize, calificated) => {
    const url = `${server}/reserves/markAsCalificated`;
    const params = JSON.stringify({
        "_id": id,
        "reserve": {
                    "date": date,
                    "hour": hour,
                    "courtSize": courtSize,
                    "calificated": calificated
                   }
    });
    const response = await axios.put(url, params, { headers: {
        //'Accept': 'application/json',
        'Content-Type': 'application/json',
    } })
    return response.data;
};

const getCalificationsBySize = async (size) => {
    const url = `${server}/califications/size/${size}`;
    const response = await axios.get(url);
    return response.data;
};

// const login = async () => {
//     const url = `${server}/users/login`;
//     const response = await axios.post(url);

// }
export { getAllReserves, getUserByEmail, getReservesByUserId, addUser, addReserve, markReserveAsCalificated, addCalification, getCalificationsBySize};