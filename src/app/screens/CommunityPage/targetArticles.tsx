import React from "react";
import { Box, IconButton, Link, Stack } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";
// import moment from "moment";

export function TargetArticles(props: any) {
  return (
    <Stack>
      {props.targetBoArticles?.map((article: any, index: string) => {
        //const art_image_url = "/auth/jony.png";
        return (
          <Link
            className={"all_article_box"}
            sx={{ textDecoration: "none" }}
            href={``}
          >
            <Box
              className={"all_article_img"}
              //    sx={{ backgroundImage: `url(/auth/jony.png)` }}
            ></Box>
            <Box className={"all_article_container"}>
              <Box alignItems={"center"} display={"flex"}>
                <img
                  src="/auth/jony.png"
                  alt=""
                  width={"35px"}
                  style={{ borderRadius: "50%", backgroundSize: "cover" }}
                />
                <span className={"all_article_author_user"}>Jony</span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "15px" }}
              >
                <span className={"all_article_title"}>Evaluation</span>
                <p className={"all_article_desc"}>Lazzat eng zor restaurant</p>
                <Stack flexDirection={"row"} className={"all_article_date_box"}>
                  <Box className={"all_article_date date"}>22-05-15 02:08</Box>
                  <Box className={"all_article_date favorite"}>
                    <FavoriteBorder />1
                  </Box>
                  <Box className={"all_article_date favorite"}>
                    <RemoveRedEyeIcon />2
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}
