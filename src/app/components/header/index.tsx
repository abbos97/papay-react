import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export function NavbarHome(props: any) {
  return (
    <div className="format home_navbar">
      <Container>
        <Stack
          flexDirection={"row"}
          className="navbar_config"
          justifyContent={"space-between"}
        >
          <Box>
            <img src="/icons/Papay.svg" />
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignContent={"center"}
            className="navbar_links"
          >
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to="/" activeClassName="underline">
                Bosh sahifa
              </NavLink>
            </Box>
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to="/restaurant" activeClassName="underline">
                Oshhona
              </NavLink>
            </Box>
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to="/orders" activeClassName="underline">
                Buyurtma
              </NavLink>
            </Box>
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to="/community" activeClassName="underline">
                Jamiyat
              </NavLink>
            </Box>
            <Box className="hover_line" onClick={props.setPath}>
              <NavLink to="/help" activeClassName="underline">
                Yordam
              </NavLink>
            </Box>
            <Box className="hover_line">
              <IconButton
                aria-label="cart"
                id="basic_button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
              >
                <Badge badgeContent={3} color="secondary">
                  <img src="/icons/shopping-cart.svg" />
                </Badge>
              </IconButton>
            </Box>
            <Box>
              <Button
                variant="contained"
                style={{ color: "#fff", background: "#1976D2" }}
              >
                KIRISH
              </Button>
            </Box>
          </Stack>
        </Stack>
        <Stack className="head_information" justifyContent={"row"}>
          <Stack
            flexDirection={"column"}
            style={{ marginTop: "86px", marginLeft: "24px" }}
          >
            <Box>
              {" "}
              <img src="/icons/wellcome.svg" />
            </Box>
            <Box className="define_restaurant">
              The Authentic Restaurant & Cafe
            </Box>
            <Box className="timeline_service">24 soat xizmatingizdamiz.</Box>
            <Box sx={{ mt: "90px" }}>
              <Button
                variant="contained"
                style={{
                  width: "210px",
                  height: "60px",
                  background: "#1976D2",
                  color: "#fff",
                }}
              >
                RO???YHATDAN O???TISH
              </Button>
            </Box>
          </Stack>
          <Stack flexDirection={"column"}>
            <Box className="big_img"></Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
