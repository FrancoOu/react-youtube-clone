import React from 'react';
import {Link} from 'react-router-dom';
import {Typography, Card, CardContent, CardMedia} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from "../utils/constants";

// shows the basic information of video including title,
function VideoCard({video:{id:{videoId},snippet}}) {
    console.log(videoId,snippet)
    return (
        <Card>
            {/*question marks to avoid undefined*/}
            {/* navigate to customized video page*/}
            {/*<Link to={`https://www.youtube.com/${videoId}`}>*/}

            {/* navigate to original YouTube video page*/}
            <a href={`https://www.youtube.com/watch?v=${videoId}`}>
                <CardMedia
                    sx={{width: 358, height: 180}}
                    alt={snippet?.title}
                    image={snippet?.thumbnails?.high?.url}/>
            </a>
                {/*</Link>*/}
        </Card>
    );
}

export default VideoCard;