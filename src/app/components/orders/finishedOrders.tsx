import React from "react";
import { Box, Button, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

const finishedOrders = [
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3],
  [1, 2, 3],
];

export default function FinishedOrders(props: any) {
  return (
    <TabPanel value={"3"} >
      <Stack>
        {finishedOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = "/others/steak.jpeg";
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDishImg"} alt="" />
                      <p className={"titleDish"}>Steak</p>
                      <Box className={"priceBox"}>
                        <p>$12</p>
                        <img src="/icons/close.svg" alt="" />
                        <p>2</p>
                        <img src="/icons/pause.svg" alt="" />
                        <p style={{ marginLeft: "15px" }}>$22</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total_price_box red_finish"}>
                <Box className={" boxTotal_finish"}>
                  <p>Mahsulot narxi</p>
                  <p>$22</p>
                  <img
                    src={"/icons/Plus.svg"}
                    style={{ marginLeft: "20px" }}
                    alt=""
                  />
                  <p>Yetkazish hizmati</p>
                  <p>$2</p>
                  <img
                    src="/icons/pause.svg"
                    style={{ marginLeft: "20px" }}
                    alt=""
                  />
                  <p>Jami narx</p>
                  <p>$24</p>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}




