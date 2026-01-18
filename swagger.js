const swaggerAutogen = require('swagger-autogen')();    

const doc = {
  info: {
    title: 'Contact API',
    description: 'A simple CRUD API for managing contacts',
  },
  host: 'localhost:3000',
  schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/contacts.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);