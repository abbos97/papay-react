import { Badge, Box, Button, Checkbox, Container, Stack } from "@mui/material";
import React from "react";
import SearchInput from "@mui/icons-material/Search";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const restaurant_list = Array.from(Array(10).keys());
const product_list = Array.from(Array(8).keys());

export function OneRestaurant() {
  return (
    <div className="single_restaurant">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar_big_box"}>
            <Box className={"top_text"}>
              <p>Lazzat</p>
              <Box className={"Single_search_big_box"}>
                <form className={"Single_search_form"} action="" method="">
                  <input
                    type="search"
                    className={"Single_searchInput"}
                    name="Single_resSearch"
                    placeholder="Qidiruv"
                  />
                  <Button
                    className={"Single_button_search"}
                    variant="contained"
                    endIcon={<SearchInput />}
                  >
                    Izlash
                  </Button>
                </form>
              </Box>
            </Box>
          </Stack>

          <Stack
            style={{ width: "100%", display: "flex" }}
            flexDirection={"row"}
            sx={{ mt: "35px" }}
          >
            <Box className={"prev_btn restaurant-prev"}>
              <ArrowBackIosNewIcon
                sx={{ fontSize: 40, color: "#fff", cursor: "pointer" }}
              />
            </Box>
            <Swiper
              className={"restaurant_avatars_wrapper"}
              slidesPerView={7}
              centeredSlides={false}
              spaceBetween={30}
              navigation={{
                nextEl: ".restaurant-next",
                prevEl: ".restaurant-prev",
              }}
            >
              {restaurant_list.map((ele, index) => {
                return (
                  <SwiperSlide
                    style={{ cursor: "pointer" }}
                    key={index}
                    className={"restaurant_avatars"}
                  >
                    <img src="/restaurant/restaurant1.png" alt="" />
                    <span>Lazzat</span>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Box className={"next_btn restaurant-next"}>
              <ArrowForwardIosIcon
                sx={{ fontSize: 40, color: "#fff", cursor: "pointer" }}
              />
            </Box>
          </Stack>

          <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-end"}
            width={"90%"}
            sx={{ mt: "65px" }}
          >
            <Box className={"dishs_filter_box"}>
              <Button variant={"contained"} color="secondary">
                new
              </Button>
              <Button variant={"contained"} color="secondary">
                price
              </Button>
              <Button variant={"contained"} color="secondary">
                likes
              </Button>
              <Button variant={"contained"} color="secondary">
                views
              </Button>
            </Box>
          </Stack>

          <Stack
            style={{ width: "100%", display: "flex", minHeight: "600px" }}
            flexDirection={"row"}
          >
            <Stack className={"dish_category_box"}>
              <div className={"dish_category_main"}>
                <Button variant={"contained"} color="secondary">
                  Boshqa
                </Button>
                <Button variant={"contained"} color="secondary">
                  Desert
                </Button>
                <Button variant={"contained"} color="secondary">
                  Ichimlik
                </Button>
                <Button variant={"contained"} color="secondary">
                  Salad
                </Button>
                <Button variant={"contained"} color="secondary">
                  Ovqatlar
                </Button>
              </div>
            </Stack>
            <Stack className={"dish_wrapper"}>
              {product_list.map((ele, index) => {
                const size_volume = "normal size";

                return (
                  <Box className={"dish_box"} key={`${index}`}>
                    <Box
                      className={"dish_img"}
                      sx={{ backgroundImage: `url("/others/italy-food.jpeg")` }}
                    >
                      <div className={"dish_sale"}>{size_volume}</div>
                      <Button
                        className={"like_view_btn"}
                        style={{ left: "36px" }}
                      >
                        <Badge badgeContent={8} color="primary">
                          <Checkbox
                            icon={<FavoriteBorder style={{ color: "#fff" }} />}
                            id={`${index}`}
                            checkedIcon={<Favorite style={{ color: "red" }} />}
                            // click ignore
                            checked={true}
                          />
                        </Badge>
                      </Button>
                      <Button className={"view_btn"}>
                        <img
                          src="/icons/shopping-cart.svg"
                          style={{ display: "flex" }}
                          alt=""
                        />
                      </Button>
                      <Button
                        className={"like_view_btn"}
                        style={{ right: "36px" }}
                      >
                        <Badge badgeContent={1000} color="primary">
                          <Checkbox
                            icon={
                              <RemoveRedEyeIcon style={{ color: "#fff" }} />
                            }
                          />
                        </Badge>
                      </Button>
                    </Box>
                    <Box className={"dish_desc"}>
                      <span className={"dish_title_text"}>Mazzali taom</span>
                      <div className={"dish_desc_text"}>
                        <MonetizationOnIcon />7
                      </div>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Container>

      {/* <div className={"review_for_restaurant"}>
        <Container></Container>
      </div>

      <Container className={"member_review"}></Container> */}
    </div>
  );
}
