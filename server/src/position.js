const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Position = new Schema({
  title: { type: String, required: true, maxLength: 100 },
  requirements: [{ type: string }],
});
