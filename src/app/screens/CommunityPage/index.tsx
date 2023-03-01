import React, { useState } from "react";
import { Container, Box, Stack } from "@mui/material";
import "../../../css/community.css";
import Tab from "@mui/material/Tab";
import Pagination from "@mui/material/Pagination";
import { TargetArticles } from "./targetArticles";
import { CommunityChats } from "./communityChats";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const targetBoArticles = [1, 2, 3, 4, 5];

export function CommunityPage(props: any) {
  // ===== INITIALIZATIONS
  const [value, setValue] = React.useState("1");

  //==== HANDLERS
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handlePaginationChange = (event: any, value: number) => {
    console.log(value);
  };

  return (
    <div className={"community_page"}>
      <div className={"community_frame"}>
        <Container sx={{ my: "50px" }}>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <CommunityChats />
            <Stack
              className={"community_all_frame"}
              inputMode={"text"}
              style={{ border: "1px solid #fff" }}
            >
              <TabContext value={value}>
                <Box className={"article_tabs"}>
                  <Box
                    sx={{ borderBottom: 1, borderColor: "divider" }}
                    className={"order_nav_frame_menu"}
                  >
                    <TabList
                      onChange={handleChange}
                      value={value}
                      aria-label="lab API tabs example"
                      style={{
                        borderColor: "blue",
                      }}
                    >
                      <Tab label="BARCHA MAQOLALAR" value={"1"} />
                      <Tab label="MASHXURLAR" value={"2"} />
                      <Tab label="OSHXONAGA BAHO" value={"3"} />
                      <Tab label="HIKOYALAR" value={"4"} />
                    </TabList>
                  </Box>
                </Box>
                <Box className={"artticle_main"}>
                  <TabPanel value={"1"}>
                    <TargetArticles targetBoArticles={[1, 2, 3]} />
                  </TabPanel>
                  <TabPanel value={"2"}>
                    <TargetArticles targetBoArticles={[1, 2, 3, 4,5,6,7,8 ]} />
                  </TabPanel>
                  <TabPanel value={"3"}>
                    <TargetArticles targetBoArticles={[1, 2]} />
                  </TabPanel>
                  <TabPanel value={"4"}>
                    <TargetArticles targetBoArticles={[1, 2, 3, 4]} />
                  </TabPanel>
                </Box>
                <Box className={"article_bott"}>
                  <Pagination
                    count={3}
                    page={1}
                    
                    renderItem={(item) => (
                      <PaginationItem
                      style={{color: "#fff"}}
                        components={{
                          previous: ArrowBackIcon,
                          next: ArrowForwardIcon,
                        }}
                        {...item}
                        color={"secondary"}
                      />
                    )}
                    onChange={handlePaginationChange}
                  />
                </Box>
              </TabContext>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
