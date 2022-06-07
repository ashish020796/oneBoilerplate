const bcrypt = require("bcrypt");
const userModel = require("../models/user");

const user = {
  async addUser(req, res) {
    if (
      req.body &&
      req.body.email &&
      req.body.password &&
      req.body.name &&
      req.body.gender
    ) {
req.body.password= await bcrypt.hash(req.body.password,10)

let added= await new userModel(req.body).save()
return res.send(added)

    }
    else{ return res.send("incomplete data")}
  },

  getUser(req, res) {},
  getUserByEmail(email) {},
};
module.exports = user;
