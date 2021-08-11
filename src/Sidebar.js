import { Avatar } from '@material-ui/core';
import React from 'react'
import'./Sidebar.css';


function Sidebar() {

    const recentItem =(topic)=>(
      <div className='sidebar_recent'>
        <span className='sidebarHash'>#</span>
        <p>{topic}</p>
      </div>
    );
    return (
        <div className='sidebar'>
           <div className='sidebarTop'>
                <img src='data:image/jpeg;base64,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' alt='dsn' />
                <Avatar className= "sidebar_avatar"/>
                <h2>JOHN SAMUEL </h2>
                <h4>johnsam2872@gmail.com</h4>
           </div>
           <div className='sidebarStats'>
               <div className='sideBar_stat'>
                    <p>Who viewed</p>
                    <p className='statNumber'>2,543</p>
               </div>
               <div className='sideBar_stat'>
                   <p>Views on post</p>
                    <p className='statNumber'>2,464</p>
               </div>
               
           </div>
                <div className="sidebarBottom">
                    <p>Recent</p>
                    {recentItem("ReactJs")}
                    {recentItem('programming')}
                    {recentItem('nodeJs')}
                    {recentItem('design')}
                    {recentItem('developer')}
               </div>
        </div>
    )
}

export default Sidebar
