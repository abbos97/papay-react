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
  
  export function NavbarOthers(props: any) {
    return (
      <div className="format_others home_navbar">
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
                <NavLink to="/">
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
        </Container>
      </div>
    );
  }
  