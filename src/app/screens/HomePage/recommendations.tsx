import { Box, Container, Stack } from "@mui/material";
import React from "react";

export function Recommendations() {
  return (
    <div className="top_article_frame">
      <Container>
        <Stack flexDirection={"column"}>
          <Box className="events_text">
            <span className="category_title">Tafsiya qilingan maqolalar</span>
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            sx={{ width: "1193px" }}
          >
            <Stack flexDirection={"column"}>
              <Box className="article_text">Ko’p ko’rilgan</Box>
              <Stack className="article_box">
                <img
                  src="/restaurant/article-food-1.png"
                  className="article_box_img"
                  alt=""
                />
                <Stack flexDirection={"column"} sx={{ mt: "14px", ml: "10px" }}>
                  <Stack flexDirection={"row"}>
                    <img
                      src="/restaurant/ellipse.png"
                      className="article_cook"
                      alt=""
                    />
                    <Box className="article_name">@jonka</Box>
                  </Stack>
                  <Box className="article_desc">
                    Kebuli Rice with tomatoes s...
                  </Box>
                </Stack>
              </Stack>
              <Stack className="article_box">
                <img
                  src="/restaurant/article-food-1.png"
                  className="article_box_img"
                  alt=""
                />
                <Stack flexDirection={"column"} sx={{ mt: "14px", ml: "10px" }}>
                  <Stack flexDirection={"row"}>
                    <img
                      src="/restaurant/ellipse.png"
                      className="article_cook"
                      alt=""
                    />
                    <Box className="article_name">@jonka</Box>
                  </Stack>
                  <Box className="article_desc">
                    Kebuli Rice with tomatoes s...
                  </Box>
                </Stack>
              </Stack>
              <Box className="article_text">Ko’p yoqtirilgan</Box>
              <Stack className="article_box">
                <img
                  src="/restaurant/article-food-1.png"
                  className="article_box_img"
                  alt=""
                />
                <Stack flexDirection={"column"} sx={{ mt: "14px", ml: "10px" }}>
                  <Stack flexDirection={"row"}>
                    <img
                      src="/restaurant/ellipse.png"
                      className="article_cook"
                      alt=""
                    />
                    <Box className="article_name">@jonka</Box>
                  </Stack>
                  <Box className="article_desc">
                    Kebuli Rice with tomatoes s...
                  </Box>
                </Stack>
              </Stack>
              <Stack className="article_box" sx={{ mb: "111px" }}>
                <img
                  src="/restaurant/article-food-1.png"
                  className="article_box_img"
                  alt=""
                />
                <Stack flexDirection={"column"} sx={{ mt: "14px", ml: "10px" }}>
                  <Stack flexDirection={"row"}>
                    <img
                      src="/restaurant/ellipse.png"
                      className="article_cook"
                      alt=""
                    />
                    <Box className="article_name">@jonka</Box>
                  </Stack>
                  <Box className="article_desc">
                    Kebuli Rice with tomatoes s...
                  </Box>
                </Stack>
              </Stack>
            </Stack>

            <Stack flexDirection={"column"}>
              <Box className="article_text">Mashhurlar</Box>
              <Stack className="celebrities_box">
                <Box className="celebrities_box_text">Mashhurlar etirofi</Box>
                <img src="/auth/jony.png" className="celebrities_box_img"  alt="" />
              </Stack>
              <Stack className="celebrities_box celebrities_box2" >
                <Box className="celebrities_box_text">Mashhurlar etirofi</Box>
                <img src="/auth/munis.png" className="celebrities_box_img"  alt="" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
