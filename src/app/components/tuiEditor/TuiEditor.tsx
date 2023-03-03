import  { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import {
  Box,
  FormControl,
  MenuItem,
  Typography,
  Select,
  TextField,
  Container,
  Stack,
  Button,
} from "@mui/material";

export const TuiEditor = (props: any) => {
  const editorRef = useRef(null);

  return (
    <Stack>
      <Stack
        direction={"row"}
        style={{ margin: "40px", justifyContent: "space-between" }}
        justifyContent={"space-event"}
      >
        <Box className={"form_row"} style={{ width: "300px" }}>
          <Typography
            style={{ color: "rgb(225 255 233)", margin: "10px" }}
            variant="h3"
          >
            Category
          </Typography>
          <FormControl sx={{ width: "100%", background: "#fff" }}>
            <Select
              value={"celebrity"}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <span>Categoriyani tanlang</span>
              </MenuItem>
              <MenuItem value={"celebrity"}>Mashhurlar</MenuItem>
              <MenuItem value={"evaluation"}>Restaurant baho</MenuItem>
              <MenuItem value={"story"}>Mening hikoyam</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className={"form_row"} style={{ width: "300px" }}>
          <Typography
            style={{ color: "rgb(225 255 233)", margin: "10px" }}
            variant="h3"
          >
            Mavzu
          </Typography>
          <TextField
            id="filled-basic"
            label="Mavzu"
            variant="filled"
            style={{ width: "300px", background: "#fff" }}
          />
        </Box>
      </Stack>

      {/* @ts-ignore */}

      <Editor
        ref={editorRef}
        placeholder="Type here"
        previewStyle="vertical"
        height="640px"
        initialEditType="wysiwyg"
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["image", "table", "link"],
          ["ul", "ol", "task"],
        ]}
        hooks={{
          addImageBlobHook: async (image: any, callback: any) => {
            return false;
          },
        }}
        events={{ load: function (param: any) {} }}
      />
      <Stack direction={"row"} justifyContent={"center"}>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "30px", width: "250px", height: "45px" }}
        >
          Registor
        </Button>
      </Stack>
    </Stack>
  );
};
