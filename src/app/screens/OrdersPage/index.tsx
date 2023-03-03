import React, { useEffect, useState } from "react";
import { Container, Stack, Box } from "@mui/material";
import "../../../css/order.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "../../components/orders/pausedOrders";
import ProcessOrders from "../../components/orders/processOrders";
import FinishedOrders from "../../components/orders/finishedOrders";

export function OrdersPage() {
  // ===== INITIALIZATIONS
  const [value, setValue] = useState("1");
  

  //==== HANDLERS
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order_page">
      <Container
        maxWidth="lg"
        style={{ display: "flex", flexDirection: "row" }}
        sx={{ mt: "50px", mb: "50px" }}
      >
        <Stack className={"order_left"}>
          <TabContext value={value}>
            <Box className={"order_nav_frame"}>
              <Box
                sx={{ borderBottom: 1, borderColor: "divider" }}
                className={"order_nav_frame_menu"}
              >
                <TabList
                  onChange={handleChange}
                  value={value}
                  aria-label="basic tabs example"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  className={"order_nav_df"}
                >
                  <Tab
                    label="Buyurtmalarim"
                    value={"1"}
                    style={{ marginRight: "200px", marginLeft: "50px" }}
                  />
                  <Tab
                    label="Jarayon"
                    value={"2"}
                    style={{ marginRight: "200px" }}
                  />
                  <Tab label="Yakunlangan" value={"3"} />
                </TabList>
              </Box>
            </Box>
            <Stack className={"order_main_content"}>
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order_right"}>
          <Box className={"order_info_box"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <div className={"order_user_img"}>
                <img
                  src={"/auth/jony.png"}
                  className={"order_user_avatar"}
                  alt=""
                />
                <div className={"order_user_icon_box"}>
                  <img
                    src="/icons/user_icon.svg"
                    alt=""
                    className={"order_user_prof_img"}
                  />
                </div>
              </div>
              <span className={"order_user_name"}>MuhammadAli</span>
              <span className={"order_user_prof"}>Foydalanuvchi</span>
            </Box>
            <Box
              style={{ border: "1px solid #a1a1a1" }}
              width={"100%"}
              sx={{ mt: "40px", mb: "8px" }}
            ></Box>
            <Box className={"order_user_address"}>
              <div style={{ marginRight: "5px" }}>
                <LocationOnIcon />
              </div>
              <div className={"spec_address_txt"}>Toshkent, Mirobod 2-13</div>
            </Box>
          </Box>
          <Box className={"order_info_box"} sx={{ mt: "15px" }}>
            <input
              type="text"
              name={"card_number"}
              style={{
                width: "100%",
                background: "#F5F5F5",
                borderRadius: "5px",
                border: "none",
                height: "40px",
                padding: "0 10px",
                fontSize: "16px",
                marginTop: "20px"
              }}
              placeholder="Card number : 5243 4090 2002 7495"
            />
            <Box
              flexDirection={"row"}
              display={"flex"}
              justifyContent={"space-between"}
              mb={"10px"}
              mt={"10px"}
            >
              <input
                type="text"
                name={"card_date"}
                placeholder="07 / 24"
                style={{
                  width: "48%",
                  background: "#F5F5F5",
                  borderRadius: "5px",
                  border: "none",
                  height: "40px",
                  padding: "0 10px",
                  fontSize: "16px",
                }}
              />
              <input
                type="text"
                name={"card_cvv"}
                placeholder="CVV : 010"
                style={{
                  width: "48%",
                  background: "#F5F5F5",
                  borderRadius: "5px",
                  border: "none",
                  height: "40px",
                  padding: "0 10px",
                  fontSize: "16px",
                }}
              />
            </Box>
            <input
              type="text"
              name={"card_number"}
              style={{
                width: "100%",
                background: "#F5F5F5",
                borderRadius: "5px",
                border: "none",
                height: "40px",
                padding: "0 10px",
                fontSize: "16px",
              }}
              placeholder="MuhammadAli"
            />
            <Box flexDirection={"row"} className={"order_cards_icon"}>
              <img src="/icons/visa.png" alt="" />
              <img src="/icons/masterClass.svg" alt="" />
              <img src="/icons/Paypal.svg" alt="" />
              <img src="/icons/Western-union.svg" alt="" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
