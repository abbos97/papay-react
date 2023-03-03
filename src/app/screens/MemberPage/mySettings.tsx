import React, { useRef, useEffect, useState } from "react";
import { Box, Container, Stack, Button, Tab } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export function MySettings(props: any) {
  return (
    <Box className={"my_settings_page"}>
      <Box className={"member_media_frame"}>
        <img
          src="/auth/jony.png"
          className={"mb_image"}
          style={{ borderRadius: "50%" }}
          width={"100px"}
          height={"100px"}
          alt=""
        />
        <div className="media_change_box">
          <span>Rasm yuklash</span>
          <p>JPG, JPEG, PNG, rasmlarni yuklashiz mumkun!</p>
          <div className="up_del_box">
            <Button component="label" style={{ minWidth: "0", color: "#03053D" }}>
              <CloudDownloadIcon />
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className="long_input">
          <label className={"spec_label"}>Ism</label>
          <input
            className={"spec_input mb_nick"}
            type="text"
            placeholder="Ganiev Mardon"
            name="mb_nick"
          />
        </div>
      </Box>
      <Box className="input_frame">
        <div className="short_input">
          <label className={"spec_label"}>Telefon raqam</label>
          <input
            className={"spec_input mb_phone"}
            type="text"
            placeholder="99890 3202233"
            name="mb_phone"
          />
        </div>
        <div className="short_input">
          <label className="spec_label">Manzil</label>
          <input
            className="spec_input mb_address"
            type="text"
            placeholder="Toshkent, Yunus Abad 14-2"
            name={"mb_address"}
          />
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className="long_input">
          <label className="spec_label">Ma'lumot</label>
          <textarea
            className={"spec_textarea mb_description"}
            placeholder="mavjud emas"
            name="mb_description"
          />
        </div>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} sx={{mt: "25px"}}>
        <Button variant={"contained"}>Saqlash</Button>
      </Box>
    </Box>
  );
}
