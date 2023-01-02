import { Container } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Fondo from "../../../assets/images/fondo.png";

const Layout = ({ children }) => {
  return (
    <div
      className="fondo"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "space-between",
      }}
    >
      <Header />
      <Container maxWidth="xl">{children}</Container>
      <Footer />
    </div>
  );
};

export default Layout;
