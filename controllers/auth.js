const userCtlr = require("./user");
const jwt = require("jsonwebtoken");
const jwtSecret = "one.com.boilerplate";
const bcrypt = require("bcrypt");

expireTime = 100 * 60 * 60 * 24;

module.exports = {
  async login(req, res) {
    if (req.body.email && req.body.password) {
      const user = await userCtlr.getUserByEmail();
      if (user) {
        let matchResult = await bcrypt.compare(
          req.body.password,
          user.password
        );

        if (matchResult) {
          delete user.password;

          return res.send({
            expiresAt: new Date().getTime() + expireTime,
            token: generateToken(user, expireTime / 1000),
            userData: user,
          });
        } else {
          return res.send("Wrong password");
        }
      } else {
        return res.send("user not found");
      }
    } else {
      return res.send("pls provide username or email");
    }
  },
};

function generateToken(userData,expiresIn){
return jwt.sign(userData,jwtSecret,{expiresIn})

}
