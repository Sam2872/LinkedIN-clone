import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import { Home } from '@material-ui/icons'
import { SupervisorAccount } from '@material-ui/icons'
import { BusinessCenter } from '@material-ui/icons'
import { Chat } from '@material-ui/icons'
import { Notifications } from '@material-ui/icons'

function Header() {
    return (
        <div className='header'>
           <div className= 'header_left'>
               <img src='https:www.flaticon.com/svg/174/174857.svg' alt=''/>
                <div className= 'header_search'>
                        <SearchIcon/>
                        <input type='text'/>
                </div>
           </div>
           <div className= 'header_right'>
               <HeaderOption Icon={Home} title= 'Home'/>
               <HeaderOption Icon ={SupervisorAccount} title= 'My Network'/>
               <HeaderOption Icon ={BusinessCenter} title= 'Jobs'/>
               <HeaderOption Icon ={Chat} title= 'Messaging'/>
               <HeaderOption Icon ={Notifications} title= 'Notifications'/>
               <HeaderOption avatar='data:image/jpeg;base64,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' title= 'me'/>
           </div>
        </div>
    )
}

export default Header
