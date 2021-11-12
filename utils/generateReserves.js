import moment from "moment";

// const date = moment();
// const date2 = date.add(25, 'days').format('lll');
// const date3 = date.add(20, 'hours').format('lll');
    
// const availableCourts = () => {
//  const list = [];

// }
// console.log(hours);


const DAYS = 20;
const HOURS = 12;

const CANTIDAD_DATOS = 20;

const date = moment.now();

const nombres =['Dario', 'Emiliano', 'Noelia', 'Gustavo', 'Pedro']
const apellidos = ['Garcia', 'Figuera', 'Loughry', 'Maenhout', 'Nielsen']

const random = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min

const generarNombre = () => `${nombres[random(nombres.length -1)]} ${apellidos[random(apellidos.length -1)]}`

const generarTelefono = () => `${random(99, 10)}-${random(999, 100)}-${random(999, 100)}`


const crearContacto = () => {
    return {
        nombre: generarNombre(),
        telefono: generarTelefono()
    }
}

const reserves = Array.from({
    length: CANTIDAD_DATOS
}, crearContacto)
.map((item, index) => ({...item, id: index})) 

export default reserves;