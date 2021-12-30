
const params = process.argv.slice(2)
console.log(params);
module.exports = params;

const child_process = require('child_process');

const ejecutar = (archivo) => new Promise((resolve, reject) => {
    child_process.exec(`node ${archivo}`, (err, result) => {
        if(err) return reject('hay un error')
        resolve(result)
    });
});

const simulacion = async() => {
    try {
        const resultado = await ejecutar('consulta.js');
        console.log(resultado);
    } catch (error) {
        console.log(error)
    }
};

simulacion();