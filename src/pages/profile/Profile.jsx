import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";


export default function Profile() { 
    return (
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                    <img className="profileCoverImg" src="/assets/Linkedin-sport-background-004.jpg" alt=""/>
                    <img className="profileUserImg" src="/assets/images2.jfif" alt=""/>        
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">RobotGirl</h4>
                        <span className="profileInfoDesc">Hello My friend</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar/>


                </div>
            </div>
        </div>    
        </>
        
    )
}
