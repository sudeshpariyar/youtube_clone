import React, {useState} from 'react'
import MenuSharpIcon from '@material-ui/icons/MenuSharp'; 
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import Avatar from '@material-ui/core/avatar';
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className='header'>
            <div className="header__left">
                <MenuSharpIcon />
                <Link to='/'>
                <img 
                    className='header__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' 
                    alt=''
                />
                </Link>
            </div>
            <div className="header__centre">
                <input 
                onChange={e=>setInputSearch(e.target.value)} 
                value={inputSearch} 
                type='text' 
                placeholder='Search'
            />
            <Link to= {`/search/${inputSearch}`}>
                <SearchSharpIcon className='header__searchicon'/>
            </Link>
                
            </div>
            <div className="header__icons">
                <VideoCallSharpIcon className="header__icon"/>
                <AppsSharpIcon className="header__icon"/>
                <NotificationsSharpIcon className="header__icon"/>
                <Avatar 
                    alt='Remy Sharp'
                    src ='https://www.facebook.com/search/async/profile_picture/?fbid=100005487278811&width=72&height=72'

                />
            </div>
            

        </div>
    )
}

export default Header
