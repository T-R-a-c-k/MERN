const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { DateTime } = require("luxon");

const VisitationSchema = new Schema(
  {
    occurredDate: { type: Date, required: true },
    note: { type: String, maxLength: 200 },
    prescription: [{ type: Schema.Types.ObjectId, ref: "Prescription" }],
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

VisitationSchema.virtual("occurredDateFormatted").get(function () {
  return DateTime.fromJSDate(this.occurredDate).toLocaleString(
    DateTime.DATE_MED
  );
});

module.exports = mongoose.model("Visitation", VisitationSchema);
