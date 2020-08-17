import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow'
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';

import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import PlayCircleOutlineSharpIcon from '@material-ui/icons/PlayCircleOutlineSharp';
import LocalOfferSharpIcon from '@material-ui/icons/LocalOfferSharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';

function Sidebar() {
    return (
        <div  className='sidebar'>
            
            <SidebarRow selected Icon={HomeSharpIcon} title ='Home'/>
            <SidebarRow Icon ={WhatshotSharpIcon}title="Trending"/>
            <SidebarRow Icon = {SubscriptionsSharpIcon}title = "Subscription"/>
            <hr/>
            <SidebarRow Icon = {VideoLibrarySharpIcon}title = "Library"/>
            <SidebarRow Icon = {HistorySharpIcon}title = "Histroy"/>
            <SidebarRow Icon = {PlayCircleOutlineSharpIcon}title = "Your videos"/>
            <SidebarRow Icon = {LocalOfferSharpIcon}title = "Purchases"/>
            <SidebarRow Icon = {WatchLaterSharpIcon}title = "Watch later"/>
            <SidebarRow Icon = {ArrowDropDownSharpIcon}title = "Show more"/>
            <hr/>
        </div>
    )
}

export default Sidebar
