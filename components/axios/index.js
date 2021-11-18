// const getAllReserves = async () => {
//     await fetch("http://192.168.0.127:3000/api/reserves")
//         .then(res => res.json()) 
//         .then(data => {
//             console.log("RESERVAS: ", data)
//         })
// }

// const getUserByEmail = async (email) => {
// await fetch(`http://192.168.0.127:3000/api/users/email/${email}`)
//     .then(res => res.json()) 
//     .then(data => {
//         console.log("USER POR MAIL: ", data)
//     })
// }

// const getReservesById = async (email) => {
// const user = await getUserByEmail(email);
// //const id = ;
// console.log(user);
// console.log(id);
// await fetch(`http://192.168.0.127:3000/api/reserves/61945de85c66bc937465a48d`)
//     .then(res => res.json()) // tratamiento de data para convertirlo en un json
//     .then(data => {
//         console.log("RESERVAS POR USER: ", data)
//     })
// }

// const addReserveByEmail = async () =>{
//     console.log("Agregando reserva");
//     const reserve = {
//         "email": "ferpallas@gmail.com",
//         "reserve": 
//          {
//         "date": "09-12-21",
//         "hour": 8,
//         "courtSize": "F6"
//            }
//     }
//     await fetch(`http://192.168.0.127:3000/api/reserves/email/addReserve`,{
//         method: "POST",
//         body: JSON.stringify(reserve)
    
//     })
//     // .then(res => res.json()) 
//     // .then(data => {
//     //     console.log("USER POR MAIL: ", data)
//     //})
// }

// // const url = "http://192.168.0.127:3000/api/reserves/email/addReserve”  
// // let params = {"name":"admin","password":"admin"};  
// // fetch(url, {
// //   method: 'POST',
// //   headers: {
// //     'Accept': 'application/json',
// //     'Content-Type': 'application/json',
// //   },
// //   body: JSON.stringify(params)
// // })


// module.exports = {getAllReserves, getUserByEmail, getReservesById, addReserveByEmail}