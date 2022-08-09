const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_id: { type: String, require: true }, //아이디
    user_name: { type: String, require: true }, //이름
    email: { type: String, require: true }, //메일
    password: { type: String, require: true }, //비밀번호
    profile_img: { type: String, default: "" }, //프로필사진
    followers: { type: Array, default: [] }, //팔로워
    followings: { type: Array, default: [] } //팔로잉
});

module.exports = mongoose.model("user", userSchema, "user");