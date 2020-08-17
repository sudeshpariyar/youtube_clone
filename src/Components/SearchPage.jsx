import React from 'react'
import './SearchPage.css';
import TuneSharpIcon from '@material-ui/icons/TuneSharp';
import ChannelRow from './ChannelRow';
function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage__filter">
                <TuneSharpIcon/>
                <h2>Filter</h2>
            </div>
            <hr/>

            <ChannelRow
                image='https://yt3.ggpht.com/a/AATXAJycZexW8cHyxlG__S2Tj8Ey6eZWKB3vf0z34lgUkg=s176-c-k-c0x00ffffff-no-rj-mo'
                channel='Nepali Guitar Tutorial'
                verified
                subs='79.5K'
                noOfVideos='279'
                description="It's not about Learnig the songs, it's about Learning it te Right way."
            />
            <hr/>
        </div>
    )
}

export default SearchPage
