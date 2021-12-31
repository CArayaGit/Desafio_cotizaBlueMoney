// ---NO LOGRÉ EJECUTAR CONSULTA.JS CON CHILD_PROCESS---

/*
const params = process.argv.slice(2)
const nombreArchivo = params[0];
const extension = params[1];
const moneda = params[2];
const valor = params[3];
module.exports = params;


const child_process = require('child_process');

child_process.exec(`node . ${params[0]} ${params[1]} ${params[2]} ${params[3]}`, (err, result) => {
    if (err) console.log('Error');
    console.log(result);
});
*/

const child_process = require('child_process');

const ejecutar = (archivo) => new Promise((resolve, reject) => {
    child_process.exec('node consulta.js', (err, result) => {
        if(err) return reject('hay un error')
        resolve(result)
    });
});