import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI.js';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    const fetchData = async () => {
      const data = await fetchFromAPI(
        `search?part=snippet&q=${selectedCategory}`
      );

      const { items } = data;
      setVideos(items);
    };
    fetchData();

    // const response = await fetch(`https://craveaway.herokuapp.com/recipes`);
    // const data = await response.json();
    // const { payload } = data;
    // setVideos(data);
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright © 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
