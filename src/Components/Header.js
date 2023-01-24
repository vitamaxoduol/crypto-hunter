import {
  AppBar,
  Container,
  Box,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";
import { useCryptoContext } from "../CryptoContext";
import "./darkMode.css";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  const { currency, setCurrency } = useCryptoContext();
  console.log(currency);

  // eslint-disable-next-line
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`header ${isDark ? "dark-theme" : ""}`}>
      {/* <h1 onClick={() => setIsDark(!isDark)}>Dark Theme</h1> */}
      <AppBar color="transparent" position="static">
        <Container>
          <Box className={styles.root}>
            <Typography
              className={styles.title}
              onClick={handleClick}
              variant="h6"
            >
              Crypto Hunter
            </Typography>
            <Select
              className={styles.Select}
              variant="outlined"
              // value="USD"
              style={{
                width: 100,
                height: 40,
                maginLeft: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"KSH"}>KSH</MenuItem>
            </Select>
          </Box>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
