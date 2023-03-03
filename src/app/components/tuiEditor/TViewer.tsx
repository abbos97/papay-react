import React, { useEffect, useRef, useState } from "react";
import { Box, Stack } from "@mui/material";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const TViewer = (props: any) => {
  const editorRef = useRef(null);

  return (
    <Stack sx={{ background: "#fff", mt: "30px", borderRadius: "10px" }}>
      <Box sx={{ m: "40px" }}>
      <Viewer
        ref={editorRef}
        initialValue={props.text}
        //height="600px"
/>
      </Box>
    </Stack>
  );
};

export default TViewer;
