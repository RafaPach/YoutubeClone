import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

import { logo } from '../utils/constants.js';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: 'sticky',
      background: 'black',
      top: 0,
      justifyContent: 'space-between',
    }}
  >
    <Link to="/home" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="logo" height={45}></img>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
