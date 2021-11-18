import axios from 'axios';

async function getReserves(){
    return (await axios.request('http://192.168.0.5:3000/api/reserves')).data;
}

// export default getReserves
module.exports = {getReserves}