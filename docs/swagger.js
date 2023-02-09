const swaggerUi=require('swagger-ui-express');
const swaggerJSDocs=require('swagger-jsdoc');
const userRouteDocs=require('./user.docs');
const blogRouteDocs=require('./post.docs');
const messageRouteDocs=require('./message.docs');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'APIs Documentations',
      description: 'mybrand-api.',
    },
    servers: [
      {
        url: 'http://localhost:8000',
        description: 'Development server',
      },
      {
        url: 'http://localhost:8000',
        description: 'Production server',
      },
    ],
    tags: [
      { name: 'User', description: 'User Routes' },
      { name:'Message' , description:"Message Routes"},
      { name: 'Blog', description: 'Blog Routes' },
    ],
    components: {
      securitySchemes: {
        token: {
          type: 'apiKey',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name:"token",
          in:"header"
        },
      },
    },
    paths: { ...userRouteDocs.userRouteDocs,...blogRouteDocs.blogRouteDocs,...messageRouteDocs.messageRouteDocs},
  },
  apis: ['../routes/**/*.js'],
};
const swaggerSpec = swaggerJSDocs(options);
const swaggerDocs = (app) => {
  app.use('/documentation-api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/documentation.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

module.exports= swaggerDocs;