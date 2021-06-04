import "./topbar.css"
import { Search,Person,Chat,Notifications } from "@material-ui/icons"
export default function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Facebook</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="search for friend,post or video" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">3</span>
                </div>
                <img src="/assets/images2.jfif" alt=" " className="topbarImg"/>
            </div>
        </div>
    )
}