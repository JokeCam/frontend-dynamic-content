import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

import Post from "./Post/Post";

import "./Profile.less";

function Profile() {
    const userContext = useContext(CurrentUserContext);

    function handlePostsDisplay() {
        return userContext.posts?.map((elem) => {
            return <Post data={elem} key={elem.id} />
        });
    };

    return (
        <div className="profile">
            <div className="profile__main-container">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={userContext.avatar}/>
                </div>
                <div className="profile__info-container">
                    <h2 className="profile__name">{userContext.name}</h2>
                    <p className="profile__about">{userContext.about}</p>
                </div>
            </div>
            <div className="profile__posts">
                {
                    handlePostsDisplay()
                }
            </div>
        </div>
    );
};

export default Profile;
