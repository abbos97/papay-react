import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Container, Stack, Button, Tab } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SettingsIcon from "@mui/icons-material/Settings";
import { MemberPosts } from "./memberPosts";
import { MemberFollowers } from "./memberFollowers";
import { MemberFollowing } from "./memberFollowing";
import { MySettings } from "./mySettings";
import { TuiEditor } from "../../components/tuiEditor/TuiEditor";
//  OTHERS
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TViewer from "../../components/tuiEditor/TViewer";

export function VisitMyPage(props: any) {
  // ===== INITIALIZATIONS
  const [value, setValue] = React.useState("1");

  //==== HANDLERS
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"my_page"}>
      <Container sx={{ my: "0px" }}>
        <Stack className={"my_page_frame"}>
          <TabContext value={value}>
            <Stack flexDirection={"row"}>
              <Stack className={"my_page_left"}>
                <Box display={"flex"} flexDirection={"column"}>
                  <TabPanel value={"1"}>
                    <Box className={"menu_name"}>Mening maqolalarim</Box>
                    <Box className={"menu_content"}>
                      <MemberPosts />
                      <Stack
                        sx={{ my: "40px" }}
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"center"}
                      >
                        <Box className={"bottom_box"}>
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
                                color={"secondary"}
                              />
                            )}
                          />
                        </Box>
                      </Stack>
                    </Box>
                  </TabPanel>
                  <TabPanel value={"2"}>
                    <Box className={"menu_name"}>Followers</Box>
                    <Box className={"menu_content"}>
                      <MemberFollowers actions_enabled={true} />
                    </Box>
                  </TabPanel>
                  <TabPanel value={"3"}>
                    <Box className={"menu_name"}>Following</Box>
                    <Box className={"menu_content"}>
                      <MemberFollowing actions_enabled={true}/>
                    </Box>
                  </TabPanel>

                  <TabPanel value={"4"}>
                    <Box className={"menu_name"}>Maqola yozish</Box>
                    <Box className={"write_content"}><TuiEditor/></Box>
                  </TabPanel>

                  <TabPanel value={"5"}>
                    <Box className={"menu_name"}>Tanlangan maqola</Box>
                    <Box className={"menu_content"}>
                      <TViewer text={`<h3>Hello</h3>`}/>
                    </Box>
                  </TabPanel>

                  <TabPanel value={"6"}>
                    <Box className={"menu_name"}>Malumotlarni o'zgartirish</Box>
                    <Box className={"menu_content"}><MySettings/></Box>
                  </TabPanel>
                </Box>
              </Stack>

              <Stack className={"my_page_right"}>
                <Box className={"order_info_box"}>
                  <a onClick={() => setValue("6")} className={"settings_btn"}>
                    <SettingsIcon />
                  </a>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <div className={"order_user_img"}>
                      <img
                        src="/auth/jony.png"
                        className={"order_user_avatar"}
                        alt=""
                      />
                      <div className={"order_user_icon_box"}>
                        <img src="/icons/user_icon.svg" alt="" />
                      </div>
                    </div>
                    <span className={"order_user_name"}>MuhammadAli</span>
                    <span className={"order_user_prof"}>USER</span>
                  </Box>
                  <Box className={"user_media_box_icons"}>
                    <FacebookIcon style={{fontSize: "22px"}}/>
                    <InstagramIcon style={{fontSize: "22px"}}/>
                    <TelegramIcon style={{fontSize: "22px"}}/>
                    <YouTubeIcon style={{fontSize: "22px"}}/>
                  </Box>
                  <Box className={"user_media_box"}>
                    <p className={"follows"}>Followers: 3</p>
                    <p className={"follows"}>Followings: 2</p>
                  </Box>
                  <p className={"user_desc"}>
                    "Qoshimcha malumot kiritilmagan"
                  </p>
                  <Box
                    display={"flew"}
                    justifyContent={"center"}
                    sx={{ mt: "10px" }}
                  >
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab
                        style={{ flexDirection: "column" }}
                        value={"4"}
                        component={(e) => (
                          <Button
                            variant={"contained"}
                            onClick={() => setValue("4")}
                          >
                            Maqola Yozish
                          </Button>
                        )}
                      />
                    </TabList>
                  </Box>
                </Box>
                <Box className={"my_page_menu"}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    orientation="vertical"
                  >
                    <Tab
                      style={{ flexDirection: "column" }}
                      value={"1"}
                      component={() => (
                        <div
                          className={`menu_box ${value}`}
                          onClick={() => setValue("1")}
                        >
                          <img src="/icons/Pencil.svg" alt="" />
                          <span>Maqolalarim</span>
                        </div>
                      )}
                    />

                    <Tab
                      style={{ flexDirection: "column" }}
                      value={"2"}
                      component={() => (
                        <div
                          className={`menu_box ${value}`}
                          onClick={() => setValue("2")}
                        >
                          <img src="/icons/followers.svg" alt="" />
                          <span>Followers</span>
                        </div>
                      )}
                    />

                    <Tab
                      style={{ flexDirection: "column" }}
                      value={"3"}
                      component={() => (
                        <div
                          className={`menu_box ${value}`}
                          onClick={() => setValue("3")}
                        >
                          <img src="/icons/User.svg" alt="" />
                          <span>Following</span>
                        </div>
                      )}
                    />
                  </TabList>
                </Box>
              </Stack>
            </Stack>
          </TabContext>
        </Stack>
      </Container>
    </div>
  );
}
