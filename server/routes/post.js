const express = require("express");
const router = express.Router();

const Post = require("../models/post");

router.get("/", async (req, res)=>{
    const _user = req.query;

    console.log("get: ", _user)
    const result = await Post.find({ user_id: _user.user }).exec();
    res.json({ data: result });
});

router.get("/:user/:followings", async (req, res)=>{
    const result = req.params;

    console.log("params: ", result)
    // post user_id가 나인것과 팔로잉인 것들을 어떻게 find 하는지 모르겠다ㅜ

    res.json({ data: result });
});

//게시물 작성
router.post("/write", async (req, res)=>{
    const result = req.body;

    const newPost = new Post;

    newPost.profile_img = result.profile_img;
    newPost.user_id = result.user_id;
    newPost.content = result.content;
    newPost.tags = result.tags;

    await newPost.save();
    await res.json({ data: newPost, success: true, msg: "게시물 작성이 완료되었습니다." });
});



module.exports = router;