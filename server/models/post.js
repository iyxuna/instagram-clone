const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    profile_img: { type: String, default: "" }, //프로필사진
    user_id: { type: String, require: true }, //아이디
    post_img: { type: String, default: "" }, //게시글사진
    content: { type: String, default: "" }, //게시글내용
    tags: { type: Array, default: [] }, //게시글태그
    likes: { type: Array, default: [] } //좋아요
}, { timestamps: true });

module.exports = mongoose.model("post", postSchema, "post");