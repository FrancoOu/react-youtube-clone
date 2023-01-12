import React from 'react';
import {Link} from 'react-router-dom';
import {Typography, Card, CardContent, CardMedia} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from "../utils/constants";

// shows the basic information of video including title,
function VideoCard({video:{id:{videoId},snippet}}) {
    console.log(videoId,snippet)
    return (
        videoId && (
            <Card sx={{
                width:{ md:'320px', xs:'100%'},
                boxShadow: 'none',
                borderRadius: 'none'
            }}>
                {/*question marks to avoid undefined*/}
                {/* navigate to customized video page*/}
                <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>

                    {/* navigate to original YouTube video page*/}
                    {/*<a href={`https://www.youtube.com/watch?v=${videoId}`}>*/}
                    <CardMedia
                        sx={{width: 358, height: 180}}
                        alt={snippet?.title}
                        image={snippet?.thumbnails?.high?.url}/>
                    {/*</a>*/}
                </Link>
                <CardContent sx={{backgroundColor: '#1e1e1e',height:'106px'}}>
                    <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
                        <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                            {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                        </Typography>
                    </Link>
                    <Link to={snippet?.channelId ? `/channel/${snippet.channelId}`:demoChannelUrl}>
                        <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                            {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
                            <CheckCircle sx={{fontSize:12, color: 'gray', ml: '5px'}}/>
                        </Typography>
                    </Link>
                </CardContent>
            </Card>
        )
    );
}

export default VideoCard;