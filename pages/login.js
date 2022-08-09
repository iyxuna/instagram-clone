import React, {useState} from 'react';
import { useRouter } from 'next/router';
import axios from "axios";

const Login = props => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const router = useRouter();

    const handleSubmit = e => {
        axios.post("/auth/login", { email: email, password: password }).then(res=>{
           if( res.data.user ){
               router.push("/");
           }else{
               alert("이메일 또는 비밀번호가 다릅니다.");
               setEmail("");
               setPassword("");
           }
        });
        e.preventDefault();
    }

    const handleEmailChanged = e => {
        setEmail(e.target.value);
    }
    const handlePwChanged = e => {
        setPassword(e.target.value);
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
                                <div className="inputMainContainer">
                                    <div className="inputContainer flex">
                                        <input id="email" type={"text"} value={email} onChange={handleEmailChanged} className="maininputContainer" aria-label="임력 검색" placeholder="이메일 주소" />
                                    </div>
                                    <div className="inputContainer flex">
                                        <input id="password" type="password" value={password} onChange={handlePwChanged} className="maininputContainer" aria-label="임력 검색" placeholder="비밀번호" />
                                    </div>
                                </div>
                                <div className="loginbtContainer flex">
                                    <button id="loginbt" type="submit">로그인</button>
                                </div>
                            </form>
                            <div className="flex">
                                <div className="slice"></div>
                                <div className="tv-or">또는 </div>
                                <div className="slice"></div>
                            </div>
                            <div className="facebookLogainContainer flex">
                                <button className="facebookLoginbt">Facebook으로 로그인</button>
                            </div>
                        </div>
                    </div>
                    <div className="subContainer flex">
                        <div className="signupContainer">
                            <span>계정이 없으신가요? </span>
                            <a href="/register" className="signup">가입하기</a>
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
export default Login;