module.exports = function (moduleName, rightName) {
  return function (req, res, next) {
    let found = false;

    req.user.user.roles.forEach((role) => {
      if (role.specialRight) {
        found = true;
      } else {
        role.moduleRights.forEach((right) => {
          if (right.rights[rightName] === true && right.module === moduleName) {
            found = true;
          }
        });
      }
    });
    if (found) return next();
    else {
      return res.send("Do not has module rights");
    }
  };
};
