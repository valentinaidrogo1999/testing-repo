import { Box, Container } from "@mui/material";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../../../styles/global.css";
import { fontSize, height, width } from "@mui/system";

const Footer = () => {
  return (
    /* footer layouts */
    <Fragment>
      <Box
        py={2}
        width="100%"
        sx={{
          backgroundColor: "#5b5656",
          height: "100px",
          display: "flex",
          padding: " 0 20px",
          textAlign: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className="iconos"
          style={{
            fontSize: "50px",
            color: "red",
          }}
        >
          <FontAwesomeIcon icon={faPhoneSquare} />
          <p maxWidth="xl">04249695875</p>
        </div>

        <div
          className="iconos"
          style={{
            fontSize: "50px",
            color: "red",
          }}
        >
          <FontAwesomeIcon icon={faInstagram} />

          <p>@decoraciones_siglo21</p>
        </div>
      </Box>
    </Fragment>
  );
};

export default Footer;
