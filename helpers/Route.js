let express = require('express');
let app = express();

express.application.group = express.Router.group =  function(path, configure){
    let router = express.Router();
    this.use(path, router);
    configure(router);
    return router;
};