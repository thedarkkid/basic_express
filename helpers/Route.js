var express = require('express');

class Route{
    group(arg1, arg2) {
        var fn, path;

        if (arg2 === undefined) {
            path = "/";
            fn = arg1;
        }
        else {
            path = arg1;
            fn = arg2
        }

        var router = express.Router();
        fn(router);
        express().use(path, router);
        return router;
    }
}

module.exports = new Route();