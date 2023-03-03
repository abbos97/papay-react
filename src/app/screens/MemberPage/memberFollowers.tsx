import React, { useEffect, useState } from "react";
import { Box, Stack, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const followers = [
  { mb_nick: "Abbos", following: true },
  { mb_nick: "Islom", following: false },
  { mb_nick: "Mardon", following: true },
];

export function MemberFollowers(props: any) {
  return (
    <Stack>
      {followers.map((follower) => {
        const image_url = "/auth/jony.png";
        return (
          <Box className={"follow_box"}>
            <Avatar alt={""} src={image_url} sx={{ width: 89, marginLeft: "45px", height: 89 }} />
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "25px",
                height: "85%",
              }}
            >
              <span className={"username_text"}>User</span>
              <span className={"name_text"}>{follower.mb_nick}</span>
            </div>
            {props.actions_enabled &&
              (follower.following ? (
                <Button
                  variant="contained"
                  className={"following_already"}
                  disabled
                >
                  Following
                </Button>
              ) : (
                <Button
                  variant="contained"
                  startIcon={
                    <img
                      src={"icons/follow_icon.svg"}
                      style={{ width: "25px" }}
                    />
                  }
                  className={"follow_btn"}
                >
                  Follow back
                </Button>
              ))}
          </Box>
        );
      })}
    </Stack>
  );
}
