const User = require("../models/User");
class Pages{
    index(req, res){
        res.render('index', {
            title: "Members Lounge",
            members: User.members
        });
    }
}
module.exports = Pages;