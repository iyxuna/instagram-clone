import React, {useState} from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import axios from "axios";

const Write = ({_profile}) => {
    const [ profile_img, setUser ] = useState("");
    const [ user_id, setUserId ] = useState("");
    const [ post_img, setImage ] = useState("");
    const [ content, setContent ] = useState("");
    const [ tags, setTag ] = useState("");
    const [ likes, setLikes ] = useState("");

    const router = useRouter();

    const handleSubmit = e => {
        axios.post("/post/write", { profile_img: _profile.profile_img, user_id: _profile.user_id, post_img: post_img, content: content, tags: tags, likes: likes }).then(res=>{
            if( res.data.success ){
                alert(res.data.msg);
                router.push("/");
            }else{
                setImage("");
                setContent("");
                setTag("");
            }
        })
        e.preventDefault();
    }

    const handleContentChanged = e => {
        setContent(e.target.value)
    }
    const handleTagChanged = e => {
        setTag(e.target.value);
    }

    return (
        <>
            <div className={"container"}>
                <div className={"post-container"}>
                    <div className={"post-wrap"}>
                        <header>
                            <button type={"button"}>
                                <img src={"https://dhgilmy0l2xzq.cloudfront.net/c042d6e4-7898-4e88-a623-2fec949a577b-20220805105639.png"}/>
                            </button>
                            <h1>새 게시물 만들기</h1>
                            <button type={"button"} className={"share_btn"} onClick={handleSubmit}>공유하기</button>
                        </header>
                        <div className={"write"}>
                            <div className={"img-area"}>
                                <div className={"area-box"}>
                                    <label htmlFor={"img_file"}>파일 선택</label>
                                    <input type={"file"} id={"img_file"}/>
                                </div>
                            </div>
                            <div className={"text-area"}>
                                <div className="myProfile">
                                    <img className="pic" src={_profile.profile_img}/>
                                    <span className="userID point-span">{_profile.user_id}</span>
                                </div>
                                <div className={"area-box"}>
                                    <textarea className={"input_text"} value={content} onChange={handleContentChanged} placeholder={"문구 입력..."}/>
                                </div>
                                <div className={"area-box"}>
                                    <input type={"text"} className={"input_tag"} value={tags} onChange={handleTagChanged} placeholder={"태그 추가"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = async ctx=>{
    const _query = ctx.query;
    const user = ctx.req.user ? ctx.req.user.user_id : "undefined";
    const profile = await axios.get(`http://localhost:3000/auth?user=${user}`);

    // console.log("user: ", user)
    // console.log("profile: ", profile.data.data);

    return{
        props : {
            _profile: profile.data.data
        }
    }
}
export default Write;