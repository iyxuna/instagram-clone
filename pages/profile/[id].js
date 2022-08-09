import React, {useEffect, useState} from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import axios from "axios";
import {useParams} from "react-router-dom";

const Index = ({_profile, _post=[]}) => {
    const router = useRouter();

    const handleLogout = e => {
        axios.post("/auth/logout", ).then(res=>{
            if( res.data.success ){
                alert(res.data.msg);
                router.push("/login");
            }else{
                alert(res.data.msg);
                router.push("/login");
            }
        });
        e.preventDefault();
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
                    <input id="searchInput" type="search" className="input-search" placeholder="검색"/>
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
                <div className={"profile-page"}>
                    <div className={"profile-head"}>
                        <div className={"head-left"}>
                            <div className={"img-box"}>
                                <img src={_profile.profile_img}/>
                            </div>
                        </div>
                        <div className={"head-right"}>
                            <div className={"head-right-top"}>
                                <span className={"profile-page-username"}>{_profile.user_id}</span>
                                <div className={"profile-page-buttons"}>
                                    <button>팔로우</button>
                                    <button onClick={handleLogout}>로그아웃</button>
                                </div>
                            </div>
                            <div className={"head-right-center"}>
                                <div className={"post-count"}>
                                    <b>{_post.length}</b>
                                    <span>posts</span>
                                </div>
                                <div className="follower-count">
                                    <b>{_profile.followers.length}</b>
                                    <span>followers</span>
                                </div>
                                <div className="following-count">
                                    <b>{_profile.followings && _profile.followings.length}</b>
                                    <span>followings</span>
                                </div>
                            </div>
                            <div className={"head-right-bottom"}>
                                <b>{_profile.user_name}</b>
                            </div>
                        </div>
                    </div>
                    <div className={"profile-body"}>
                        <div className={"profile-nav-tabs"}></div>
                        <div className={"profile-post-grid"}>
                            {_post.map((post) => (
                                <div className="grid-post" key={post._id}>
                                    <div className={"post-wrapper"}>
                                        <div className={"post-image"}>
                                            <img src={post.post_img} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

Index.getLayout = page=>{
    const { props } = page
    return(
        <>
            <GlobalLayout>
                {page}
            </GlobalLayout>
        </>
    )
}

export const getServerSideProps = async ctx=>{
    const _query = ctx.query;
    const user = ctx.req.user ? ctx.req.user.user_id : "undefined";
    const profile = await axios.get(`http://localhost:3000/auth?user=${user}`);
    const post = await axios.get(`http://localhost:3000/post?user=${user}`);

    return{
        props : {
            _profile: profile.data.data,
            _post: post.data.data
        }
    }
}
export default Index;