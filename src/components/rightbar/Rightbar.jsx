import React from 'react'
import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className='birthdayImg' />
          <span className="birthdayText">
            <b>Pola Foset</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className='rightbarAd'/>
        <h4 className="rightbarTitle">Online friends</h4>
        <ul className="rightbarFriendsList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lzukas Martin</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/8.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Timothy Stone</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/9.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Melinda Hoop</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/10.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Martina Gueye</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/5.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tom Pzcola</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lzukas Martin</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/8.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Timothy Stone</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/9.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Melinda Hoop</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/10.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Martina Gueye</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/person/5.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tom Pzcola</span>
          </li>
          
        </ul>
      </div>
    </div>
  )
}
