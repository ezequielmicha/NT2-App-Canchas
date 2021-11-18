import axios from 'axios';

async function getReserves(){
    return (await axios.request('http://localhost:3000/api/reserves')).data;
}

module.exports = {getReserves}