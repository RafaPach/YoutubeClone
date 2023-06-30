import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);
      console.log(data);
      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet&order=date`
      );

      setVideos(videosData?.items);
    };
    fetchResults();
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: '250px',
            background:
              'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={ChannelDetail} marginTop={'-110px'} />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
