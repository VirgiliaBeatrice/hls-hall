import React, {useState, useMemo, createContext} from 'react';
// import './App.css';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { useVideoJS } from "react-hook-videojs";
import "video.js/dist/video-js.css";
import RoomList from './Page';

import Button from '@mui/material/Button';
import { Container, createTheme, Divider, PaletteMode, ThemeProvider } from '@mui/material';

// function App() {
//   return <Button variant="contained">Hello World</Button>;
// }

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const lightTheme = createTheme({
  palette: {
    mode: 'light'
  }
});

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <div className="App">
        <Box
          display="flex"
          justifyContent="left"
          alignItems="left"
          sx={{ paddingX: 2}}
        >
          {/* Modify here to rename title */}
          <h1>VRSJ2022 Hall</h1>
        </Box>
        <Divider />
        <RoomList />
      </div>
      
      <Box
        sx={{
          position: 'static',
          bottom: 0,
          width: '100%',
        }}
      >
        <Divider />
        <Typography variant='body2' color="InfoText" align='right'>
          {'© '}
          {new Date().getFullYear()}
          {'  '}
          <Link color="inherit" href="https://github.com/VirgiliaBeatrice/hls-hall">
            Haoyan.Li
          </Link>
          {'  All rights reserved.'}
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
