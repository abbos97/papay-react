import React from "react";
import { Container, Stack, Box, Button, Rating } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Marginer from "../../components/marginer";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Checkbox from "@mui/material/Checkbox";

export function ChosenDish() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  console.log({ ...label });
  return (
    <div className={"chosen_dish_page"}>
      <Container className={"dish_container"}>
        <Stack className={"chosen_dish_slider"}>
          <Swiper
            className={"dish_swiper"}
            loop={true}
            spaceBetween={10}
            navigation={true}
            //thumbs={{swiper: thumbsSwiper}}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {Array.from(Array(3).keys()).map((ele) => {
              return (
                <SwiperSlide>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="/others/steak.jpeg"
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Stack className={"dish_swiper_down"}>
            <Swiper
              className={"dish_swiper_down_swiper"}
              loop={true}
              slidesPerView={3}
              spaceBetween={10}
            >
              {Array.from(Array(7).keys()).map((ele) => {
                return (
                  <SwiperSlide>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "15px",
                      }}
                      src="/others/steak.jpeg"
                      alt=""
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Stack>
        </Stack>

        <Stack className={"chosen_dish_info_container"}>
          <Box className={"chosen_dish_info_box"}>
            <strong className={"dish_txt"}>Sweet Sandvich</strong>
            <span className={"resto_name"}>Lazzat</span>
            <Box className={"rating_box"}>
              <Rating
                name="half-rating"
                defaultValue={3.5}
                precision={0.1}
              ></Rating>
              <div className={"evaluation_box"}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "20px",
                  }}
                >
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                     checked={true}
                  />
                  <span>98 ta</span>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                <RemoveRedEyeIcon sx={{mr: "10px"}}/>
                <span>1000 ta</span>
                </div>
              </div>
            </Box>
            <p className={"dish_desc_info"}>Quyidagi taom bizning dunyo tanigan oshpazlarimiz tomonidan tayorlangan bolib judayam mazzali va judayam yumshoq qilib tayyorlangan, istemol qiling va rohatlaning!!!</p>
            <Marginer direction="horizontal" height="1" width="100%" bg="#000"/>
            <div className={"dish_price_box"}>
                <span>Narx:</span>
                <span>$11</span>
            </div>
            <div className={"button_box"}>
                <Button variant="contained" style={{fontWeight: 600,}}>Savatga qo'shish</Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
