import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Container, Stack, Button, Tab } from "@mui/material";
import moment from "moment";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export function MemberPosts(props: any) {
  return (
    <Box className={"post_content"}>
      {["1", "2", "3"].map((article) => {
        return (
          <Stack className={"all_aricle_box"} sx={{ curser: "pointer" }}>
            <Box className={"all_article_container"}>
            <Box
              className={"all_aricle_img"}
              sx={{ backgroundImage: `url("/auth/jony.png")` }}
            ></Box>
            <Box sx={{mt: "15px"}}>
              <Box alignItems={"center"} display={"flex"}>
                <img
                  src="/auth/jony.png"
                  width={"35px"}
                  style={{ borderRadius: "50%", marginRight: "10px", backgroundSize: "cover" }}
                />
                <span className={"all_article_author_user"}>Temur</span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "15px" }}
              >
                <span className={"all_article_title"}>Restauranlarga baho</span>
                <p className={"all_article_desc"}>Lazzat ajoyib restaurant</p>
              </Box>
            </Box>
              <Box>
                <Box
                  className={"article_share"}
                  style={{
                    width: "100%",
                    height: "auto",
                    marginBottom: "10px",
                  }}
                >
                  <Box
                    className={"article_share_main"}
                    style={{
                      color: "#fff",
                      marginLeft: "150px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span>{moment().format("YY-MM-DD HH:mm")}</span>
                    <Checkbox
                      sx={{ ml: "40px" }}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite style={{ color: "red" }} />}
                      checked={false}
                    />
                    <span style={{marginRight: "18px"}}>100</span>
                    <RemoveRedEyeIcon/>
                    <span style={{marginLeft: "18px"}}>1000</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Stack>
        );
      })}
    </Box>
  );
}
