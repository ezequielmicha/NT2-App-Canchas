
    const getAllReserves = async () => {
            await fetch("http://192.168.0.5:3000/api/reserves")
                .then(res => res.json()) 
                .then(data => {
                    console.log("RESERVAS: ", data)
                })
    }
    
    const getUserByEmail = async (email) => {
        await fetch(`http://192.168.0.5:3000/api/users/email/${email}`)
            .then(res => res.json()) 
            .then(data => {
                console.log("USER POR MAIL: ", data)
            })
    }
    
    const getReservesById = async () => {
        const id = getUserByEmail()._id;
        console.log(id);
        await fetch(`http://192.168.0.5:3000/api/reserves/${id}`)
            .then(res => res.json()) // tratamiento de data para convertirlo en un json
            .then(data => {
                console.log("RESERVAS POR USER: ", data)
            })
    }


module.exports = {getAllReserves, getUserByEmail, getReservesById}