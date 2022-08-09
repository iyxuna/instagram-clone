const express = require("express");
const router = express.Router();
const passport = require("../lib/passport");

const User = require("../models/user");

router.get("/", async (req, res)=>{
    const user_id = req.query.user;

    const result = await User.findOne({ user_id: user_id }).exec();
    // const findFlag = findInfo ? true : false;

    await res.json({ data: result });
});

//회원가입
router.post("/register", async (req, res)=>{
    const result = req.body;

    const findInfo = await User.findOne({ email: result.email }).exec(); //기존에 유저아이디,이메일 있는지 확인
    const findFlag = findInfo ? true : false;

    if( !findFlag ){
        const newUser = new User();

        newUser.user_id = result.user_id;
        newUser.user_name = result.user_name;
        newUser.email = result.email;
        newUser.password = result.password;
        newUser.profile_img = result.profile_img;

        await newUser.save();
        await res.json({ data: newUser, success: true, msg: "회원가입이 완료되었습니다." });
    }else{
        await res.json({ data: null, success: false, msg: "이미 가입된 메일입니다." });
    }
});

//로그인
router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }),
    (req, res)=>{
        res.json({ user: req.user });
    }
);

router.post("/logout", async (req, res)=>{
    if( req.session.cookie ){
        req.session.destroy(function(err){
            if(err) throw err;
            res.json({ success: true, msg: "로그아웃이 완료되었습니다." });
        })
    }else{
        res.json({ success: false, msg: "로그인 상태가 아닙니다. "});
    }
});

module.exports = router;