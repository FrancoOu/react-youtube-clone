import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchFromAPI} from "../utils/fetchFromAPI";
import {Box, Stack} from "@mui/material";
import {ChannelCard, Sidebar, Videos} from "./index";


function ChannelDetail(props) {
    const [channelDetail,setChannelDetail] = useState(null)
    const [videos,setVideos] = useState([])
    const {id} = useParams()

    console.log(channelDetail,videos)
    useEffect(()=>{
        // fetch channel detail and videos of the channel

        fetchFromAPI(`channels?part=snippet,id&id=${id}`).then((data)=>
            setChannelDetail(data?.items[0])
        )

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>
            setVideos(data?.items)
        )
    },[id])

    return (
        <Box minHeight='95vh'>
            <Box>
                <div style={{
                    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,114,121,1) 13%, rgba(0,212,255,1) 100%)',
                    zIndex:10,
                    height: '300px'
                }}/>
                <ChannelCard channelDetail={channelDetail} marginTop={'-93px'}/>
            </Box>
            <Box display='flex' p='2'>
                <Box sx={{mr:{sm: '100px'}}}/>
                    <Videos videos={videos}/>


            </Box>

        </Box>
    );
}

export default ChannelDetail;