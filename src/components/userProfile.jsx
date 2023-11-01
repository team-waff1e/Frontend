import React, { useState, useEffect } from 'react';

// 
export default function UserProfile({ user, loggedInUser, onFollowClick, isFollowing, profileUser }) {
    // const [ loginInfo, setLoginInfo ] = useState({ 
    //     email: "eeeee", 
    //     pwd: "pwpwpwpw", 
    //     follower : 0, 
    //     following: 0, 
    //     user_created_date : "2021.10.23", 
    // });
    const { email, name, nickname, follower, following, user_created_date } = profileUser;
    return (
        <div className='container border'> 
            <div>               
                <header> {name} </header>
                <p> post_count</p>
            </div>
            <div style = {{widht : 100 }} >
            </div>
  
            <div className='border'> 
                <div className='d-flex justify-content-between'>
                    <div className='rounded-circle'>
                        {loggedInUser ?  <p>linked_img</p> : <p>img</p>}
                    </div>

                    <div className='rounded-pill'>
                    {loggedInUser && user.id === loggedInUser.id && (
                        <button>Edit Profile</button>
                    )}
                    {loggedInUser && user.id !== loggedInUser.id && (
                        <button onClick={() => onFollowClick(user.id)}>
                        {isFollowing ? 'Unfollow' : 'Follow'}
                        </button>
                    )}
                    </div>
                </div>
  
                <div className='border d-flex flex-column'>
                    <div> {email}</div>
                    <div>{nickname}</div>
                    <div>{user_created_date}</div>

                    {
                    <div className='d-flex justify-content-start'>
                        <div>
                            팔로잉  :  {following}
                        </div>
                        <div>
                            팔로워  :  {follower}
                        </div>
                    </div>
                    }
                </div>
  {/* 
                <Member name={}/>
                <Member name={}/> */}
  
            </div>
        </div>
    )
  }

