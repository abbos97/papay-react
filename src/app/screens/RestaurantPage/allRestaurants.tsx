import { Box, Button, Container, Pagination, Stack } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  IconButton,
  Link,
  Typography,
} from "@mui/joy";
import { Favorite } from "@mui/icons-material";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PaginationItem from "@mui/material/PaginationItem";

const order_list = Array.from(Array(8).keys());
console.log(order_list)


export function AllRestaurants() {
  return (
    <div className="all_restaurant">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className={"fil_search_box"}>
            <Box className={"fil_box"}>
              <a href="#">Zo'r</a>
              <a href="#">Mashhur</a>
              <a href="#">Trendagi</a>
              <a href="#">Yangi</a>
            </Box>
            <Box className={"search_big_box"}>
              <form className={"search_form"} action={""} method={""}>
                <input
                  type="search"
                  className="searchInput"
                  name="resSearch"
                  placeholder="qidiruv"
                />
                <Button
                  className={"button_search"}
                  variant="contained"
                  endIcon={<SearchIcon />}
                >
                  Izlash
                </Button>
              </form>
            </Box>
          </Box>
          <Stack className="all_res_box">
            <CssVarsProvider>
            {order_list.map(ele => {
                return (<Card
                    variant="outlined"
                    sx={{ height: 410, width: 290, mx: "17px", my: "30px", }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="1">
                        <img src={"/restaurant/restaurant1.png"} alt="" />
                      </AspectRatio>
                      <IconButton
                        aria-label="Like minimal photography"
                        size="md"
                        variant="solid"
                        color="neutral"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        sx={{
                          position: "absolute",
                          zIndex: 2,
                          borderRadius: "50%",
                          right: "1rem",
                          bottom: 0,
                          transform: "translateY(50%)",
                          color: "rgba(0,0,0,0.4)",
                        }}
                      >
                        <Favorite style={{ color: "#fff" }} />
                      </IconButton>
                    </CardOverflow>
                    <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                      Lazzat
                    </Typography>
                    <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<LocationOnRoundedIcon />}
                        textColor="neutral.700"
                      >
                        Toshkent Yunus Abod 4-1
                      </Link>
                    </Typography>
                    <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                      <Link
                        href=""
                        startDecorator={<CallIcon />}
                        textColor="neutral.700"
                      >
                        01024107060
                      </Link>
                    </Typography>
                    <CardOverflow
                      variant="soft"
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        borderTop: "1px solid",
                        borderColor: "neutral.outlineBorder",
                        bgcolor: "background.level1",
                        mt: "-10px"
                      }}
                    >
                      <Typography
                        level="body3"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                          alignItems: "center",
                          display: "flex",
                          
                        }}
                      >
                        1000{" "}
                        <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                      <Box sx={{ width: 2, bgcolor: "divider" }} />
                      <Typography
                        level="body3"
                        sx={{
                          fontWeight: "md",
                          color: "text.secondary",
                          alignitems: "center",
                          display: "flex",
                        }}
                      >
                        <div>500</div>
                        <FavoriteIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
                      </Typography>
                    </CardOverflow>
                  </Card>)
            })}
              
            </CssVarsProvider>
          </Stack>

          <Stack className="bottom_box">
            <img className="line_img" style={{transform: "rotate(270deg)"}} src="/icons/line_group.svg" alt="" />
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color="secondary"
                />
              )}
            />
            <img
              className="line_img"
              src="/icons/line_right.svg"
              alt=""
              
            />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
