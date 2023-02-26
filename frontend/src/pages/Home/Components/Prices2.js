import Box from "@mui/material/Box";
import React from "react";

import lightBlueCheck from "../assets/lightBlueCheck.png";
import lightGreenCheck from "../assets/lightGreenCheck.png";
import darkCheck from "../assets/darkCheck.png";

import StarRounded from "@mui/icons-material/StarRounded";

import { styled } from "@mui/system";
import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

const PriceTypography = styled(Typography)({
  fontFamily: "Exo",
  fontStyle: "normal",
  fontWeight: "800",
  fontSize: "30px",
  lineHeight: "41px",
  letterSpacing: "0.025em",
});

const PriceTitleTypography = styled(Typography)({
  fontFamily: "Exo",
  fontStyle: "normal",
  fontWeight: "800",
  fontSize: "30px",
  lineHeight: "41px",

  color: "#fff",
  textAlign: "center",
  letterSpacing: "0.025em",
});

const PriceTimeTypography = styled(Typography)({
  fontFamily: "Exo",
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "27px",
  letterSpacing: "0.025em",

  color: "#4783F0",
});

const PriceListStack = styled(Stack)({
  direction: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const Prices = ({ TextTypography, ContainedButton, ButtonTypography }) => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        lg={4}
        md={6}
        xs={12}
        sx={{
          zIndex: "20",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.29))",
          paddingBottom: "30px",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            height: "auto",
            borderRadius: "20px 20px 20px 20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              height: "108px",

              background: "#4783F0",
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <PriceTitleTypography
              sx={{
                paddingTop: "35px",
              }}
            >
              {" "}
              Código aberto{" "}
            </PriceTitleTypography>
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <PriceTypography sx={{ color: "#4783F0" }}>R$ 0</PriceTypography>
              <PriceTimeTypography sx={{ color: "#4783F0" }}>
                /mês
              </PriceTimeTypography>
            </Box>

            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Versão de código aberto
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Instalação por sua conta
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Sem atualizações constantes
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Sem suporte oficial
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Comunidade no GitHub
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Funcionalidades básicas
              </TextTypography>
            </PriceListStack>

            <ContainedButton
              sx={{ marginTop: "25px", textAlign: "center" }}
              variant="contained"
              href="https://crm.whatende.link"
              color="success"
            >
              <ButtonTypography> GitHub </ButtonTypography>
            </ContainedButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xs={12}
        sx={{
          zIndex: "20",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.34))",
          marginTop: "-30px",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            height: "auto",
            borderRadius: "20px 20px 20px 20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              height: "108px",

              background: "#00ACC1",
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <Stack
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <PriceTitleTypography
                sx={{
                  paddingTop: "20px",
                }}
              >
                {" "}
                Pro{" "}
              </PriceTitleTypography>{" "}
              <TextTypography
                sx={{
                  textAlign: "center",
                  color: "#FCEBEB",
                }}
              >
                Mais popular
              </TextTypography>
            </Stack>
            <StarRounded
              sx={{
                color: "#f1edf3",
                position: "absolute",
                marginLeft: "290px",
                width: "50px",
                height: "50px",
              }}
            />
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <PriceTypography
                sx={{
                  color: "#00ACC1",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                R$ 209,70
              </PriceTypography>
              <PriceTimeTypography sx={{ color: "#00ACC1" }}>
                /mês
              </PriceTimeTypography>
            </Box>

            <PriceListStack direction="row">
              <img src={lightGreenCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Ativação imediata
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightGreenCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                3 usuários simultâneos
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightGreenCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                1 conexão com whatsapp
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightGreenCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Chatbot multinível ilimitado
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightGreenCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Respostas rápidas
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightGreenCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Relatórios
              </TextTypography>
            </PriceListStack>

            <ContainedButton
              sx={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center",
              }}
              variant="contained"
              href="https://crm.whatende.link/signup"
              color="warning"
            >
              <ButtonTypography sx={{ color: "#fff" }}>
                {" "}
                Contrate agora{" "}
              </ButtonTypography>
            </ContainedButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        lg={4}
        md={6}
        xs={12}
        sx={{
          zIndex: "20",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.29))",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            borderRadius: "20px 20px 20px 20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "auto",
              height: "108px",

              background: "#25385C",
              borderRadius: "20px 20px 0px 0px",
            }}
          >
            <PriceTitleTypography
              sx={{
                paddingTop: "35px",
              }}
            >
              {" "}
              Enterprise{" "}
            </PriceTitleTypography>
          </Box>
          <CardContent sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <PriceTypography sx={{ color: "#25385C" }}>
                R$ 699,00
              </PriceTypography>
              <PriceTimeTypography sx={{ color: "#25385C" }}>
                /mês
              </PriceTimeTypography>
            </Box>

            <PriceListStack direction="row">
              <img src={darkCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Ativação imediata
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={darkCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                8 usuários simultâneos
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={darkCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                2 conexões com Whatsapp
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={darkCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Chatbot multinível ilimitado
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={darkCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Respostas rápidas
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={darkCheck} alt=""></img>
              <TextTypography sx={{ marginRight: "auto" }}>
                Relatórios
              </TextTypography>
            </PriceListStack>

            <ContainedButton
              sx={{ marginTop: "25px", textAlign: "center" }}
              variant="contained"
              href="https://crm.whatende.link/signup"
              color="danger"
            >
              <ButtonTypography
                sx={{
                  color: "#fff",
                }}
              >
                {" "}
                Contrate agora{" "}
              </ButtonTypography>
            </ContainedButton>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Prices;
