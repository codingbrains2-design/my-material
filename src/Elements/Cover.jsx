import React from "react";
import Container from "@mui/material/Container";
import { Box, Toolbar, ImageList, Typography } from "@mui/material";

const Cover = () => {
  return (
    <>
      <Box component="main" sx={{ p: 3, background: "#060709" }}>
        <Container maxWidth="xl">
          <Toolbar />
          <div className="pageCover">
            <Box
              component="img"
              src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/google-quiz.jpg?width=595&height=400&name=google-quiz.jpg"
            ></Box>
            <Box  className="coverText" component="div">
              <Typography variant="h4" color="#fff">Experience Media Like Never Before</Typography>
              <Typography variant="span" color="#fff">Enjoy award-winning stereo beats with wireless listening freedom and sleek, streamlined with premium padded and delivering first-rate playback.</Typography>
            </Box>
          </div>
        </Container>
      </Box>
      <Box>
        
      </Box>
    </>
  );
};

export default Cover;
