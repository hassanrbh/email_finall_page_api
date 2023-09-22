var mongoose = require("mongoose")

const EmailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  phone_number: { type: String },
}, { collection: "emails" })

const EmailModel = mongoose.model("Email", EmailSchema)

module.exports = EmailModel;