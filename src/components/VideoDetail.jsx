import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import ReactPlayer from "react-player";
import {Link, useParams} from "react-router-dom";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import {CheckCircle} from "@mui/icons-material";
import {Videos} from "./index";

function VideoDetail(props) {

    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState([])

    // get the video id from the url
    const {id} = useParams()

    // fetch original video and related videos
    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(
            (data) => setVideoDetail(data.items[0])
        )

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
            (data) => setVideos(data.items)
        )
    }, [id])
    if (!videoDetail?.snippet) {
        return 'Loading...'
    }
    const {snippet: {title, channelId, channelTitle, description}, statistics: {viewCount, likeCount}} = videoDetail

    return (
        <Box minHeight='95vh'>
            <Stack direction={{xs: 'column', md: 'row'}}>
                <Box flex={1}>
                    <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
                        <ReactPlayer className='react-player' url={`https://www.youtube.com/watch?v=${id}`} controls/>
                        <Typography color='#fff' variant='h5' fontWeight='bold' p='2'>
                            {title}
                        </Typography>
                        <Stack direction='row' justifyContent='space-between' sx={{
                            color: '#fff', py: '1', px: '2'
                        }}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant='subtitle1'  color="#fff" >

                                {channelTitle}
                                    <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                                </Typography>
                            </Link>

                            <Stack direction='row' gap='20px' alignItems='center'>
                                <Typography variant='body1' sx={{opacity: '0.7'}}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                                <Typography variant='body1' sx={{opacity: '0.7'}}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack direction='row' width='50%' mx='50px'>
                            <Typography variant='subtitle1' color='#fff'
                            >
                                {description}
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center'>
                    <Videos direction='column' videos={videos} />
                </Box>
            </Stack>

        </Box>

    );
}

export default VideoDetail;