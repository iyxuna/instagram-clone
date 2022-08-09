const express = require("express");
const router = express.Router();

const auth = require("./auth");
const post = require("./post");

router.get("/api/v1", async (req, res)=>{

});

router.use("/auth", auth);
router.use("/post", post);

module.exports = router;