import axios from 'axios'

const server = 'http://192.168.0.5:3000/api';

const getAllReserves = async () => {
    const url = `${server}/reserves/`
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

const addUser = async (user) => {
    const url = `${server}/users`;
    const response = await axios.post(url, { user: user }, { headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      } });
    return response.data;
};


export { getAllReserves, getUserByEmail, getReservesByUserId, addUser };