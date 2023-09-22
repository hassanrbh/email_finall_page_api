var express = require("express")
const EmailModel = require("../models/emails")
var router = express.Router()

router.post("/subscribe_to_list", async (req, res) => {
  const postData = req.body
  try {
    const email = await EmailModel.create(postData);
    if (!email) return res.status(400).json({ data: null, status: "notoke" })
    res.status(200).json({
      data: email,
      msg: "oke"
    })
  } catch (e) {
    res.status(400).json({
      data: null,
      status: "notoke"
    })
  }

})

module.exports = router;