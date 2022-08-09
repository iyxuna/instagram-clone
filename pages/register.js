import React, {useState} from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import axios from "axios";

const Register = props => {
    const [ user_id, setUserId ] = useState("");
    const [ user_name, setUserName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ profile_img, setProfileImg ] = useState("");

    const router = useRouter();

    const handleSubmit = e => {
        axios.post("/auth/register", { user_id: user_id, user_name: user_name, email: email, password: password, profile_img: profile_img }).then(res=>{
            if( res.data.success ){
                alert(res.data.msg);
                router.push("/login");
            }else{
                alert(res.data.msg);
                setEmail("");
            }
        });
        e.preventDefault();
    }

    const handleIdChanged = e => {
        setUserId(e.target.value);
    }
    const handleNameChanged = e => {
        setUserName(e.target.value);
    }
    const handleEmailChanged = e => {
        setEmail(e.target.value);
    }
    const handlePwChanged = e => {
        setPassword(e.target.value);
    }
    const handleImgChanged = e => {
        setProfileImg(e.target.value);
    }

    return (
        <>
            <div className="Container flex">
                <div className="ContainerLogin flex">
                    <div className="mainloginContainer">
                        <div className="loginContainer">
                            <form onSubmit={handleSubmit}>
                                <div className="loginLogo flex">
                                    <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" />
                                </div>
                                <h2 className="vvzhL">친구들의 사진과 동영상을 보려면 가입하세요.</h2>
                                <div className="facebookLogainContainer flex">
                                    <button className="facebookLoginbt">Facebook으로 로그인</button>
                                </div>
                                <div className="sliceContainer flex">
                                    <div className="slice"></div>
                                    <div className="tv-or">또는 </div>
                                    <div className="slice"></div>
                                </div>
                                <div className="inputMainContainer">
                                    <div className="inputContainer flex">
                                        <input id="user_name" className="maininputContainer" value={user_name} onChange={handleNameChanged} placeholder="성명" type="text" required={"require"} />
                                    </div>
                                    <div className="inputContainer flex">
                                        <input id="user_id" className="maininputContainer" value={user_id} onChange={handleIdChanged} placeholder="사용자 아이디" type="text" required={"require"} />
                                    </div>
                                    <div className="inputContainer flex">
                                        <input id="email" className="maininputContainer" value={email} onChange={handleEmailChanged} aria-label="임력 검색" placeholder="이메일 주소" type="text" required={"require"} />
                                    </div>
                                    <div className="inputContainer flex">
                                        <input id="password" className="maininputContainer" value={password} onChange={handlePwChanged} aria-label="임력 검색" placeholder="비밀번호" type="password" required={"require"} />
                                    </div>
                                    <div className="inputContainer flex">
                                        <input id="profile_img" className="maininputContainer" value={profile_img} onChange={handleImgChanged} aria-label="임력 검색" type="file" />
                                    </div>
                                </div>
                                <p className="ZGwn1">
                                    서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다.
                                    <a href="https://www.facebook.com/help/instagram/261704639352628" target="_blank"></a>
                                </p>
                                <div className="loginbtContainer flex">
                                    <button id="loginbt" type="submit">가입</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="subContainer flex">
                        <div className="signupContainer">
                            <span>계정이 있으신가요? </span>
                            <a href="/login" className="signup">로그인</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = async ctx=>{
    const _query = ctx.query;
    return{
        props : {
        }
    }
}
export default Register;