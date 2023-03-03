import React, { useEffect, useState } from "react";
import { Box, Stack, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Dispatch } from "@reduxjs/toolkit";

const followings = [
  { mb_nick: "Abbos" },
  { mb_nick: "Islom" },
  { mb_nick: "Mardon" },
];

export function MemberFollowing(props: any) {
  return (
    <Stack>
      {followings.map((following) => {
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
              <span className={"name_text"}>{following.mb_nick}</span>
            </div>
            {props.actions_enabled && (
              <Button
                variant="contained"
                startIcon={
                  <img
                    src={"/icons/follow_icon.svg"}
                    style={{ width: "30px", marginLeft: "16px" }}
                  />
                }
                className={"follow_cancel_btn"}
              >Bekor qilish</Button>
            )}
          </Box>
        );
      })}
    </Stack>
  );
}
