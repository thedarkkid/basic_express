const Controllers = require("../controller");
const express = require("express");
const router = express.Router();


/*Members*/
//get all members
router.get("/members", Controllers.member.index);
//gets single member
router.get("/members/:id", Controllers.member.show);
//create a member
router.post("/members", Controllers.member.store);
//update a member
router.put("/members/:id", Controllers.member.edit);
//update a member
router.delete("/members/:id", Controllers.member.destroy);


module.exports = router;