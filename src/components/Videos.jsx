import React from 'react';
import {Stack, Box} from '@mui/material'
import {VideoCard, ChannelCard} from "./";


function Videos({videos}) {

    return (
        <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
            {videos.map((item,idx)=>(

                // TODO: to add playlist card.
                // I don't want to show the playlist yet, so I added a condition here. Otherwise there will be some extra space between videos
                !item.id.playlistId && <Box key={idx}>

                    {/*undefined will be created if no id */}
                    {item.id.videoId && <VideoCard video={item}/>}
                    {item.id.channelId && <ChannelCard channelDetail={item}/>}

                </Box>
            ))}
        </Stack>
    );
}

export default Videos;