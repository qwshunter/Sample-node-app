const { RequestAuthRegister, ResponseAuthRegister, } =  require('../viewModel/auth');
const { ExpressSwagger } =  require('node-swagger-ui-express');
const  express  =  require('express');
const  router  =  express.Router();

ExpressSwagger.initController('/api/lego', express, router);

router.get('/material', async (req, resp) => {
    return  resp.send("Welcome to Piranha SAP Integration Virendra!!");
}).toSwagger(ResponseAuthRegister, RequestAuthRegister);

module.exports  = (app) =>  app.use(router.controller, router);