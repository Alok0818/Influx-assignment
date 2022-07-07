const mongoose = require("mongoose");

const itemMasterSchema = new mongoose.Schema(
  {
    code: { type: Number, require: true },
    name: { type: String, require: true },
    price: { type: Number, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const ItemMasterSchema = mongoose.model("itemMaster", itemMasterSchema);
module.exports = ItemMasterSchema;
