//obtener datos usuario por terminal
const params = process.argv.slice(2)
//const params = require('./ejecutar.js');
const nombreArchivo = params[0];
const extension = params[1];
const moneda = params[2];
const valor = params[3];


const https = require('https');
const url = 'https://mindicador.cl/api';

https
    .get(url, (resp) => {
        let data = ''
        //para string con mucha información
        resp.on('data', (chunk) => {
            data += chunk
        })

        resp.on('end', () => {
            const datosApi = JSON.parse(data)
            //crearArchivo(data);
            //console.log(datosApi[moneda].valor)
            //console.log(datosApi[moneda].fecha)
            //console.log(Number(valor) * Number(datosApi[moneda].valor));
            
            const crearArchivo = (datos) => {
                const fs = require('fs');
                const texto = `
                A la fecha: ${datosApi[moneda].fecha}
                Fue realizada cotización con los siguientes datos:
                Cantidad de pesos a convertir: $ ${valor} pesos
                Convertido a "${moneda}" da un total de: 
                $ ${(Number(valor) / Number(datosApi[moneda].valor)).toFixed(2)}
                `;
            
                fs.writeFile(`${nombreArchivo+extension}`, texto, 'utf-8', () => {
                    console.log('Cotización generada')
                })
            };
            crearArchivo();
            
        })

    })
    //manejar error:
    .on('error', err => console.log(err.message));





//Crear archivo
/*
const crearArchivo = (valor) => {
    const fs = require('fs');
    const texto = `
    A la fecha: ${datosApi[moneda].fecha}
    Fue realizada cotización con los siguientes datos:
    Cantidad de pesos a convertir: ${valor} pesos
    Convertido a "${moneda}" da un total de:
    ${Number(valor) * Number(datosApi[moneda].valor)}
    `;

    fs.writeFile(`${nombreArchivo}.txt`, texto, 'utf-8', () => {
        console.log('Cotización generada')
    })
};
*/

