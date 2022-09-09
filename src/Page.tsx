import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button, Checkbox } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import urlJoin from 'url-join';

import { useVideoJS } from "react-hook-videojs";
import "video.js/dist/video-js.css";

// Room name
const roomList = [
  'Room A',
  'Room B',
  'Room C',
  'Room D',
  'Room E',
  'Room F',
]

type VideoPlayerProps = {
  domain?: string;
  room?: string;
}

// Modify here
const URL1 = 'http://jvb2.titech.binaural.me';
const URL2 = 'http://jvb2.titech.binaural.me';
// src: 'http://jvb2.titech.binaural.me/hls/stream.m3u8',

const VideoPlayer: React.FC<VideoPlayerProps> = (prop: VideoPlayerProps) => {
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: prop.domain === undefined? 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8' : urlJoin(prop.domain, 'hls', prop.room + ".m3u8"),
      type: 'application/x-mpegURL'
    }]
  };

  const { Video, player, ready } = useVideoJS(
    videoJsOptions
  );

  if (ready) {

  }

  return (
    <div>
      <Video />
    </div>
    );
}


export default function Page() {
  const [checked, setChecked] = React.useState<number[]>([]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    // console.log("checked state updated.")
  }, [checked])

  return ( 
      <Grid container>
        <Grid 
        item xs={4} sm={4} md={2} lg={1} xl={1}>
          <List dense>
            {roomList.map((value, idx) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <div key={idx}>
                  <ListItem disablePadding
                    sx={{ textOverflow: 'ellipsis' }}
                  >
                    <ListItemButton
                      onClick={handleToggle(idx)}
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox 
                          edge="start"
                          checked={checked.indexOf(idx) !== -1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                          />
                      </ListItemIcon>
                      <ListItemText 
                        secondary={value}
                        />
                    </ListItemButton>
                  </ListItem>

                </div>
              )
            })}

            </List>
          </Grid>
          
          <Divider 
            orientation="vertical"
            flexItem
          />

          <Grid item xs>
            <Grid
              justifyContent="center"
              sx={{ p: 2}}
            container spacing={4}>
              {checked.sort().map((value, idx) => {
                let roomName = roomList[value];
                let size = checked.length > 1? 5 : 8;
                
                return (
                    <Grid 
                      key={idx}
                      item xs={8} sm={8} md={size} lg={size} xl={size}>
                      <Paper
                        elevation={3}>
                          <Box
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems="center"
                            sx={{ textOverflow: 'ellipsis' }}
                          >
                            <h2>{roomName}</h2>
                          </Box>
                        <Divider />
                        <Box
                          sx={{ p: 2 }}>
                          {/* Uncomment below to deployment version */}
                          {/* <VideoPlayer room={roomName.replace(/\s/g, '')} domain={URL1}/> */}
                          <VideoPlayer />
                        </Box>
                      </Paper>

                    </Grid>
              );
              })}
            </Grid>
          </Grid>
      </Grid>
  );
}