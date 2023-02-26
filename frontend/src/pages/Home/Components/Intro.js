import { Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

import image1 from "../assets/image1.png";

const Intro = ({
  SubtitleTypography,
  TextTypography,
  ContainedButton,
  ButtonTypography,
}) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ paddingTop: "10px", paddingBottom: "100px" }}
    >
      <Grid
        item
        lg={6}
        md={8}
        xs={12}
        sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingRight: "78px",
            maxWidth: "666px",

            letterSpacing: "0.025em",
            color: "#302F2F",
          }}
        >
          <Stack direction="column" spacing={2}>
            <SubtitleTypography>
              Todos os seus atendentes no mesmo número de Whatsapp.
            </SubtitleTypography>
        <TextTypography
          sx={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "27px",
            paddingBottom: "50px",
          }}
        >
              Organize o atendimento da sua empresa com o Whatende, centralize
              todos os atendimentos em um único lugar e tenha visão clara de
              toda a comunicação que seus atendentes tem com os clientes.
            </TextTypography>
            <ContainedButton
              href="https://crm.whatende.link/signup"
              variant="contained"
              color="primary"
            >
              <ButtonTypography>Contrate agora</ButtonTypography>
            </ContainedButton>
          </Stack>
        </Box>
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
        sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-75px",
            paddingBottom: "100px",
          }}
        >
          <img src={image1} alt="" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Intro;
