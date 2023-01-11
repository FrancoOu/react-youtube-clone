import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box} from '@mui/material'

import {ChannelDetail, Feed, NavBar, SearchFeed, VideoDetail} from './components'

function App(props) {
    return (
        <BrowserRouter>
            <Box sx={{backgroundColor:'#000'}}>
                <NavBar/>
                <Routes>
                    <Route path='/' exact element={<Feed/>}></Route>
                    <Route path='/video/:id' exact element={<VideoDetail/>}></Route>
                    <Route path='/channel/:id' exact element={<ChannelDetail/>}></Route>
                    <Route path='/search/:searchTerm' exact element={<SearchFeed/>}></Route>

                </Routes>
            </Box>
        </BrowserRouter>
    );
}

export default App;