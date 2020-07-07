const inquirer = require('inquirer');

async function main() {
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'apellido',
                    message: 'Ingresa Tu Apellido'
                },
                {
                    type: 'input',
                    name: 'edad',
                    message: 'Ingresa Tu Edad'
                }]);
        console.log('Respuesta', respuesta);
    } catch (error) {
        console.error('Error: ', error);
    }
}

main();