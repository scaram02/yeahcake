const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cakeSchema = new Schema({
    cafe: String,
    city: String,
    country: String,
    notes: String,
    presentation: Number,
    taste: Number,
    texture: Number,
    price: Number,
user: 
{
    type: Schema.Types.ObjectId,
    ref: "User"
}
},
  {
    timestamps: true
  });

const Cake = mongoose.model("Cake", cakeSchema);
module.exports = Cake;