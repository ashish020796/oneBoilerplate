const mongoose = require("mongoose");
const modules = require("../config/rightsConfig");
const roleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  moduleRights: [
    {
      module: {
        type: String,
        required: true,
        enum: modules,
      },
      rights: {
        read: { type: Boolean, default: false },
        create: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
        update: { type: Boolean, default: false },
      },
    },
  ],
  specialRight:{type: Boolean, 
    default: false,}
});
module.exports = mongoose.model("role", roleSchema);
