import { RssFeed, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from '@mui/icons-material';
import React from 'react'
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon'/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className='sidebarIcon'/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIcon'/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon'/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon'/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon'/>
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIcon'/>
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon'/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">
          Show More
        </button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendsList">
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jack Wizard</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Kevin Schwager</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/5.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Kim Young</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Tina Welly</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/7.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Selen Clear</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jack Wizard</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Kevin Schwager</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/5.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Kim Young</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Tina Welly</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/7.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Selen Clear</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jack Wizard</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Kevin Schwager</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/5.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Kim Young</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Tina Welly</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/7.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Selen Clear</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jack Wizard</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Kevin Schwager</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/5.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Kim Young</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Tina Welly</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/7.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Selen Clear</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jack Wizard</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Kevin Schwager</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/5.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Kim Young</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Tina Welly</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/7.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Selen Clear</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John Doe</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/3.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Jack Wizard</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/4.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Kevin Schwager</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/5.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Kim Young</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/6.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Tina Welly</span>
          </li>
          <li className="sidebarFriend">
            <img src="/assets/person/7.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Selen Clear</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
