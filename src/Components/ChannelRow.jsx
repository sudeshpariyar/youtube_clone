import React from 'react';
import './ChannelRow.css';
import Avatar from '@material-ui/core/avatar';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';

function ChannelRow({image, channel, verified, subs, noOfVideos,description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo"
            alt={channel} src={image}/>
            <div className="channelRow__text">
                <h4>{channel}{verified && <CheckCircleOutlineSharpIcon/>}</h4>
                <p>{subs} subscribers - {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
