

const child_process = require('child_process');
const { isBuffer } = require('util');

const ejecutar = (archivo) => new Promise((resolve, reject) => {
    child_process.exec(`node ${archivo}`, (err, result) => {
        if(err) return reject('hay un error')
        resolve(result)
        console.log(result)
    });
});

const generarSimulacion = async() => {
    try {
        const resultado = await ejecutar('consulta.js');
        console.log(resultado);
    } catch (error) {
        console.log(error)
    }
};

generarSimulacion();