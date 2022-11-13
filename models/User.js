const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String, 
    cakes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Cake"
      }
    ]
},
  {
    timestamps: true
  });

const User = mongoose.model("User", userSchema);
module.exports = User;