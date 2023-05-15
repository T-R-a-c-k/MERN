const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitationSchema = new Schema({
  occurredDate: { type: Date, required: true },
  note: { type: String, maxLength: 200 },
  prescription: [{ type: Schema.Types.ObjectId, ref: "Prescription" }],
});

VisitationSchema.virtual("occuredDateFormatted").get(function () {
  return DateTime.fromJSDate(this.occuredDate).toLocaleString(
    DateTime.DATE_MED
  );
});

module.exports = mongoose.model("Visitation", VisitationSchema);
