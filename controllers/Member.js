User = require("../models/User");
uuid = require("uuid");

class Member{
    index(req, res){
        res.send(User.members)
    }

    show(req, res){
        let members = User.members;
        let result, status;
        const found = members.some( member => member.id === parseInt(req.params.id));
        if(found){
            result = members.filter(member => member.id === parseInt(req.params.id));
            status = 200;
        }else{
            result = {error: "member not found"};
            status = 400;
        }
        res.status(status).send(result);
    }

    store(req, res){
        const newMember = {
            id: uuid.v4(),
            name: req.body.name,
            email: req.body.email,
            status: "active"
        };

        if(!newMember.name || !newMember.email){
            return res.status(400).send({error: "please include name and email"});
        }

        User.members.push(newMember);
        res.send(newMember);
    }

    edit(req, res){
        let members = User.members;
        let result, status;
        const found = members.some( member => member.id === parseInt(req.params.id));
        if(found){
            const updMember = req.body;
            members.some(member => {
                if(member.id === parseInt(req.params.id)){
                    member.name = updMember.name? updMember.name : member.name;
                    member.email = updMember.email? updMember.email : member.email;
                    result = member;
                    return true;
                }
            });
            status = 200;
        }else{
            result = {error: "member not found"};
            status = 400;
        }
        res.status(status).send(result);
    }

    destroy(req, res){
        let members = User.members;
        let result, status;
        const found = members.some( member => member.id === parseInt(req.params.id));
        if(found){
            result = {
                success: "member deleted",
                members: members.filter(member => member.id !== parseInt(req.params.id))
            };
            status = 200;
        }else{
            result = {error: "member not found"};
            status = 400;
        }
        res.status(status).send(result);
    }
}

module.exports =  Member;