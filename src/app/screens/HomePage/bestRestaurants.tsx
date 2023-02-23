import { Favorite, Visibility } from "@mui/icons-material";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  IconButton,
  Link,
  Typography,
} from "@mui/joy";
import { Box, Button, Container, Stack } from "@mui/material";
import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";

export function BestRestaurants() {
  return (
    <div className="best_restaurant_frame">
      <img
        src={"/icons/line_group.svg"}
        style={{
          position: "absolute",
          left: "6%",
          transform: "rotate(360deg)",
        }}
      />
      <Container sx={{ paddingTop: "153px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="category_title">Zo’r Restaurantlar</Box>
          <Stack flexDirection={"row"} sx={{ mt: "43px" }}>
            <CssVarsProvider>
              <Card
                variant="outlined"
                sx={{ height: 483, width: 320, mr: "35px" }}
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
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  PizzaHut
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  ></Link>
                  Tashkent, bodomzor 21-1
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  ></Link>
                  +821024107060
                </Typography>

                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100{""}{" "}
                    <Visibility
                      sx={{ fontSize: 20, marginLeft: "5px" }}
                    ></Visibility>
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }}></Box>
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>50</div>{" "}
                    <Favorite
                      sx={{ fontSize: 20, marginLeft: "5px" }}
                    ></Favorite>
                  </Typography>
                </CardOverflow>
              </Card>
              <Card
                variant="outlined"
                sx={{ height: 483, width: 320, mr: "35px" }}
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
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  PizzaHut
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  ></Link>
                  Tashkent, bodomzor 21-1
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  ></Link>
                  +821024107060
                </Typography>

                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100{""}{" "}
                    <Visibility
                      sx={{ fontSize: 20, marginLeft: "5px" }}
                    ></Visibility>
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }}></Box>
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>50</div>{" "}
                    <Favorite
                      sx={{ fontSize: 20, marginLeft: "5px" }}
                    ></Favorite>
                  </Typography>
                </CardOverflow>
              </Card>
              <Card
                variant="outlined"
                sx={{ height: 483, width: 320, mr: "35px" }}
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
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  PizzaHut
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  ></Link>
                  Tashkent, bodomzor 21-1
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  ></Link>
                  +821024107060
                </Typography>

                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100{""}{" "}
                    <Visibility
                      sx={{ fontSize: 20, marginLeft: "5px" }}
                    ></Visibility>
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }}></Box>
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>50</div>{" "}
                    <Favorite
                      sx={{ fontSize: 20, marginLeft: "5px" }}
                    ></Favorite>
                  </Typography>
                </CardOverflow>
              </Card>
              <Card
                variant="outlined"
                sx={{ height: 483, width: 320, mr: "35px" }}
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
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  PizzaHut
                </Typography>
                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  ></Link>
                  Tashkent, bodomzor 21-1
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  ></Link>
                  +821024107060
                </Typography>

                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(--Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100{""}{" "}
                    <Visibility
                      sx={{ fontSize: 20, marginLeft: "5px" }}
                    ></Visibility>
                  </Typography>
                  <Box sx={{ width: 2, bgcolor: "divider" }}></Box>
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>50</div>{" "}
                    <Favorite
                      sx={{ fontSize: 20, marginLeft: "5px" }}
                    ></Favorite>
                  </Typography>
                </CardOverflow>
              </Card>
            </CssVarsProvider>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            style={{ width: "100%", marginTop: "16px" }}
          >
            <Button style={{ background: "#1976D2", color: "#fff" }}>
              BARCHASINI KO’RISH
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
