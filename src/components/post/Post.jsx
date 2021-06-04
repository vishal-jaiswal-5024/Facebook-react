import "./post.css"
import {MoreVert} from "@material-ui/icons"

export default function Post(){
    return(
        <div className="postWrapper">
             <div classname="postTop">
                 <div className="postTopLeft">
                     <img className="postProfileImg" src="/assets/images2.jfif" alt=""/>
                     <span className="postUsername">RobotGirl</span>
                     <span className="postDate"> 5 minute ago</span>
                 </div>
                 <div className="postTopRight">
                     <MoreVert/>
                 </div>
             </div>
             <div classname="postCenter">
                 <span className="postText">Hey,its mys first post :)</span>
                 <img className="postImg" src="/assets/images11.jfif" alt=""/>

             </div>
             <div classname="postBottom">
                 <div className="postBottomLeft">
                     <img className="likeIcon" src="/assets/facebook-love-png-44003.png" alt=""/>
                     <img className="likeIcon" src="/assets/facebook-love-png-43995.png" alt=""/>
                     <span className="postLikeCounter">32 people like it</span>

                 </div>
                 <div className="postBottomRight">
                     <span classsName="postCommentText">9 comments</span>
                 </div>
             </div>
        
        </div>
    )
}