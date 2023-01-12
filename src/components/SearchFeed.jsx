import React, {useEffect, useState} from 'react';

import {Box, Typography} from "@mui/material";
import { Videos} from "./";

import {fetchFromAPI} from "../utils/fetchFromAPI";
import {useParams} from "react-router-dom";

function SearchFeed(props) {

    // initialise states using hooks
    const [videos,setVideos] = useState([])
    const {searchTerm} = useParams()

    // fetch video data from api when selected category is changed
    useEffect(() =>{
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>{
            // set the new videos array
            setVideos(data.items)
        })
    },[searchTerm])
    console.log(videos)

    return (
            <Box p={2} sx={{
                overflowY: 'auto',
                height: '90vh',
                flex: 2
            }}>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
                    Search Results for: <span style={{color: '#F31503'}}>{searchTerm}</span> Videos
                </Typography>
                <Videos videos={videos}/>
            </Box>
    );
}

export default SearchFeed;