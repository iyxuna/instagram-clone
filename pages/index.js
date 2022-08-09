import React, {useState} from 'react';
import { useRouter } from 'next/router';
import axios from "axios";

const Index = ({_profile, _post=[]}) => {

    const handleSearch = e => {

    }

    return (
        <>
            <nav>
                <div className="nav-container">
                    <div className="nav-1">
                        <a href={"/"}>
                            <img className="logo_instagram_txt" src="https://dhgilmy0l2xzq.cloudfront.net/c972de7f-eb48-40a3-88ba-01eea2047e0b-20220802114916.png"/>
                        </a>
                    </div>
                    <input id="searchInput" type="search" className="input-search"  placeholder="검색"/>
                    <div className="nav-2">
                        <img src="https://dhgilmy0l2xzq.cloudfront.net/0d6462be-d06e-420e-9aaa-588374af337f-20220804180050.png"/>
                        <img src="https://dhgilmy0l2xzq.cloudfront.net/fea5772a-ea48-4491-8438-507554d86ef0-20220804180120.png"/>
                        <a href={"/write"}>
                            <img src="https://dhgilmy0l2xzq.cloudfront.net/3e6e8c11-589b-43d5-b3ea-92399c32c2f7-20220804180105.png"/>
                        </a>
                        <a href={"/profile/"+_profile.user_id}>
                            <img className="pic" src={_profile.profile_img}/>
                        </a>
                    </div>
                </div>
            </nav>

            <main>
                <div className={"feeds"}>
                    {/*<div className={"section-story"}>*/}
                    {/*    <ul className={"story-list"}>*/}
                    {/*        <li>*/}
                    {/*            <div className={"gradient-wrap"}>*/}
                    {/*                <img className={"img-profile story"} src={""} />*/}
                    {/*            </div>*/}
                    {/*            <div className={"profile-text"}>*/}
                    {/*                <span className={"userID point-span"}>dddd</span>*/}
                    {/*            </div>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    {_post.map((val, key)=>(
                        <article key={key}>
                            <header>
                                <div className={"profile-of-article"}>
                                    <img className={"img-profile pic"} src={val.profile_img} />
                                    <span className={"userID main-id point-span"}>{val.user_id}</span>
                                </div>
                                <img className={"icon-react icon-more"} src={"https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"} />
                            </header>
                            <div className={"main-image"}>
                                <img className={"mainPic"} src={val.post_img} />
                            </div>
                            <div className={"icons-react"}>
                                <div className="icons-left">
                                    <img className="icon-react" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                                    <img className="icon-react" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"/>
                                    <img className="icon-react" src="https://dhgilmy0l2xzq.cloudfront.net/fea5772a-ea48-4491-8438-507554d86ef0-20220804180120.png" />
                                </div>
                                <img className="icon-react" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" />
                            </div>
                            <div className={"reaction"}>
                                <div className={"liked-people"}>
                                    <p><span className={"point-span"}>{val.likes.length}명이 좋아합니다.</span></p>
                                </div>
                                <div className={"description"}>
                                    <p>
                                        <span className={"point-span userID"}>{val.user_id}</span>
                                        <span className={"at-content"}>{val.content}</span>
                                        <span className={"at-tag"}>{val.tags}</span>
                                    </p>
                                </div>
                            </div>
                            <div className={"hl"}></div>
                            <div className={"comment"}>
                                <input type={"text"} id={"input-comment"} className={"input-comment"} placeholder={"댓글 달기..."} />
                                <button type={"submit"} className={"submit-comment"}>게시</button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className={"main-right"}>
                    <div className={"myProfile"}>
                        <a href={"/profile/"+_profile.user_id}>
                            <img className={"pic"} src={_profile.profile_img} />
                        </a>
                        <div>
                            <span className={"userID point-span"}>{_profile.user_id}</span>
                            <span className={"sub-span"}>{_profile.name}</span>
                        </div>
                    </div>
                    {/*<div className={"section-recommend"}>*/}
                    {/*    <div className={"menu-title"}>*/}
                    {/*        <span className={"sub-title"}>회원님을 위한 추천</span>*/}
                    {/*        <span className={"find-more"}>모두 보기</span>*/}
                    {/*    </div>*/}
                    {/*    <ul className={"recommend-list"}>*/}
                    {/*        <li>*/}
                    {/*            <div className={"recommend-friend-profile"}>*/}
                    {/*                <img className={"img-profile"} src={""} />*/}
                    {/*                <div className={"profile-text"}>*/}
                    {/*                    <span className={"userID point-span"}>추천 아이디</span>*/}
                    {/*                    <span className={"sub-span"}>팔로우합니다</span>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
            </main>

            {/*<div className={"modal-box"}>*/}
            {/*    <div className={"modal-head"}>*/}

            {/*    </div>*/}
            {/*    <form className={"modal-body"}>*/}
            {/*        <div className={"modal-body-top"}>*/}
            {/*            <img className="pic" src={_profile.profile_img}/>*/}
            {/*            <input className={"modal-text-input"} type={"text"} placeholder={"Write a post"} />*/}
            {/*            <input className={"modal-text-input"} type={"text"} placeholder={"Write a tag"} />*/}
            {/*            <button type={"submit"}>공유하기</button>*/}
            {/*        </div>*/}
            {/*        <div className={"modal-buttons"}>*/}
            {/*            <input type={"file"} id={"post_img"}/>*/}
            {/*        </div>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </>
    );
};

export const getServerSideProps = async ctx=>{
    const _query = ctx.query;
    const user = ctx.req.user ? ctx.req.user.user_id : "undefined";
    const followings = ctx.req.user ? ctx.req.user.followings : "undefined";
    const profile = await axios.get(`http://localhost:3000/auth?user=${user}`);
    const post = await axios.get(`http://localhost:3000/post?user=${user}&followings=${followings}`);

    // console.log("user: ", user)
    // console.log("followings: ", followings)
    // console.log("profile: ", profile.data.data);
    // console.log("post: ", post.data.data)

    return{
        props : {
            _profile: profile.data.data,
            _post: post.data.data
        }
    }
}
export default Index;