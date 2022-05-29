import React from 'react'

import { Button,Checkbox } from '@mui/material'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useState } from 'react';

import '../E_Sports_Community/e_sports.css'

const E_Sports = () => {

  const [Likes,setLikes] = useState(true);
  const [sub,setSub] = useState(true);

  return (
    <div className='welcome-area community_section'>
      <div className="E_sports_modal_area">
        <div className="community_main_info main_info_container">
          <div className="main_info_card">
            <div className="main_info_box">
            <h3>E-Sports</h3>
            Esports, electronic sports, is a field in which individuals and teams compete for top scores in a range of video games. Today’s most popular esports games include FIFA, League of Legends, Fortnite, Counter-Strike, and StarCraft. Games like Overwatch coordinate international teams and leagues that compete in nail-biting tournaments for awesome prizes. 
 Today’s esports champions are scoring massive million-dollar prize pools as spectators from around the world watch them game.

People of all ages can compete in esports for fun, to sharpen their skills.
              <Button onClick={() => setSub(!sub)} variant="contained" className='Subscribe_btn' sx={{
                 '&:hover': {
                   color : 'black',
                  background: 'white',
                },
                width: '50%',
                margin: 'auto',
                background: sub ? 'linear-gradient(to right, #e350f2, #2e26eb)' : "#fff",
                color : sub ? "#fff" : "#000"
              }} endIcon={<SubscriptionsIcon />}>
                {sub ? "SUBSCRIBE" : "UNSUBSCRIBE"}
              </Button>
            </div>
          </div>
        </div>
        <div className="community_stats_section stats_info_container">
          <div className="stats_info_card">
            <div className="stats_info_box">
              <div className="stats_info_col_1 stats_info_box_indi">
                <div className="stats_info_col_1_icon"><PeopleIcon className='stats_info_icon' sx={{color : '#5c30ec'}}/></div>
                <div className="stats_info_col_1_numbers">100</div>
              </div>
              <div className="stats_info_col_2 stats_info_box_indi">
                <div className="stats_info_col_2_icon"><Checkbox onClick={() => setLikes(!Likes)} className='stats_info_icon' 
                icon={<FavoriteBorderIcon sx={{color : '#5c30ec'}}/>} 
                checkedIcon={<FavoriteIcon sx={{color : '#5c30ec'}}/>}
                 /></div>
                <div className="stats_info_col_2_numbers">{Likes ? Likes-1 : Likes+1}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="community_sidebar_info sidebar_info_container">
          <div className="sidebar_info_card">
            <div className="E_sports_sidebar_info_box"></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default E_Sports