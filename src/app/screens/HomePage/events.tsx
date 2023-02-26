/* eslint-disable react/jsx-no-undef */
import { Box, Container, Stack } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination])

// import "swiper/css";
// import "swiper/css/pagination";

// import "swiper/css/navigation";



export function Events() {
  const events_list = [
    {
      title: "Boyin foodga marhamat",
      desc: "Yangicha usulda yangicha tam va yangicha his",
      author: "Abdurahmon Mufid",
      data: "2023/04/01",
      location: "Toshkent, Nurafshon ko'cha",
      img: "/restaurant/food-0.png",
    },
    {
      title: "Boyin foodga marhamat",
      desc: "Yangicha usulda yangicha tam va yangicha his",
      author: "Abdurahmon Mufid",
      data: "2023/04/01",
      location: "Toshkent, Nurafshon ko'cha",
      img: "/restaurant/food-1.jpeg",
    },
    {
      title: "Boyin foodga marhamat",
      desc: "Yangicha usulda yangicha tam va yangicha his",
      author: "Abdurahmon Mufid",
      data: "2023/04/01",
      location: "Toshkent, Nurafshon ko'cha",
      img: "/restaurant/food-2.jpeg",
    },
    {
      title: "Boyin foodga marhamat",
      desc: "Yangicha usulda yangicha tam va yangicha his",
      author: "Abdurahmon Mufid",
      data: "2023/04/01",
      location: "Toshkent, Nurafshon ko'cha",
      img: "/restaurant/food-3.jpeg",
    },
  ];

  return (
    <div className={"events_frame"}>
      <Container sx={{ overflow: "hidden" }}>
        <Stack className="events_main">
          <Box className="events_text">
            <span className="category_title">Hodisalar</span>
          </Box>
          <Box className="prev_next_frame">
            <img
              src="/icons/arrow_left.svg"
              className={"swiper_button_prev"}
              alt=""
            />
            <div className={"dot_frame_paginaton  swiper-pagination"}></div>
            <img
              src="/icons/arrow_right2.svg"
              className={"swiper_button_next"}
              alt=""
            />
          </Box>
          <Swiper
            className={"events_info swiper-wrapper"}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper_button_next",
              prevEl: ".swiper_button_prev",
            }}
            pagination={{
              el: ".swiper-pagination", 
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {events_list.map((value, number) => {
              return (
                <SwiperSlide className="events_info_frame">
                  <div className={"events_img"}>
                    <img src={value.img} className="events_img" alt="" />
                  </div>
                  <Box className="events_desc">
                    <Box className="events_bott">
                      <Box className="bott_left">
                        <div className="event_title_speaker">
                          <strong>{value.title}</strong>
                          <div className="event_organizator">
                            <img
                              src={"/icons/sk.svg"}
                              style={{ width: "20px", marginRight: "10px" }}
                              alt=""
                            />
                            <p className="spec_text_author">{value.author}</p>
                          </div>
                        </div>

                        <p className="text_desc" style={{ marginTop: "10px" }}>
                          {" "}
                          {value.desc}{" "}
                        </p>
                        <div
                          className="bott_info"
                          style={{ marginTop: "10px" }}
                        >
                          <div className="bott_info_main">
                            <img
                              src="/icons/calendar.svg"
                              style={{ marginRight: "10px" }}
                              alt=""
                            />
                            {value.data}
                          </div>
                          <div className="bott_info_main">
                            <img
                              src="/icons/location.svg"
                              style={{ marginRight: "10px" }}
                              alt=""
                            />
                            {value.location}
                          </div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
