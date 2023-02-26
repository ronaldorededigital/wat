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
                Básico{" "}
              </PriceTitleTypography>{" "}
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                textAlign: "center"
                }}
              >
                Acesso Imediato
              </TextTypography>
            </Stack>
          </Box>

          <CardContent sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
              }}
            >
              <PriceTypography sx={{ color: "#4783F0" }}>R$ 99,90</PriceTypography>
              <PriceTimeTypography sx={{ color: "#4783F0" }}>
                /mês
              </PriceTimeTypography>
            </Box>

            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Mensalidade acessivel
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                3 usuários simutâneos
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                3 Filas (setores)
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                infinitas subfilas
              </TextTypography>
            </PriceListStack>
			            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                2 conexão com whatsapp
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Chatbot multinível ilimitado
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Chat interno
              </TextTypography>
            </PriceListStack>
			            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                 sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Integração de cobrança
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Agendamento de mensagens
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Campanhas
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                CRM Completo(dash/tags/etc)
              </TextTypography>
            </PriceListStack>
            <ContainedButton
              sx={{ marginTop: "25px", textAlign: "center" }}
              variant="contained"
              href="https://crm.whatende.link/signup"
              color="success"
            >
              <ButtonTypography> Contrate agora </ButtonTypography>
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
                Padrão{" "}
              </PriceTitleTypography>{" "}
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                textAlign: "center"
                }}
              >
                Acesso imediato
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
                R$ 199,90
              </PriceTypography>
              <PriceTimeTypography sx={{ color: "#00ACC1" }}>
                /mês
              </PriceTimeTypography>
            </Box>

            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Mensalidade acessivel
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                5 usuários simutâneos
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                5 Filas (setores)
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                infinitas subfilas
              </TextTypography>
            </PriceListStack>
			            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                3 conexão com whatsapp
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Chatbot multinível ilimitado
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Chat interno
              </TextTypography>
            </PriceListStack>
			            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                 sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Integração de cobrança
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Agendamento de mensagens
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Campanhas
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                CRM Completo(dash/tags/etc)
              </TextTypography>
            </PriceListStack>
            <ContainedButton
              sx={{ marginTop: "25px", textAlign: "center" }}
              variant="contained"
              href="https://crm.whatende.link/signup"
              color="success"
            >
              <ButtonTypography> Contrate agora </ButtonTypography>
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
                Marketing{" "}
              </PriceTitleTypography>{" "}
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                textAlign: "center"
                }}
              >
                Acesso imediato
              </TextTypography>
            </Stack>
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
                R$ 299,90
              </PriceTypography>
              <PriceTimeTypography sx={{ color: "#25385C" }}>
                /mês
              </PriceTimeTypography>
            </Box>

            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Mensalidade acessivel
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                10 usuários simutâneos
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                10 Filas (setores)
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                infinitas subfilas
              </TextTypography>
            </PriceListStack>
			            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                10 conexão com whatsapp
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Chatbot multinível ilimitado
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Chat interno
              </TextTypography>
            </PriceListStack>
			            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                 sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Integração de cobrança
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Agendamento de mensagens
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                Campanhas
              </TextTypography>
            </PriceListStack>
            <PriceListStack direction="row">
              <img src={lightBlueCheck} alt=""></img>
              <TextTypography
                sx={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "27px",
                marginRight: "auto"
                }}
              >
                CRM Completo(dash/tags/etc)
              </TextTypography>
            </PriceListStack>
            <ContainedButton
              sx={{ marginTop: "25px", textAlign: "center" }}
              variant="contained"
              href="https://crm.whatende.link/signup"
              color="success"
            >
              <ButtonTypography> Contrate agora </ButtonTypography>
            </ContainedButton>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Prices;
