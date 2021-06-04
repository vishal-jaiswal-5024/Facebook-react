import "./rightbar.css"
export default function Rightbar(profile){
    const HomeRightbar= () => {
        return(
            <>
            <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/download1.jfif" alt=""/>
                    <span className="birthdayText"><b>Shreya</b> and <b>3 other friend.</b> have birthday today</span>

                </div>
                <img className="rightbarAd" src="/assets/images.png" alt=""/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/images1.jfif"alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Krista</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/images4.jfif"alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Riya</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/images6.jfif"alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Ritu</span>
                    </li>
                </ul>

            </>
        );
    };

    const ProfileRightbar=() => {
        return(
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City</span>
                    <span className="rightbarInfoKey">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From</span>
                    <span className="rightbarInfoKey">Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship</span>
                    <span className="rightbarInfoKey">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/images6.jfif" alt=""/>
                    <span className="rightbarFollowingName">Neha</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/images1.jfif" alt=""/>
                    <span className="rightbarFollowingName">Riya</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/images4.jfif" alt=""/> 
                    <span className="rightbarFollowingName">Priya</span>
                </div>
                <div className="rightbarFollowing">
                    <img className="rightbarFollowingImg" src="/assets/images5.jfif" alt=""/>
                    <span className="rightbarFollowingName">Ruhi</span>
                </div>
            </div>
            </>
            )
    }


    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <ProfileRightbar/>

            </div>
        </div>
    );
}