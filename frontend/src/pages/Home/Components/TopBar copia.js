import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import icon from "../assets/icon.png";

const TopBar = ({ ContainedButton, ButtonTypography }) => {
  return (
    <>
      <Box
        sx={{
          zIndex: 100,
          fontStyle: "normal",
          fontSize: "20px",
          letterSpacing: "0.025em",
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          height: "90px",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.1))",
          position: 'fixed',
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            paddingTop: "10px",
            height: "75px",
          }}
        >
          <Stack direction="row">
            <img
              style={{
                width: 50,
                height: 50,
                marginTop: "-5px",
              }}
              src={icon}
              alt=""
            />

            <Typography
              sx={{ fontSize: "30px", fontFamily: "Exo", fontWeight: "400" }}
            >
              Wh
            </Typography>
            <Typography
              sx={{ fontSize: "30px", fontFamily: "Exo", fontWeight: "700" }}
            >
              atende
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Button
              href="/login"
              sx={{
                borderRadius: "10px",
                width: "90px",
                height: "50px",
                textTransform: "none",
              }}
              color="secondary"
            >
              <ButtonTypography>Entrar</ButtonTypography>
            </Button>
            <ContainedButton
              variant="contained"
              color="primary"
              href="/login"
            >
              <ButtonTypography>Contrate agora</ButtonTypography>
            </ContainedButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default TopBar;
